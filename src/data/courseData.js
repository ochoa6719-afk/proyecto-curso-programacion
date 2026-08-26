export const courseData = {
  intro: {
    mentality: [
      "Piensa en problemas, no en código: divide un problema grande en partes pequeñas antes de escribir una línea.",
      "La frustración es normal: los errores (bugs) son parte del aprendizaje, no un fracaso.",
      "Lee la documentación: Google y StackOverflow son tus amigos, pero la documentación oficial es la fuente de la verdad.",
      "Aprende a buscar bien: en lugar de 'no funciona', busca el mensaje de error exacto.",
      "Usa Git desde el día uno: guardar versiones de tu código te salva de perder trabajo.",
      "Usa la IA como mentor, no como reemplazo: pide pistas y explicaciones, no soluciones completas."
    ],
    ai: [
      { type: "MAL", text: "'Escribe todo el código para una calculadora.' (Te vuelve dependiente)" },
      { type: "BIEN", text: "'Tengo este error en la línea 12, ¿qué significa este TypeError?'" },
      { type: "BIEN", text: "'Dame una pista para resolver este problema, pero no me des el código.'" },
      { type: "BIEN", text: "'Revisa esta función y dime si estoy aplicando buenas prácticas.'" }
    ],
    levels: [
      { level: "NIVEL 1 — PRINCIPIANTE", goal: "Aprender a pensar como programador. Entender lógica básica." },
      { level: "NIVEL 2 — BÁSICO", goal: "Crear programas de consola sencillos sin ayuda constante." },
      { level: "NIVEL 3 — INTERMEDIO", goal: "Crear aplicaciones completas conectadas a bases de datos." },
      { level: "NIVEL 4 — AVANZADO", goal: "Desarrollar software con arquitectura, testing y seguridad." },
      { level: "NIVEL 5 — PROFESIONAL", goal: "Capacidad para trabajar en proyectos reales y desplegarlos." }
    ]
  },
  stages: [
    // ==================== ETAPA 0 ====================
    {
      id: "etapa-0",
      num: 0,
      title: "Preparación",
      objective: "Configurar tu entorno de trabajo y entender cómo funciona tu computadora al programar.",
      concepts: ["Archivos y extensiones", "Terminal vs Interfaz Gráfica", "Instalación de Python", "VS Code"],
      theory: "Antes de programar, necesitas herramientas. El editor de código (VS Code) es donde escribes, y la terminal es donde ejecutas. Python es un lenguaje interpretado: un programa (el intérprete) lee tu código línea por línea y lo ejecuta en tu computadora.",
      code: "// En la terminal:\npython --version\n// Esto le pide a la computadora que verifique si el intérprete está instalado.",
      exercises: [
        { id: "e0-1", level: "Fácil", desc: "Muestra las extensiones de archivo en tu sistema operativo y crea un archivo 'prueba.py'.",
          hints: ["En Windows: Opciones de carpeta > Ver > desmarcar 'Ocultar extensiones'.", "En Mac: Finder > Preferencias > Avanzado > Mostrar extensiones."],
          solution: "No aplica código; es una tarea de configuración del sistema operativo." },
        { id: "e0-2", level: "Intermedio", desc: "Abre la terminal y navega hasta tu carpeta de Escritorio usando comandos (cd).",
          hints: ["El comando 'cd' significa 'change directory'.", "Usa 'ls' (Mac/Linux) o 'dir' (Windows) para ver el contenido de la carpeta actual."],
          solution: "cd Desktop  (o cd Escritorio, según el idioma del sistema)" },
        { id: "e0-3", level: "Reto", desc: "Instala VS Code, añade la extensión oficial de Python y cambia el tema de colores.",
          hints: ["Busca 'Python' en el marketplace de extensiones (ícono de cuadraditos).", "Usa Ctrl+K Ctrl+T para cambiar el tema."],
          solution: "No aplica código; es una tarea de instalación y configuración." }
      ],
      miniProjects: ["Estructura de Carpetas: crea una jerarquía de carpetas para tu curso (Etapa1, Etapa2, etc.) usando solo la terminal (mkdir)."],
      mainProject: "Entorno Listo: ejecutar tu primer archivo con un print básico desde la terminal.",
      errors: ["Escribir código en Word (no guarda texto plano y agrega formato invisible).", "No saber en qué carpeta está guardado el archivo al intentar ejecutarlo."],
      practices: ["Usa nombres de carpetas y archivos sin espacios ni acentos (ej. 'mis_proyectos' en vez de 'Mis Proyectos 2!')."],
      checklist: [
        { id: "chk0-1", text: "Python instalado" },
        { id: "chk0-2", text: "VS Code configurado con extensión de Python" },
        { id: "chk0-3", text: "Sé abrir y navegar la terminal" }
      ],
      exam: {
        id: "exam-0",
        questions: [
          { q: "¿Qué comando se usa para cambiar de carpeta en la terminal?", options: ["mkdir", "cd", "ls", "run"], ans: 1 },
          { q: "¿Por qué no se recomienda escribir código en Word?", options: ["Es más lento", "Agrega formato que rompe el código", "No tiene corrector ortográfico", "No permite guardar"], ans: 1 }
        ]
      }
    },

    // ==================== ETAPA 1 ====================
    {
      id: "etapa-1",
      num: 1,
      title: "Pensamiento lógico y fundamentos",
      objective: "Aprender a dividir problemas complejos en pasos lógicos (algoritmos) antes de escribir código.",
      concepts: ["Algoritmos", "Diagramas de flujo", "Pseudocódigo", "Entrada/Proceso/Salida"],
      theory: "Un algoritmo es una receta: una serie de pasos finitos para resolver un problema. Todo programa recibe datos (Entrada), hace algo con ellos (Proceso) y devuelve un resultado (Salida). El pseudocódigo es una forma de escribir esos pasos en lenguaje casi humano, sin preocuparte por la sintaxis de un lenguaje real.",
      code: "Algoritmo para hacer café:\n1. Calentar agua\n2. Poner café en el filtro\n3. Verter agua caliente\n4. Servir (Salida)",
      exercises: [
        { id: "e1-1", level: "Fácil", desc: "Escribe en papel los pasos exactos para preparar un sándwich, sin asumir nada obvio.",
          hints: ["Piensa qué pasaría si un robot sin sentido común siguiera tus instrucciones.", "¿Mencionaste abrir el paquete de pan?"],
          solution: "1. Tomar dos rebanadas de pan\n2. Untar mantequilla\n3. Agregar relleno\n4. Unir las rebanadas" },
        { id: "e1-2", level: "Intermedio", desc: "Escribe el pseudocódigo para determinar si un número es par o impar.",
          hints: ["Usa el operador módulo (%) para saber el resto de una división.", "Si el resto de dividir entre 2 es 0, el número es par."],
          solution: "Leer numero\nSi numero % 2 == 0 entonces\n    Mostrar 'Es par'\nSino\n    Mostrar 'Es impar'" },
        { id: "e1-3", level: "Reto", desc: "Diseña un algoritmo para encontrar la carta más alta en un mazo desordenado de 5 cartas.",
          hints: ["Necesitas una variable para 'guardar' la carta más alta encontrada hasta el momento.", "Compara cada carta nueva contra la que tienes guardada."],
          solution: "mayor = primera carta\nPara cada carta restante:\n    Si carta > mayor entonces\n        mayor = carta\nMostrar mayor" }
      ],
      miniProjects: ["Juego mental: explícale a alguien un algoritmo cotidiano sin usar ninguna palabra técnica de programación."],
      mainProject: "Calculadora en Pseudocódigo: diseña el flujo completo de una calculadora en papel, incluyendo el manejo del error de dividir por cero.",
      errors: ["Asumir pasos obvios (las computadoras no tienen sentido común).", "Saltarse el diseño y empezar a programar directamente."],
      practices: ["Piensa antes de teclear: escribir código es el último paso, no el primero."],
      checklist: [
        { id: "chk1-1", text: "Entiendo qué es un algoritmo" },
        { id: "chk1-2", text: "Puedo dividir un problema diario en pasos" },
        { id: "chk1-3", text: "Sé escribir pseudocódigo simple" }
      ],
      exam: {
        id: "exam-1",
        questions: [
          { q: "¿Qué es un algoritmo?", options: ["Un lenguaje de programación", "Una serie de pasos finitos para resolver un problema", "Un tipo de dato", "Un error de código"], ans: 1 },
          { q: "¿Qué operador se usa para saber si un número es par?", options: ["+", "%", "/", "*"], ans: 1 }
        ]
      }
    },

    // ==================== ETAPA 2 ====================
    {
      id: "etapa-2",
      num: 2,
      title: "Python básico",
      objective: "Escribir tus primeras líneas de código entendiendo variables, tipos de datos y operadores.",
      concepts: ["Variables", "Strings, Integers, Floats, Booleans", "Operadores (+, -, *, /, %, ==, !=)", "input() y print()"],
      theory: "Las variables son cajas donde guardamos información. El tipo de dato define qué podemos hacer con esa caja: no puedes sumar una palabra (String) y un número (Integer) directamente. input() siempre devuelve texto, así que si necesitas un número debes convertirlo con int() o float().",
      code: "nombre = 'Juan'          # String\nedad = 25                # Integer\naltura = 1.75             # Float\nprint('Hola', nombre, '- tienes', edad, 'años')",
      exercises: [
        { id: "e2-1", level: "Fácil", desc: "Crea variables para tu nombre, edad y altura, e imprímelas en una sola línea.",
          hints: ["Usa el signo = para asignar un valor a una variable.", "print() acepta varios valores separados por comas."],
          solution: "nombre = 'Ana'\nedad = 20\naltura = 1.65\nprint(nombre, edad, altura)" },
        { id: "e2-2", level: "Intermedio", desc: "Pide al usuario su año de nacimiento y calcula su edad actual.",
          hints: ["Usa la función input().", "Convierte el resultado con int() antes de restar."],
          solution: "anio = int(input('Año de nacimiento: '))\nedad = 2026 - anio\nprint('Tienes', edad, 'años')" },
        { id: "e2-3", level: "Reto", desc: "Calcula el Índice de Masa Corporal (IMC) pidiendo peso y altura al usuario.",
          hints: ["La fórmula es peso / (altura * altura).", "Recuerda convertir ambos valores a float()."],
          solution: "peso = float(input('Peso (kg): '))\naltura = float(input('Altura (m): '))\nimc = peso / (altura ** 2)\nprint('Tu IMC es:', round(imc, 2))" }
      ],
      miniProjects: ["Generador de historias locas (Mad Libs): pide sustantivos y verbos al usuario y arma una historia cómica concatenando texto."],
      mainProject: "Conversor de Unidades: un programa que pida una temperatura en Celsius y la imprima en Fahrenheit y Kelvin.",
      errors: ["Olvidar convertir el resultado de input() a int o float antes de operar matemáticamente.", "Confundir = (asignación) con == (comparación)."],
      practices: ["Usa nombres de variables descriptivos (ej. 'edad_usuario', no 'x')."],
      checklist: [
        { id: "chk2-1", text: "Uso variables correctamente" },
        { id: "chk2-2", text: "Entiendo los tipos de datos" },
        { id: "chk2-3", text: "Uso input() sin errores" }
      ],
      exam: {
        id: "exam-2",
        questions: [
          { q: "¿Qué función permite pedir datos al usuario en consola?", options: ["print()", "input()", "get()", "scan()"], ans: 1 },
          { q: "¿Qué tipo de dato es 25.5?", options: ["String", "Integer", "Float", "Boolean"], ans: 2 },
          { q: "¿Qué devuelve siempre input() antes de convertirlo?", options: ["Un número", "Un texto (String)", "Un booleano", "Una lista"], ans: 1 }
        ]
      }
    },

    // ==================== ETAPA 3 ====================
    {
      id: "etapa-3",
      num: 3,
      title: "Python intermedio: Control de Flujo",
      objective: "Darle 'inteligencia' a tu programa para que tome decisiones y repita tareas automáticamente.",
      concepts: ["if / elif / else", "Bucles for y while", "Listas", "break y continue"],
      theory: "Los condicionales evalúan si algo es Verdadero o Falso y ejecutan código distinto según el resultado. Los bucles repiten un bloque de código: 'for' cuando sabes cuántas veces se repite (o recorres una lista), y 'while' cuando depende de una condición que puede cambiar. Las listas guardan múltiples datos en orden, accesibles por índice.",
      code: "edad = 20\nif edad >= 18:\n    print('Adulto')\nelse:\n    print('Menor de edad')\n\nfor numero in [1, 2, 3]:\n    print(numero)",
      exercises: [
        { id: "e3-1", level: "Fácil", desc: "Crea una lista de 5 compras e imprímelas una por una usando un for.",
          hints: ["Crea la lista con corchetes [].", "Escribe: for item in lista:"],
          solution: "compras = ['pan', 'leche', 'huevos', 'café', 'azúcar']\nfor item in compras:\n    print(item)" },
        { id: "e3-2", level: "Intermedio", desc: "Escribe un programa que imprima los números del 1 al 10, pero se detenga si llega a 7.",
          hints: ["Usa un bucle for con range(1, 11).", "Usa 'if numero == 7: break' dentro del bucle."],
          solution: "for numero in range(1, 11):\n    if numero == 7:\n        break\n    print(numero)" },
        { id: "e3-3", level: "Reto", desc: "Crea un juego de adivinar un número: el programa 'piensa' un número entre 1 y 10 y el usuario debe adivinarlo usando un while.",
          hints: ["Usa import random y random.randint(1, 10).", "El bucle while sigue hasta que la variable 'intento' sea igual al número secreto."],
          solution: "import random\nsecreto = random.randint(1, 10)\nintento = 0\nwhile intento != secreto:\n    intento = int(input('Adivina el número: '))\nprint('¡Correcto!')" }
      ],
      miniProjects: ["Lista de tareas en consola: menú con opciones para agregar y mostrar tareas usando una lista y un bucle while."],
      mainProject: "Agenda de Contactos: menú interactivo (while) para agregar, buscar y listar contactos guardados en una lista.",
      errors: ["Crear un bucle infinito por olvidar actualizar la condición de salida.", "Confundir 'break' (detiene el bucle) con 'continue' (salta a la siguiente iteración)."],
      practices: ["Domina el IF/ELSE antes de combinar condiciones complejas con 'and'/'or'.", "Elige FOR cuando sepas el número de repeticiones, y WHILE cuando no."],
      checklist: [
        { id: "chk3-1", text: "Domino el IF/ELSE" },
        { id: "chk3-2", text: "Sé cuándo usar FOR vs WHILE" },
        { id: "chk3-3", text: "Puedo crear y recorrer listas" }
      ],
      exam: {
        id: "exam-3",
        questions: [
          { q: "¿Qué bucle usarías si NO sabes cuántas veces se va a repetir una acción?", options: ["for", "while", "if", "loop"], ans: 1 },
          { q: "¿Qué instrucción detiene por completo un bucle?", options: ["continue", "pass", "break", "stop"], ans: 2 },
          { q: "¿Cómo se accede al primer elemento de una lista llamada 'compras'?", options: ["compras[1]", "compras[0]", "compras.first()", "compras(0)"], ans: 1 }
        ]
      }
    },

    // ==================== ETAPA 4 ====================
    {
      id: "etapa-4",
      num: 4,
      title: "Programación Orientada a Objetos (POO)",
      objective: "Aprender a modelar el mundo real en código mediante clases y objetos, la base de las aplicaciones profesionales.",
      concepts: ["Clases y objetos", "Atributos y métodos", "__init__ y self", "Herencia", "Encapsulamiento"],
      theory: "Una clase es un molde para crear objetos: define qué datos (atributos) y qué acciones (métodos) tendrán. Un objeto es una instancia concreta de esa clase. 'self' representa al propio objeto dentro de sus métodos. La herencia permite que una clase 'hija' reutilice y extienda el comportamiento de una clase 'padre', evitando repetir código.",
      code: "class Perro:\n    def __init__(self, nombre, raza):\n        self.nombre = nombre\n        self.raza = raza\n\n    def ladrar(self):\n        print(f'{self.nombre} dice: ¡Guau!')\n\nmi_perro = Perro('Rex', 'Labrador')\nmi_perro.ladrar()",
      exercises: [
        { id: "e4-1", level: "Fácil", desc: "Crea una clase 'Persona' con nombre y edad, y un método que salude usando esos datos.",
          hints: ["El método __init__ se ejecuta al crear el objeto.", "Usa f-strings para combinar texto y variables."],
          solution: "class Persona:\n    def __init__(self, nombre, edad):\n        self.nombre = nombre\n        self.edad = edad\n\n    def saludar(self):\n        print(f'Hola, soy {self.nombre} y tengo {self.edad} años')\n\np = Persona('Luis', 30)\np.saludar()" },
        { id: "e4-2", level: "Intermedio", desc: "Crea una clase 'CuentaBancaria' con saldo, y métodos para depositar y retirar dinero (sin permitir saldo negativo).",
          hints: ["Guarda el saldo como atributo en __init__.", "En el método retirar, valida con un if antes de restar."],
          solution: "class CuentaBancaria:\n    def __init__(self, saldo=0):\n        self.saldo = saldo\n\n    def depositar(self, monto):\n        self.saldo += monto\n\n    def retirar(self, monto):\n        if monto <= self.saldo:\n            self.saldo -= monto\n        else:\n            print('Fondos insuficientes')" },
        { id: "e4-3", level: "Reto", desc: "Crea una clase 'Animal' y dos clases hijas 'Gato' y 'Perro' que hereden de ella pero sobrescriban un método 'hacer_sonido'.",
          hints: ["Usa 'class Gato(Animal):' para heredar.", "Redefine el método en la clase hija para cambiar su comportamiento."],
          solution: "class Animal:\n    def hacer_sonido(self):\n        print('Sonido genérico')\n\nclass Perro(Animal):\n    def hacer_sonido(self):\n        print('Guau')\n\nclass Gato(Animal):\n    def hacer_sonido(self):\n        print('Miau')" }
      ],
      miniProjects: ["Sistema de inventario básico: clase 'Producto' con nombre, precio y cantidad, y una lista de objetos Producto."],
      mainProject: "Sistema de Usuarios: clase 'Usuario' con registro, login simulado (comparando contraseña) y un método para mostrar el perfil.",
      errors: ["Olvidar 'self' como primer parámetro de los métodos.", "Modificar atributos directamente en vez de usar métodos (rompe el encapsulamiento)."],
      practices: ["Una clase debe representar una sola responsabilidad clara.", "Usa nombres de clases en singular y con mayúscula inicial (PascalCase)."],
      checklist: [
        { id: "chk4-1", text: "Entiendo qué es una clase y un objeto" },
        { id: "chk4-2", text: "Sé usar __init__ y self" },
        { id: "chk4-3", text: "Puedo aplicar herencia básica" }
      ],
      exam: {
        id: "exam-4",
        questions: [
          { q: "¿Qué representa 'self' dentro de una clase?", options: ["Una variable global", "El propio objeto", "El nombre de la clase", "Un error"], ans: 1 },
          { q: "¿Qué permite la herencia?", options: ["Borrar una clase", "Reutilizar y extender código de otra clase", "Crear variables globales", "Ejecutar código más rápido"], ans: 1 },
          { q: "¿Qué método se ejecuta automáticamente al crear un objeto?", options: ["start()", "__init__()", "main()", "new()"], ans: 1 }
        ]
      }
    },

    // ==================== ETAPA 5 ====================
    {
      id: "etapa-5",
      num: 5,
      title: "Git y GitHub",
      objective: "Aprender a guardar versiones de tu código y colaborar con otros usando control de versiones.",
      concepts: ["Repositorio", "commit", "push / pull", "branch", "clone"],
      theory: "Git es un sistema de control de versiones: guarda 'fotografías' (commits) de tu proyecto en el tiempo, permitiéndote volver atrás si algo se rompe. GitHub es una plataforma en la nube donde alojas esos repositorios para respaldarlos y colaborar. Una 'rama' (branch) te permite trabajar en una funcionalidad nueva sin afectar el código principal.",
      code: "git init\ngit add .\ngit commit -m \"Primer commit\"\ngit remote add origin https://github.com/usuario/repo.git\ngit push -u origin main",
      exercises: [
        { id: "e5-1", level: "Fácil", desc: "Crea un repositorio local en una carpeta nueva y haz tu primer commit.",
          hints: ["Usa 'git init' para inicializar.", "El mensaje de commit debe describir el cambio, ej: 'Primera versión'."],
          solution: "git init\ngit add .\ngit commit -m \"Primera versión\"" },
        { id: "e5-2", level: "Intermedio", desc: "Sube ese repositorio a GitHub por primera vez.",
          hints: ["Crea el repo vacío en GitHub primero (sin README).", "Copia la URL que te da GitHub para el remote."],
          solution: "git remote add origin <URL-del-repo>\ngit branch -M main\ngit push -u origin main" },
        { id: "e5-3", level: "Reto", desc: "Crea una rama nueva, haz un cambio, y únela (merge) de vuelta a main.",
          hints: ["'git checkout -b nombre-rama' crea y cambia a la rama.", "Para unir: vuelve a main con 'git checkout main' y luego 'git merge nombre-rama'."],
          solution: "git checkout -b nueva-funcion\n# haces cambios y commit\ngit checkout main\ngit merge nueva-funcion" }
      ],
      miniProjects: ["Documentar un proyecto: crea un README.md explicando qué hace tu proyecto y cómo ejecutarlo."],
      mainProject: "Publicar en GitHub: sube un proyecto completo de una etapa anterior a un repositorio público, con README y .gitignore.",
      errors: ["Subir carpetas como node_modules o archivos .env sin un .gitignore.", "Hacer commits gigantes que mezclan muchos cambios sin relación."],
      practices: ["Escribe mensajes de commit claros y en presente ('Agrega validación de login', no 'cambios').", "Haz commits pequeños y frecuentes."],
      checklist: [
        { id: "chk5-1", text: "Sé inicializar un repositorio" },
        { id: "chk5-2", text: "Sé hacer commit y push" },
        { id: "chk5-3", text: "Entiendo qué es una rama" }
      ],
      exam: {
        id: "exam-5",
        questions: [
          { q: "¿Qué comando sube tus cambios locales a GitHub?", options: ["git pull", "git push", "git clone", "git status"], ans: 1 },
          { q: "¿Qué archivo evita subir carpetas como node_modules?", options: [".env", ".gitignore", "README.md", "package.json"], ans: 1 },
          { q: "¿Qué es un commit?", options: ["Una carpeta", "Una 'fotografía' guardada del proyecto en un momento dado", "Un lenguaje de programación", "Un error"], ans: 1 }
        ]
      }
    },

    // ==================== ETAPA 6 ====================
    {
      id: "etapa-6",
      num: 6,
      title: "SQL y Bases de Datos",
      objective: "Aprender a guardar, consultar y organizar datos de forma persistente usando bases de datos relacionales.",
      concepts: ["Tablas y relaciones", "SELECT, INSERT, UPDATE, DELETE", "WHERE y JOIN", "Claves primarias y foráneas"],
      theory: "Una base de datos relacional organiza la información en tablas (como hojas de cálculo conectadas entre sí). SQL es el lenguaje para consultar y modificar esos datos. Una clave primaria identifica de forma única cada fila de una tabla; una clave foránea conecta una tabla con otra (por ejemplo, un pedido con el cliente que lo hizo).",
      code: "SELECT nombre, edad FROM usuarios WHERE edad >= 18;\n\nINSERT INTO usuarios (nombre, edad) VALUES ('Ana', 25);",
      exercises: [
        { id: "e6-1", level: "Fácil", desc: "Escribe una consulta que muestre todos los productos de una tabla 'productos' con precio mayor a 100.",
          hints: ["Usa SELECT * FROM para traer todas las columnas.", "WHERE filtra las filas según una condición."],
          solution: "SELECT * FROM productos WHERE precio > 100;" },
        { id: "e6-2", level: "Intermedio", desc: "Escribe una consulta que una (JOIN) la tabla 'pedidos' con 'clientes' para mostrar el nombre del cliente junto a cada pedido.",
          hints: ["JOIN conecta dos tablas por una columna en común.", "Usa 'ON tabla1.id = tabla2.id_relacionado'."],
          solution: "SELECT pedidos.id, clientes.nombre\nFROM pedidos\nJOIN clientes ON pedidos.cliente_id = clientes.id;" },
        { id: "e6-3", level: "Reto", desc: "Diseña el esquema (en texto) de 3 tablas relacionadas para un sistema de blog: usuarios, posts y comentarios.",
          hints: ["Cada 'post' debe tener una clave foránea que apunte al usuario que lo creó.", "Cada 'comentario' debe apuntar tanto a un post como a un usuario."],
          solution: "usuarios(id, nombre, email)\nposts(id, titulo, contenido, usuario_id -> usuarios.id)\ncomentarios(id, texto, post_id -> posts.id, usuario_id -> usuarios.id)" }
      ],
      miniProjects: ["Modelar en papel la base de datos de una tienda: productos, clientes y ventas."],
      mainProject: "Sistema de Ventas con SQL: crea las tablas necesarias y escribe las consultas para registrar una venta y consultar el historial de un cliente.",
      errors: ["Olvidar el WHERE en un UPDATE o DELETE (modifica o borra TODA la tabla).", "No definir claves primarias, lo que permite datos duplicados."],
      practices: ["Antes de un UPDATE o DELETE en datos reales, prueba primero el mismo WHERE con un SELECT.", "Normaliza tus tablas: evita repetir la misma información en varias filas."],
      checklist: [
        { id: "chk6-1", text: "Domino SELECT con WHERE" },
        { id: "chk6-2", text: "Sé usar INSERT, UPDATE y DELETE" },
        { id: "chk6-3", text: "Entiendo relaciones y JOIN" }
      ],
      exam: {
        id: "exam-6",
        questions: [
          { q: "¿Qué instrucción SQL se usa para traer datos de una tabla?", options: ["GET", "SELECT", "FETCH", "SHOW"], ans: 1 },
          { q: "¿Qué conecta una fila de una tabla con una fila de otra tabla?", options: ["Un JOIN sin condición", "Una clave foránea", "Un WHERE", "Un comentario"], ans: 1 },
          { q: "¿Qué pasa si haces un DELETE sin WHERE?", options: ["No pasa nada", "Se borran todas las filas de la tabla", "Da un error automáticamente", "Solo borra la primera fila"], ans: 1 }
        ]
      }
    },

    // ==================== ETAPA 10 ====================
    {
      id: "etapa-10",
      num: 10,
      title: "Backend y APIs",
      objective: "Aprender a construir servidores que reciban peticiones y devuelvan datos, conectando tu lógica con el mundo exterior.",
      concepts: ["Cliente-Servidor", "API REST", "Métodos HTTP (GET, POST, PUT, DELETE)", "JSON", "Endpoints"],
      theory: "Una API (Interfaz de Programación de Aplicaciones) es un conjunto de 'puertas' (endpoints) que un servidor expone para que otros programas pidan o envíen datos. El modelo REST usa los métodos HTTP: GET para leer, POST para crear, PUT para actualizar, DELETE para borrar. Los datos suelen viajar en formato JSON, un formato de texto fácil de leer tanto para humanos como para máquinas.",
      code: "// Ejemplo de endpoint con Express (Node.js)\napp.get('/usuarios', (req, res) => {\n  res.json({ nombre: 'Ana', edad: 25 });\n});",
      exercises: [
        { id: "e10-1", level: "Fácil", desc: "Explica con tus palabras la diferencia entre un método GET y un método POST.",
          hints: ["GET normalmente no modifica datos, solo los consulta.", "POST se usa para crear algo nuevo en el servidor."],
          solution: "GET pide/lee información sin modificar nada en el servidor. POST envía datos al servidor para crear un nuevo recurso." },
        { id: "e10-2", level: "Intermedio", desc: "Diseña (en JSON) la estructura de datos que devolvería una API al consultar un producto.",
          hints: ["JSON usa llaves {} para objetos y corchetes [] para listas.", "Cada propiedad va entre comillas dobles."],
          solution: "{\n  \"id\": 1,\n  \"nombre\": \"Teclado mecánico\",\n  \"precio\": 45.99,\n  \"stock\": 12\n}" },
        { id: "e10-3", level: "Reto", desc: "Diseña los endpoints necesarios (método + ruta) para un CRUD completo de 'tareas'.",
          hints: ["CRUD significa Crear, Leer, Actualizar, Borrar.", "Cada operación corresponde a un método HTTP distinto."],
          solution: "GET /tareas          -> listar todas\nGET /tareas/:id       -> ver una\nPOST /tareas          -> crear\nPUT /tareas/:id       -> actualizar\nDELETE /tareas/:id    -> borrar" }
      ],
      miniProjects: ["Consumir una API pública gratuita (ej. una API de chistes o de clima) desde JavaScript usando fetch()."],
      mainProject: "API de Tareas: construye un servidor básico con endpoints para crear, listar, actualizar y borrar tareas, guardadas en memoria o en una base de datos.",
      errors: ["No validar los datos que llegan al servidor antes de guardarlos.", "Devolver contraseñas u otros datos sensibles en las respuestas de la API."],
      practices: ["Usa códigos de estado HTTP correctos (200 OK, 201 Created, 404 Not Found, 500 Server Error).", "Nunca expongas claves secretas directamente en el código del frontend."],
      checklist: [
        { id: "chk10-1", text: "Entiendo el modelo cliente-servidor" },
        { id: "chk10-2", text: "Sé qué hace cada método HTTP" },
        { id: "chk10-3", text: "Puedo diseñar endpoints de un CRUD" }
      ],
      exam: {
        id: "exam-10",
        questions: [
          { q: "¿Qué método HTTP se usa para crear un nuevo recurso?", options: ["GET", "POST", "DELETE", "HEAD"], ans: 1 },
          { q: "¿En qué formato suelen viajar los datos en una API REST moderna?", options: ["XML obligatorio", "JSON", "CSV", "TXT plano"], ans: 1 },
          { q: "¿Qué código de estado HTTP indica 'recurso no encontrado'?", options: ["200", "201", "404", "500"], ans: 2 }
        ]
      }
    },

    // ==================== ETAPA 17 ====================
    {
      id: "etapa-17",
      num: 17,
      title: "Proyecto Final Avanzado",
      objective: "Integrar todo lo aprendido en un proyecto completo, planeado, desarrollado y desplegado como uno real de la industria.",
      concepts: ["Planificación de software", "Arquitectura de un proyecto", "Testing básico", "Despliegue (deploy)"],
      theory: "Un proyecto profesional no empieza escribiendo código: empieza planificando qué problema resuelve, qué funcionalidades tendrá y cómo se organizarán las piezas (frontend, backend, base de datos). El testing verifica que tu código funcione como esperas antes de que lo use alguien más. El despliegue es el proceso de publicar tu aplicación para que sea accesible desde internet.",
      code: "// Ejemplo de estructura de un proyecto full-stack\nproyecto/\n  frontend/   -> interfaz de usuario (React, Vite)\n  backend/    -> API y lógica de negocio\n  database/   -> esquema y migraciones\n  README.md   -> documentación",
      exercises: [
        { id: "e17-1", level: "Planificación", desc: "Define el problema que resolverá tu proyecto final y lista sus 5 funcionalidades principales.",
          hints: ["Piensa en un problema real que tú o alguien cercano tenga.", "Prioriza: ¿cuáles de esas 5 funciones son indispensables y cuáles son 'nice to have'?"],
          solution: "Documento de planificación: problema, usuarios objetivo, funcionalidades principales, y funcionalidades opcionales." },
        { id: "e17-2", level: "Desarrollo", desc: "Construye el proyecto en fases: primero la estructura de datos, luego la lógica principal, después la interfaz.",
          hints: ["No intentes construir todo a la vez; avanza por partes que puedas probar.", "Haz commits frecuentes en cada fase completada."],
          solution: "Depende del proyecto elegido por el estudiante; se evalúa el proceso incremental, no una solución única." },
        { id: "e17-3", level: "Despliegue", desc: "Publica tu proyecto final en internet usando un servicio gratuito (Vercel, Netlify, Render, etc.) y comparte el enlace.",
          hints: ["Conecta tu repositorio de GitHub al servicio de despliegue elegido.", "No olvides configurar las variables de entorno en la plataforma de despliegue."],
          solution: "Depende del proyecto; se evalúa que la app esté accesible públicamente y funcione sin errores." }
      ],
      miniProjects: ["Escribir un README profesional: descripción, tecnologías usadas, cómo instalar y ejecutar el proyecto localmente."],
      mainProject: "Aplicación Completa Desplegada: un proyecto full-stack con frontend, backend y base de datos, con autenticación de usuarios y publicado en internet con un enlace funcional.",
      errors: ["Subir credenciales o claves secretas al repositorio público.", "No probar la aplicación en dispositivos móviles antes de considerarla terminada."],
      practices: ["Documenta tu proyecto como si otra persona tuviera que continuarlo sin tu ayuda.", "Pide feedback a otras personas antes de darlo por terminado."],
      checklist: [
        { id: "chk17-1", text: "Planifiqué el proyecto antes de programar" },
        { id: "chk17-2", text: "Integré frontend, backend y base de datos" },
        { id: "chk17-3", text: "Desplegué el proyecto y funciona en internet" },
        { id: "chk17-4", text: "Documenté el proyecto con un README claro" }
      ],
      exam: {
        id: "exam-17",
        questions: [
          { q: "¿Qué se recomienda hacer antes de escribir la primera línea de código de un proyecto real?", options: ["Elegir colores", "Planificar el problema y las funcionalidades", "Comprar un dominio", "Nada, se empieza directo"], ans: 1 },
          { q: "¿Qué es el 'despliegue' (deploy) de una aplicación?", options: ["Borrar el proyecto", "Publicarla para que sea accesible desde internet", "Escribir el código", "Hacer un commit"], ans: 1 },
          { q: "¿Dónde NUNCA deben subirse las claves secretas de un proyecto?", options: ["A un archivo .env local", "A un repositorio público de GitHub", "A las variables de entorno del hosting", "A un gestor de contraseñas"], ans: 1 }
        ]
      }
    }
  ]
};
