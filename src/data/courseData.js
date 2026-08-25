export const courseData = {
  dictionary: [
    { id: 'algoritmo', term: 'Algoritmo', def: 'Secuencia de pasos finitos para resolver un problema.', related: ['etapa-1'] },
    { id: 'variable', term: 'Variable', def: 'Caja en la memoria donde guardamos información.', related: ['etapa-2'] },
    { id: 'bucle', term: 'Bucle / Loop', def: 'Estructura que repite un bloque de código.', related: ['etapa-3'] },
  ],
  skills: {
    name: 'Programación Base',
    children: [
      { id: 'etapa-1', name: 'Lógica', status: 'pending' },
      { id: 'etapa-2', name: 'Python Básico', status: 'locked' },
      { id: 'etapa-3', name: 'Python Intermedio', status: 'locked' },
    ]
  },
  stages: [
    {
      id: "etapa-1", num: 1, title: "Pensamiento lógico",
      objective: "Aprender a dividir problemas complejos en pasos lógicos.",
      theory: "Un algoritmo es una receta: una serie de pasos finitos para resolver un problema. Todo programa recibe datos (Entrada), hace algo con ellos (Proceso) y devuelve un resultado (Salida).",
      code: "1. Calentar agua\n2. Poner café\n3. Servir",
      exercises: [
        { 
          id: "e1-1", level: "Fácil", desc: "Escribe en papel los pasos exactos para preparar un sándwich.",
          hints: ["Piensa en el primer ingrediente.", "¿Qué herramienta necesitas para esparcir algo?"],
          solution: "1. Tomar pan\n2. Untar mantequilla..."
        }
      ],
      mainProject: "Calculadora en Pseudocódigo",
      checklist: [{ id: "chk1-1", text: "Entiendo qué es un algoritmo" }],
      exam: {
        id: "exam-1",
        questions: [
          { q: "¿Qué es un algoritmo?", options: ["Un lenguaje", "Pasos finitos para resolver un problema", "Un error"], ans: 1 }
        ]
      }
    },
    {
      id: "etapa-2", num: 2, title: "Python básico",
      objective: "Escribir tus primeras líneas de código entendiendo variables.",
      theory: "Las variables son cajas donde guardamos información.",
      code: "nombre = 'Juan'\nedad = 25\nprint('Hola ' + nombre)",
      exercises: [
        { 
          id: "e2-1", level: "Fácil", desc: "Crea variables para tu nombre, edad y altura. Imprímelas.",
          hints: ["Usa signos '=' para asignar.", "Usa print() para mostrar."],
          solution: "nombre = 'Ana'\nprint(nombre)"
        }
      ],
      mainProject: "Conversor de Unidades",
      checklist: [{ id: "chk2-1", text: "Uso variables correctamente" }],
      exam: {
        id: "exam-2",
        questions: [
          { q: "¿Qué función se usa para mostrar texto en consola en Python?", options: ["show()", "print()", "echo()"], ans: 1 }
        ]
      }
    }
  ]
};