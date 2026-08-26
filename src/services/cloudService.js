import { supabase } from '../lib/supabase';

export const cloudService = {
  // --- Tareas ---
  async fetchProgress(userId) {
    const { data } = await supabase.from('task_progress').select('task_id').eq('user_id', userId);
    return data ? data.map(t => t.task_id) : [];
  },
  async toggleTask(userId, taskId, isCompleted) {
    if (isCompleted) return await supabase.from('task_progress').delete().match({ user_id: userId, task_id: taskId });
    return await supabase.from('task_progress').insert({ user_id: userId, task_id: taskId });
  },
  
  // --- Feedback e Inteligencia ---
  async logHint(userId, exerciseId, hintLevel) {
    return await supabase.from('hint_usage').insert({ user_id: userId, exercise_id: exerciseId, hint_level: hintLevel });
  },
  async logFeedback(userId, contentId, status) {
    return await supabase.from('content_feedback').insert({ user_id: userId, content_id: contentId, status });
  },
  async fetchAnalytics(userId) {
    const { data: hints } = await supabase.from('hint_usage').select('exercise_id').eq('user_id', userId);
    const { data: fb } = await supabase.from('content_feedback').select('content_id, status').eq('user_id', userId);
    return { hints: hints || [], feedback: fb || [] };
  },

  // --- Tutor IA ---
  async askTutor(userId, prompt, context) {
    try {
      const { data, error } = await supabase.functions.invoke('tutor-ai', { body: { prompt, context } });
      if (error) throw error;
      return data.reply;
    } catch (e) {
      console.error("ERROR REAL DEL TUTOR IA:", e); // <-- esto nos dirá qué pasó
      return "Soy tu Tutor IA. Veo que estás en " + context.stage + ". (Nota: Configura la Edge Function de Supabase para obtener respuestas reales del LLM). Te sugiero repasar los conceptos paso a paso.";
    }
  },

  // --- Laboratorio ---
  async saveLabExperiment(userId, language, code) {
    return await supabase.from('lab_experiments').insert({ user_id: userId, language, code });
  },
  
  // --- Exámenes ---
  async saveExamResult(userId, stageId, score, passed) {
    return await supabase.from('exam_attempts').insert({ user_id: userId, stage_id: stageId, score, passed });
  }
};