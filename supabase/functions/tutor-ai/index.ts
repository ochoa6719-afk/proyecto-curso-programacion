import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  try {
    const { prompt, context } = await req.json()
    const apiKey = Deno.env.get('GEMINI_API_KEY')

    const systemPrompt = `Eres un tutor de programación empático, claro y directo.
El estudiante está en la etapa: ${context?.stage || 'desconocida'}.
Reglas:
- Si pregunta un concepto, explícalo de forma sencilla y con un ejemplo corto.
- Si pide ayuda con un ejercicio, da UNA pista a la vez. Nunca des la solución completa a la primera.
- Si pega código con error, explica QUÉ está mal y POR QUÉ, no solo la corrección.
- Sé motivador pero no condescendiente. Respuestas breves y directas.`

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent",
      {
        method: "POST",
        headers: {
          "x-goog-api-key": apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            { role: "user", parts: [{ text: prompt }] }
          ],
          systemInstruction: {
            parts: [{ text: systemPrompt }]
          }
        })
      }
    )

    const data = await response.json()

    if (data.error) {
      return new Response(JSON.stringify({ reply: "El tutor no pudo responder ahora mismo. Intenta de nuevo en un momento." }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text
      || "No obtuve una respuesta clara, ¿puedes reformular tu pregunta?"

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: corsHeaders
    })
  }
})