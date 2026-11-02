/* ==========================================================================
   data.js  ·  TODO EL CONTENIDO DE TU PÁGINA VIVE AQUÍ
   --------------------------------------------------------------------------
   Para cambiar textos, agregar proyectos o habilidades, edita SOLO este
   archivo. No necesitas tocar el HTML, el CSS ni main.js.

   Reglas rápidas:
   - Cada texto va entre comillas "así".
   - Cada elemento de una lista termina con coma ,
   - Para agregar un proyecto: copia un bloque { ... }, pégalo debajo y cambia
     los textos.
   - Si quieres ocultar algo, bórralo o ponle // al inicio de cada línea.
   ========================================================================== */

const SITE = {
  // ---- Datos básicos (se usan en el encabezado, el contacto y el SEO) ----
  name: "Yefferson Miranda",
  fullName: "Yefferson Miranda Josec",
  role: "Desarrollador de inteligencia artificial y software",
  location: "Puno, Perú",
  altitude: "3 830 metros sobre el nivel del mar",

  email: "yefesonmiranda@gmail.com",
  github: "https://github.com/YEFFERSON1234",

  // Archivo del CV (está en la carpeta assets/). Si lo actualizas, reemplaza el
  // PDF con el mismo nombre o cambia esta ruta.
  cvFile: "assets/CV_Yefferson_Miranda_Josec.pdf",

  // Para agregar más redes (LinkedIn, Workana, Fiverr...), descomenta y completa:
  // links: [
  //   { label: "LinkedIn", url: "https://www.linkedin.com/in/tu-usuario" },
  //   { label: "Workana",  url: "https://www.workana.com/freelancer/tu-usuario" },
  //   { label: "Fiverr",   url: "https://www.fiverr.com/tu-usuario" },
  // ],
  links: [],

  // ---- Hero (lo primero que ve el cliente) ----
  heroLead:
    "Llevo modelos de inteligencia artificial a sistemas reales: predicción, visión computacional, bots con IA generativa , aplicaciones móviles y web completas.",
};

/* ---- Sobre mí: un párrafo por línea ---- */
const ABOUT = [
  "Soy estudiante de Ingeniería de Sistemas en la Universidad Nacional del Altiplano. Combino investigación aplicada en el Altiplano con desarrollo freelance para clientes reales en salud, comercio y prevención de fraudes.",
  "Me encargo del proyecto de punta a punta, del análisis al despliegue en producción, con entregas por etapas y código mantenible.",
];

/* ---- Proyectos de IA e investigación ----
   Cada proyecto: título, contexto (rol / dónde), y una lista de logros. */
const RESEARCH = [
  {
    title: "Sistema de soporte de decisiones para la cebada puneña",
    context: "Investigador principal · Semillero de Investigación de Operaciones, UNAP",
    points: [
      "Modelo predictivo de riesgo de heladas con XGBoost sobre datos meteorológicos ERA5-Land.",
      "Optimización de rutas logísticas con algoritmos genéticos bajo un enfoque de economía circular, incluyendo el retorno de bagazo a la ganadería local.",
      "Modelos de agricultura por contrato con teoría de juegos (equilibrio de Nash) para proteger al pequeño productor frente a la volatilidad de precios.",
    ],
    open: true, // true = aparece desplegado al cargar la página
  },
  {
    title: "Reconocimiento de Lengua de Señas Peruana con visión computacional",
    context: "Investigador y desarrollador",
    points: [
      "Diseño y optimización de modelos de visión computacional para traducir gestos de LSP a texto en tiempo real.",
      "Adaptación de los modelos para ejecutarse en hardware de recursos limitados, orientado a reducir brechas de comunicación.",
    ],
  },
  {
    title: "Reconocimiento de carne de alpaca y llama",
    context: "Colaborador · con Ingeniería Agroindustrial, UNAP",
    points: [
      "Sistema de IA que diferencia carne de alpaca y llama para combatir el fraude en mercados locales y proteger a los productores del Altiplano.",
    ],
  },
];

/* ---- Trabajo freelance ---- */
const FREELANCE = [
  {
    title: "Bot de WhatsApp con IA generativa",
    context: "Desarrollador backend",
    points: [
      "Integración de la API de Google Gemini con Node.js para automatizar respuestas y flujos de comunicación con clientes.",
    ],
    open: true,
  },
  {
    title: "Sistema inteligente de prevención de fraudes",
    context: "Desarrollador backend e IA",
    points: [
      "Detección de actividades fraudulentas mediante análisis de patrones de datos y reglas de negocio complejas.",
    ],
  },
  {
    title: "Plataforma web de cerámicas con simulador de ambientes",
    context: "Desarrollador full-stack y Machine Learning",
    points: [
      "Plataforma para el sector de acabados y construcción, con modelos de Machine Learning que permiten visualizar productos cerámicos en espacios reales.",
    ],
  },
  {
    title: "Felicium, plataforma de gestión clínica",
    context: "Desarrollador full-stack",
    points: [
      "Arquitectura e implementación bajo Clean Architecture, priorizando escalabilidad y mantenibilidad.",
      "Despliegue en producción: backend con Node.js y PM2, y migración de la base de datos a AWS EC2.",
    ],
  },
  {
    title: "Sistema de gestión para farmacias",
    context: "Desarrollador de software",
    points: [
      "Control de inventario, ventas y administración de sucursales, con trazabilidad de medicamentos.",
    ],
  },
];

/* ---- Habilidades: grupos con su lista ---- */
const SKILLS = [
  {
    group: "Inteligencia artificial y datos",
    items: [
      "Machine Learning (XGBoost)", "PyTorch", "TensorFlow", "Visión computacional",
      "IA generativa (Gemini API)", "Análisis de datos", "Algoritmos genéticos", "Teoría de juegos",
    ],
  },
  { group: "Lenguajes", items: ["Python", "JavaScript", "Java", "C++"] },
  { group: "Desarrollo", items: ["Node.js", "React", "PostgreSQL", "Clean Architecture"] },
  { group: "Infraestructura", items: ["AWS (EC2)", "PM2", "Linux"] },
  { group: "Gestión", items: ["Trello", "Metodologías ágiles"] },
];

/* ---- Formación ---- */
const EDUCATION = [
  {
    title: "Universidad Nacional del Altiplano (UNAP)",
    detail: "Ingeniería de Sistemas · Investigador en el Semillero de Investigación de Operaciones",
  },
  {
    title: "Oracle Next Education (ONE) con Alura",
    detail: "Fundamentos de programación · 7 cursos, 62 horas · 2024",
  },
];

/* ---- Contacto ---- */
const CONTACT = {
  title: "Cuéntame tu idea",
  text: "Si tienes un proceso que quieras automatizar, un modelo que necesites o una aplicación por construir, escríbeme y lo conversamos.",
};
