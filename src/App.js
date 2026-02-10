import React, { useState } from 'react';
import { 
  Book, MessageCircle, Info, Clock, Shield, BookMarked, Send, 
  ChevronRight, AlertTriangle, ExternalLink, Layers,
  CheckCircle2, XCircle, HelpCircle, Sparkles, Star, Heart, 
  Crown, Church, Eye, Scroll
} from 'lucide-react';

const ApocalipsisEstudioApp = () => {
  const [activeTab, setActiveTab] = useState('texto');
  const [selectedVerse, setSelectedVerse] = useState(null);
  const [activePerspective, setActivePerspective] = useState(null);
  const [showCommentaryType, setShowCommentaryType] = useState('all');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswerFeedback, setShowAnswerFeedback] = useState(false);

  const handleVerseClick = (verseNumber) => {
    setSelectedVerse(selectedVerse === verseNumber ? null : verseNumber);
  };

  const handlePerspectiveClick = (perspective) => {
    setActivePerspective(activePerspective === perspective ? null : perspective);
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowAnswerFeedback(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < studyQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowAnswerFeedback(false);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
      setShowAnswerFeedback(false);
    }
  };

  // Texto bíblico y comentarios
  const bibleVerses = [
    {
      number: "6",
      text: "Y me dijo: Estas palabras son fieles y verdaderas. Y el Señor, el Dios de los espíritus de los profetas, ha enviado su ángel, para mostrar a sus siervos las cosas que deben suceder pronto.",
      contextual: "Este versículo marca la transición hacia el epílogo del Apocalipsis. El 'me dijo' se refiere al ángel que había estado mostrando las visiones a Juan. La frase 'Dios de los espíritus de los profetas' conecta con la tradición profética del Antiguo Testamento, estableciendo continuidad entre la revelación anterior y esta revelación final. El término 'pronto' (en tájei) refleja la perspectiva divina del tiempo y la urgencia del mensaje.",
      doctrinal: "La afirmación 'estas palabras son fieles y verdaderas' establece la autoridad divina e inerrancia de toda la revelación apocalíptica. Dios como 'el Dios de los espíritus de los profetas' subraya que Él es la fuente de toda profecía genuina (2 Pedro 1:21). La enviatura del ángel demuestra que Dios usa medios celestiales para comunicar Su voluntad a la humanidad.",
      prophetic: "El énfasis en que las cosas 'deben suceder pronto' establece la naturaleza escatológica inmediata de las visiones. Esto no significa necesariamente cumplimiento cronológico inmediato, sino la certeza y urgencia profética del plan divino. Las 'cosas que deben suceder' (tá deîonta genésthai) recuerdan la fórmula de Daniel 2:28-29, conectando las visiones apocalípticas.",
      devotional: "La declaración de que las palabras son 'fieles y verdaderas' nos invita a confiar completamente en las promesas de Dios, especialmente en tiempos de incertidumbre. Si Dios ha revelado el final de la historia, podemos descansar en Su soberanía absoluta. La urgencia del 'pronto' nos llama a vivir con expectativa constante del cumplimiento de Sus promesas."
    },
    {
      number: "7",
      text: "¡He aquí, vengo pronto! Bienaventurado el que guarda las palabras de la profecía de este libro.",
      contextual: "Aquí comienzan las palabras directas de Jesús en el epílogo. La exclamación 'He aquí' (idoú) es una fórmula profética que demanda atención inmediata. Esta es la primera de tres declaraciones de Jesús sobre su venida 'pronto' en este capítulo (vv. 7, 12, 20). La 'bienaventuranza' es la séptima y última del Apocalipsis, creando una inclusión con la primera bienaventuranza en 1:3.",
      doctrinal: "Cristo mismo garantiza Su segunda venida con autoridad divina. La bienaventuranza conecta la obediencia a la palabra profética con la bendición divina. 'Guardar' (tēréō) implica no solo preservar sino obedecer y vivir según estas revelaciones. Esto establece que el Apocalipsis no es meramente informativo sino transformativo.",
      prophetic: "La promesa 'vengo pronto' es central a la esperanza cristiana. En el contexto apocalíptico, esto se refiere a la Parusía, el regreso visible y glorioso de Cristo para establecer Su reino eterno. La conexión entre la venida de Cristo y la obediencia a la profecía muestra que la escatología debe impactar la vida presente.",
      devotional: "La promesa del regreso de Cristo debe llenarnos de esperanza y urgencia santa. 'Guardar las palabras' significa permitir que esta revelación transforme nuestra perspectiva diaria. En un mundo de cambios constantes, la certeza del regreso de Cristo es nuestro ancla. ¿Vivimos realmente como si esperáramos Su venida en cualquier momento?"
    },
    {
      number: "8",
      text: "Yo Juan soy el que oyó y vio estas cosas. Y después que las hube oído y visto, me postré para adorar a los pies del ángel que me mostraba estas cosas.",
      contextual: "Juan se identifica nuevamente como testigo ocular, recordando su identificación inicial en 1:9. Esta es la segunda vez que Juan intenta adorar al ángel (ver 19:10), sugiriendo lo impresionante de las revelaciones recibidas. La adoración inadecuada muestra la tendencia humana natural de venerar a los mediadores de revelación divina en lugar de a Dios mismo.",
      doctrinal: "La repetición del error de Juan ilustra la fragilidad humana incluso en los más espirituales. Su identificación como testigo refuerza la historicidad y veracidad de las visiones. El texto enseña que solo Dios es digno de adoración, no importa cuán gloriosos sean Sus mensajeros. Los ángeles son criaturas que sirven, no objetos de culto.",
      prophetic: "El testimonio ocular de Juan garantiza la autenticidad de las visiones proféticas. Su experiencia directa con lo sobrenatural valida las profecías apocalípticas como revelación genuina. La tendencia a adorar al mensajero advierte sobre futuras distorsiones donde se venerará lo creado en lugar del Creador en los últimos tiempos.",
      devotional: "La honestidad de Juan al admitir su error nos enseña humildad. Incluso los grandes siervos de Dios pueden confundirse en momentos de revelación intensa. Esto nos recuerda dirigir toda adoración únicamente a Dios. ¿Hay 'mediadores' en nuestra vida espiritual que estamos elevando indebidamente? Solo Cristo es nuestro único mediador."
    },
    {
      number: "9",
      text: "Pero él me dijo: Mira, no lo hagas; porque yo soy consiervo tuyo, de tus hermanos los profetas, y de los que guardan las palabras de este libro. Adora a Dios.",
      contextual: "La respuesta del ángel es idéntica a la de 19:10, mostrando consistencia en el mensaje celestial. 'Consiervo' (syndoulos) establece la igualdad fundamental entre ángeles y humanos redimidos en el servicio a Dios. La referencia a 'tus hermanos los profetas' conecta a Juan con la tradición profética bíblica y reconoce la continuidad de la revelación divina.",
      doctrinal: "Este versículo enseña la correcta comprensión angelológica: los ángeles son criaturas que sirven junto con los humanos, no seres superiores para adorar. La frase 'Adora a Dios' (tō theō proskynēson) es un imperativo directo que reserva la adoración exclusivamente para la Deidad. Establece la fraternidad espiritual entre todos los siervos de Dios.",
      prophetic: "La identificación del ángel con los profetas humanos sugiere la unidad del plan profético de Dios através de todas las edades. Los 'que guardan las palabras de este libro' incluye a todos los creyentes fieles de la era de la iglesia, estableciendo una comunidad profética que trasciende el tiempo hasta el cumplimiento final.",
      devotional: "La humildad del ángel al rechazar adoración es un modelo para todo liderazgo espiritual. Nadie debe dirigir la atención hacia sí mismo sino hacia Dios. Esto nos desafía a examinar nuestras motivaciones en el servicio cristiano. ¿Buscamos gloria personal o dirigimos toda honra a Dios? El verdadero servicio señala siempre hacia el único digno de adoración."
    },
    {
      number: "10",
      text: "Y me dijo: No selles las palabras de la profecía de este libro, porque el tiempo está cerca.",
      contextual: "Este mandato contrasta directamente con la orden dada a Daniel de 'sellar las palabras y cerrar el libro hasta el tiempo del fin' (Daniel 12:4, 9). Mientras Daniel escribió para una era futura, Juan escribe para su era inmediata y todas las siguientes. El 'tiempo' (kairós) se refiere al tiempo oportuno de Dios, no meramente cronológico.",
      doctrinal: "La orden de no sellar establece la accesibilidad permanente de esta revelación. A diferencia de las visiones de Daniel que eran para 'muchos días en el futuro', el Apocalipsis es para la era presente de la iglesia. Esto enseña que toda la revelación necesaria para la fe cristiana está disponible y debe ser proclamada abiertamente.",
      prophetic: "El contraste con Daniel marca un punto de inflexión en la historia de la salvación. Con la primera venida de Cristo, 'el tiempo está cerca' para el cumplimiento final. Esto no significa inminencia cronológica necesariamente, sino que los eventos finales están ahora dentro del horizonte escatológico inaugurado por Cristo.",
      devotional: "La apertura del libro nos recuerda que Dios no esconde Su voluntad de nosotros. Las promesas y advertencias del Apocalipsis están disponibles para fortalecernos hoy. No debemos tratar estos mensajes como secretos esotéricos sino como revelación práctica para nuestra fe diaria. ¿Estamos estudiando y aplicando estas verdades reveladas?"
    },
    {
      number: "11",
      text: "El que es injusto, sea injusto todavía; y el que es inmundo, sea inmundo todavía; y el que es justo, practique la justicia todavía; y el que es santo, santifíquese todavía.",
      contextual: "Este versículo refleja un lenguaje similar a Daniel 12:10 y presenta lo que parece ser una declaración de irrevocabilidad del carácter al final de los tiempos. En el contexto inmediato, sigue la declaración de que 'el tiempo está cerca', sugiriendo la proximidad del juicio final cuando las decisiones se vuelven irreversibles.",
      doctrinal: "Este pasaje enseña la doctrina de la confirmación final del carácter. Llega un momento cuando las decisiones morales y espirituales se cristalizan permanentemente. No es una predestinación fatalista sino el resultado final de decisiones repetidas que forman el carácter. Muestra tanto la justicia como la misericordia divina respetando las decisiones humanas.",
      prophetic: "Proféticamente, esto describe las condiciones finales antes del regreso de Cristo, cuando cesará el tiempo de gracia y las personas permanecerán en el estado espiritual que han elegido. Es una descripción del punto de no retorno en la historia humana, cuando la intercesión termina y el juicio comienza.",
      devotional: "Este versículo nos urge a la urgencia en las decisiones espirituales. Cada día formamos hábitos que forjan nuestro carácter eterno. La gracia está disponible hoy, pero no sabemos por cuánto tiempo. Esto no debe aterrorizarnos sino motivarnos a crecer en santidad mientras tenemos oportunidad. ¿Qué dirección está tomando nuestro carácter?"
    },
    {
      number: "12",
      text: "He aquí yo vengo pronto, y mi galardón conmigo, para recompensar a cada uno según sea su obra.",
      contextual: "Esta es la segunda declaración de Jesús sobre su venida pronta en este capítulo. 'Galardón' (misthos) se refiere tanto a recompensas como a castigos, siendo neutral moralmente. La frase 'según sea su obra' (hōs tó érgon autoû) enfatiza la evaluación individual basada en las acciones realizadas en vida.",
      doctrinal: "Cristo se presenta como el Juez soberano que llevará consigo la capacidad completa de recompensar. La recompensa 'según las obras' no contradice la salvación por gracia sino que confirma que la fe verdadera se manifiesta en obras (Santiago 2:17). Establece la justicia perfecta del juicio divino basado en evidencia real.",
      prophetic: "La venida de Cristo con galardón se refiere específicamente a su regreso en gloria para establecer su reino y ejecutar juicio. Este es el momento cuando todos los redimidos recibirán sus recompensas eternas y todos los rebeldes recibirán su castigo. Es el cumplimiento final de toda justicia divina.",
      devotional: "Saber que Cristo viene con recompensas debe motivar nuestra fidelidad presente. Nuestras obras actuales tienen consecuencias eternas. Esto no debe crear legalismo sino gratitud que se expresa en servicio amoroso. ¿Cómo cambiaría nuestra vida diaria si realmente creyéramos que cada acción cuenta para la eternidad? La esperanza del galardón nos sostiene en la dificultad."
    },
    {
      number: "13",
      text: "Yo soy el Alfa y la Omega, el principio y el fin, el primero y el último.",
      contextual: "Esta es una de las auto-declaraciones más majestuosas de Cristo en el Apocalipsis, usando títulos que aparecieron anteriormente (1:8, 17; 21:6). Alfa y Omega son la primera y última letras del alfabeto griego. En el contexto inmediato, esta declaración fundamenta la autoridad de Cristo para juzgar y recompensar mencionada en el versículo anterior.",
      doctrinal: "Esta triple declaración afirma la eternidad, soberanía y supremacía absoluta de Cristo. Como Alfa y Omega, Él abarca toda realidad. Como principio y fin, Él controla toda la historia. Como primero y último, Él trasciende todo tiempo. Estas son afirmaciones de deidad absoluta que solo Dios puede hacer legítimamente.",
      prophetic: "En el contexto escatológico, Cristo como Omega garantiza que Él tendrá la palabra final en la historia. Como el último, Él sobrevivirá y trascenderá todos los imperios humanos y sistemas temporales. Su autoridad como principio y fin asegura que Su propósito original para la creación se cumplirá perfectamente.",
      devotional: "Estas declaraciones deben llenar nuestros corazones de adoración y confianza. Si Cristo es realmente el Alfa y Omega de nuestra vida, podemos confiar que Él completará lo que comenzó en nosotros. En tiempos de incertidumbre, recordar que Jesús es el principio y el fin nos da paz. ¿Reconocemos Su señorío absoluto sobre cada área de nuestra vida?"
    },
    {
      number: "14",
      text: "Bienaventurados los que lavan sus ropas, para tener derecho al árbol de la vida, y para entrar por las puertas en la ciudad.",
      contextual: "Esta es la segunda bienaventuranza del epílogo y contrasta marcadamente con los que quedan fuera (v. 15). 'Lavar sus ropas' conecta con 7:14 donde se refiere a la purificación por la sangre del Cordero. El 'árbol de la vida' retoma el tema del paraíso perdido y restaurado (Génesis 2:9; Apocalipsis 2:7; 22:2).",
      doctrinal: "El lavamiento de ropas simboliza la justificación y santificación por la sangre de Cristo. El 'derecho' (exousía) al árbol de la vida no es mérito humano sino autorización divina basada en la redención. La entrada a la ciudad representa la participación plena en la vida eterna con Dios en la Nueva Jerusalén.",
      prophetic: "Esta bienaventuranza describe las condiciones de acceso al estado eterno. El árbol de la vida, perdido en Génesis 3, será restaurado para los redimidos. La ciudad con puertas sugiere orden, seguridad y acceso controlado por Dios. Es la culminación de todas las promesas bíblicas de restauración.",
      devotional: "La imagen del lavamiento nos recuerda que la pureza necesaria para la eternidad es un regalo de Dios, no un logro humano. El derecho al árbol de la vida es nuestro por la gracia divina. Esto debe llenar nuestros corazones de gratitud y humildad. ¿Valoramos suficientemente la purificación que Cristo nos ha provisto? ¿Vivimos como ciudadanos de esa ciudad eterna?"
    },
    {
      number: "15",
      text: "Mas los perros estarán fuera, y los hechiceros, los fornicarios, los homicidas, los idólatras, y todo aquel que ama y hace mentira.",
      contextual: "Este versículo presenta un contraste directo con la bienaventuranza anterior. 'Perros' era un término despectivo judío para los gentiles impuros, pero aquí se aplica a todos los moralmente impuros. La lista de vicios representa categorías amplias de rebelión contra Dios. 'Fuera' contrasta con 'dentro' de la ciudad santa.",
      doctrinal: "La exclusión no es arbitraria sino basada en el carácter moral y espiritual. La lista abarca pecados contra Dios (hechicería, idolatría), contra otros (homicidio, fornicación) y contra la verdad (mentira). Muestra que la santidad de Dios requiere la exclusión del mal de Su presencia eterna. Es tanto una advertencia como una confirmación de la justicia divina.",
      prophetic: "Esta descripción establece las condiciones morales para la exclusión del reino eterno. No es predestinación sino consecuencia del carácter desarrollado en la vida presente. Proféticamente, confirma que el mal no continuará eternamente sino que será finalmente separado del bien en el estado eterno.",
      devotional: "Esta lista debe llevarnos al examen personal y al arrepentimiento donde sea necesario. Pero también debe recordarnos la gracia de Dios que puede limpiar de todos estos pecados (1 Corintios 6:9-11). No es una lista para juzgar a otros sino para evaluar nuestro propio corazón. ¿Hay áreas de nuestra vida que necesitan la purificación continua de Cristo?"
    },
    {
      number: "18",
      text: "Yo testifico a todo aquel que oye las palabras de la profecía de este libro: Si alguno añadiere a estas cosas, Dios traerá sobre él las plagas que están escritas en este libro;",
      contextual: "Esta solemne advertencia viene directamente de Cristo y se dirige a 'todo aquel que oye', haciendo la responsabilidad universal. Las palabras recuerdan advertencias similares en Deuteronomio 4:2 y 12:32, estableciendo continuidad con la ley mosaica. Las 'plagas escritas en este libro' se refieren a los juicios apocalípticos descritos en Apocalipsis.",
      doctrinal: "Esta advertencia establece la integridad y suficiencia de la revelación divina. Añadir a la Escritura implica arrogarse autoridad divina y corromper el mensaje de Dios. La amenaza de plagas no es vindictiva sino protectiva de la pureza de la revelación. Enseña el principio de que Dios protege Su palabra revelada.",
      prophetic: "En contexto profético, esta advertencia protege la interpretación correcta de las profecías apocalípticas. Las adiciones humanas a la profecía distorsionan el entendimiento del plan divino y pueden llevar a expectativas falsas sobre los eventos finales. Es una salvaguarda contra la especulación no bíblica sobre la escatología.",
      devotional: "Esta advertencia debe crear en nosotros un temor reverente hacia la Palabra de Dios. Debemos acercarnos a la Escritura con humildad, buscando entender lo que Dios ha dicho realmente, no lo que queremos que diga. Esto afecta tanto la interpretación como la aplicación. ¿Tratamos la Palabra de Dios con la seriedad que merece?"
    },
    {
      number: "19",
      text: "y si alguno quitare de las palabras del libro de esta profecía, Dios quitará su parte del libro de la vida, y de la santa ciudad y de las cosas que están escritas en este libro.",
      contextual: "Esta segunda parte de la advertencia aborda el problema opuesto: quitar de la revelación. 'Su parte del libro de la vida' se refiere a la participación en la vida eterna. La 'santa ciudad' es la Nueva Jerusalén descrita en los capítulos anteriores. Esta advertencia equilibra la anterior, mostrando que tanto añadir como quitar son igualmente peligrosos.",
      doctrinal: "Quitar de las Escrituras muestra incredulidad y desprecio por la revelación divina. La pérdida de 'parte del libro de la vida' no necesariamente implica pérdida de salvación para los verdaderos creyentes, sino pérdida de bendiciones y participación plena en las promesas. Sin embargo, la actitud de quitar de la Palabra puede indicar un corazón no regenerado.",
      prophetic: "Esta advertencia protege especialmente las promesas escatológicas del Apocalipsis. Quitar las profecías sobre el regreso de Cristo, el juicio final, o la Nueva Jerusalén roba a la iglesia su esperanza bíblica. Es una salvaguarda contra el liberalismo teológico que vacía la escatología de contenido sobrenatural.",
      devotional: "La seriedad de esta advertencia debe motivarnos a estudiar toda la Escritura, no solo las partes que nos resultan cómodas. Quitar puede incluir ignorar, minimizar o reinterpretar las verdades difíciles. Debemos aceptar toda la revelación de Dios, incluyendo Sus advertencias. ¿Hay partes de la Biblia que preferimos evitar? ¿Cómo podemos crecer en nuestra aceptación de toda la verdad bíblica?"
    }
  ];

  // Datos de introducción
  const introductionData = {
    context: {
      title: "Contexto Histórico y Literario",
      content: "Apocalipsis 22:6-15, 18-19 forma parte del epílogo del libro (22:6-21), que sirve como conclusión solemne de toda la revelación apocalíptica. Este pasaje fue escrito alrededor del año 95 d.C. durante el exilio de Juan en la isla de Patmos, bajo el emperador Domiciano.\n\nEstos versículos contienen algunas de las últimas palabras registradas de Jesucristo en el canon bíblico, dándoles una autoridad especial.\n\nEl pasaje sirve como 'sello divino' sobre todo el Apocalipsis, autenticando su contenido y estableciendo advertencias solemnes sobre su manejo.\n\nEl contexto inmediato sigue la descripción de la Nueva Jerusalén y el río de vida, culminando toda la visión apocalíptica con promesas y advertencias finales.\n\nLa repetición de temas del prólogo (cap. 1) crea una inclusión literaria que enmarca todo el libro.\n\nEste epílogo está dirigido tanto a las siete iglesias específicas de Asia Menor como a toda la iglesia cristiana a través de los siglos."
    },
    structure: {
      title: "Estructura Literaria y Teológica",
      content: "El pasaje presenta una estructura cuidadosamente diseñada que alterna entre diferentes voces divinas:\n\n1. Declaración angelical (v. 6): Autenticación de la revelación\n2. Primera palabra de Cristo (v. 7): Promesa de venida pronta\n3. Testimonio de Juan (vv. 8-9): Experiencia del vidente\n4. Instrucción angelical (vv. 10-11): Apertura del libro y destinos finales\n5. Segunda palabra de Cristo (vv. 12-13): Venida con galardón y supremacía divina\n6. Bienaventuranza y exclusión (vv. 14-15): Contrastes eternos\n7. Advertencias solemnes de Cristo (vv. 18-19): Protección de la revelación\n\nLa estructura crea un crescendo que culmina en las advertencias más solemnes sobre la integridad de la Palabra de Dios, estableciendo así la importancia suprema del texto completo del Apocalipsis."
    },
    keywords: {
      title: "Términos Teológicos Clave",
      content: [
        {
          term: "Fieles y verdaderas",
          definition: "Término técnico que afirma tanto la confiabilidad histórica como la veracidad teológica de las profecías. Establece la inerrancia de la revelación apocalíptica."
        },
        {
          term: "Vengo pronto",
          definition: "Promesa central de la Parusía que aparece tres veces en este capítulo. No indica necesariamente inminencia cronológica sino certeza y urgencia profética del regreso de Cristo."
        },
        {
          term: "Guardar las palabras",
          definition: "Más que preservación textual, implica obediencia práctica y vivencial a las enseñanzas proféticas. Conecta conocimiento con transformación de vida."
        },
        {
          term: "Alfa y Omega",
          definition: "Título divino que afirma la eternidad y supremacía absoluta de Cristo. Primera y última letras del alfabeto griego simbolizando totalidad y señorío completo."
        },
        {
          term: "Lavar sus ropas",
          definition: "Metáfora de la purificación espiritual por la sangre de Cristo. Simboliza tanto justificación como santificación necesarias para la vida eterna."
        },
        {
          term: "Libro de la vida",
          definition: "Registro divino de los redimidos que tienen vida eterna. Representa la certeza de salvación y participación en las bendiciones celestiales."
        },
        {
          term: "Añadir o quitar",
          definition: "Advertencias sobre la integridad de la revelación divina. Protege contra distorsiones que corromperían el mensaje profético y escatológico."
        }
      ]
    },
    statistics: {
      title: "Análisis del Contenido Profético",
      content: "Este pasaje concentra una densidad extraordinaria de elementos proféticos y escatológicos:\n\nTres promesas directas del regreso de Cristo en primera persona (vv. 7, 12, 20)\n\nDeclaraciones de eternidad divina que establecen la autoridad escatológica de Cristo (v. 13)\n\nProfecías sobre destinos eternos tanto para los redimidos como para los perdidos (vv. 11, 14-15)\n\nAdvertencias proféticas sobre la preservación e interpretación de la revelación (vv. 18-19)\n\nConexiones intertextuales con el Génesis que cierran el arco narrativo bíblico (árbol de la vida)\n\nSiete elementos escatológicos centrales: venida de Cristo, juicio final, recompensas eternas, Nueva Jerusalén, separación moral definitiva, preservación de la revelación, y consumación del plan divino.\n\nEste pasaje funciona como el 'sello profético' de todo el canon bíblico, estableciendo la autoridad final de la revelación apocalíptica."
    }
  };

  // Perspectivas escatológicas
  const eschatologicalPerspectives = [
    {
      name: "Futurista Dispensacionalista",
      description: "Las promesas se cumplirán literalmente en el futuro escatológico después del milenio.",
      explanation: "La perspectiva dispensacionalista interpreta estas palabras finales como referidas específicamente al establecimiento del estado eterno después del milenio de mil años. La promesa 'vengo pronto' se entiende en términos de la perspectiva divina del tiempo, donde mil años son como un día.\n\nLa Nueva Jerusalén descrita anteriormente descenderá literalmente del cielo después del juicio del gran trono blanco. El árbol de la vida será restaurado físicamente en la nueva creación. Las advertencias sobre añadir o quitar se aplican a toda la Escritura pero especialmente protegen las profecías literales del Apocalipsis de reinterpretaciones espiritualizantes.",
      strengths: "Mantiene la interpretación literal consistente con el resto del Apocalipsis. Preserva el sentido de futuro real de las promesas. Enfatiza la seriedad de las advertencias sobre la revelación. Conecta naturalmente con las expectativas judías del reino mesiánico.",
      denominations: "Iglesias bautistas, pentecostales, asambleas de Dios, iglesias evangélicas no denominacionales, fundamentalistas.",
      keyPassages: ["Apocalipsis 20:1-6", "1 Tesalonicenses 4:16-17", "Apocalipsis 21:1-4", "Daniel 9:24-27"]
    },
    {
      name: "Preterista Parcial",
      description: "Muchas promesas se cumplieron en el siglo I, con aplicación continua para la iglesia.",
      explanation: "Los preteristas parciales ven en estas palabras finales una aplicación dual: cumplimiento inmediato para las iglesias del siglo I enfrentando persecución romana, y aplicación continua para toda la era de la iglesia. El 'vengo pronto' se refería principalmente a la intervención divina en la destrucción de Jerusalén en el 70 d.C.\n\nLas advertencias sobre añadir o quitar tuvieron aplicación inmediata en proteger las profecías sobre el juicio de Jerusalén y Roma. Sin embargo, las promesas de vida eterna y las advertencias sobre la integridad escritural mantienen relevancia perpetua. La urgencia del mensaje se relacionaba con las crisis inmediatas que enfrentaban los cristianos del primer siglo.",
      strengths: "Respeta el contexto histórico inmediato. Explica la urgencia del lenguaje temporal. Reconoce cumplimientos históricos verificables. Mantiene relevancia contemporánea sin especulación futurista.",
      denominations: "Reformados, presbiterianos, algunas corrientes anglicanas y luteranas.",
      keyPassages: ["Mateo 24:34", "Apocalipsis 1:1,3", "Lucas 21:20-24", "Apocalipsis 11:8"]
    },
    {
      name: "Amilenialista",
      description: "Las promesas se cumplen espiritualmente ahora y plenamente en la segunda venida.",
      explanation: "La perspectiva amilenial interpreta estas palabras finales como aplicables a toda la era de la iglesia entre la primera y segunda venidas de Cristo. El 'vengo pronto' mantiene la tensión del 'ya' y 'todavía no' - Cristo está viniendo continuamente en juicio y bendición, culminando en Su regreso final.\n\nLa Nueva Jerusalén representa la iglesia presente que participa espiritualmente de las bendiciones celestiales, aunque aguarda la consumación física futura. Las advertencias sobre la Escritura protegen la revelación completa necesaria para la era de la iglesia. El árbol de la vida simboliza la vida eterna disponible ahora por fe, aunque será experimentada plenamente en la resurrección.",
      strengths: "Integra presente y futuro escatológico. Evita especulación cronológica. Enfatiza la relevancia actual de las promesas. Mantiene la esperanza sin fechas específicas.",
      denominations: "Reformadas, luteranas, católicas, ortodoxas, algunas presbiterianas y metodistas.",
      keyPassages: ["Juan 5:24-25", "Colosenses 1:13", "Efesios 2:6", "2 Pedro 3:8-9"]
    },
    {
      name: "Postmilenialista",
      description: "Las promesas se cumplirán gradualmente a través del triunfo del evangelio.",
      explanation: "Los postmilenialistas ven en estas palabras finales la promesa del triunfo eventual del reino de Dios a través de la predicación del evangelio y la transformación gradual de la sociedad. El 'vengo pronto' se refiere a la venida de Cristo en poder espiritual a través de Su iglesia conquistando el mundo para Dios.\n\nLa Nueva Jerusalén representa la civilización cristiana que se desarrollará gradualmente en la tierra antes del regreso físico de Cristo. Las advertencias sobre la Escritura protegen las promesas de victoria que motivarán a la iglesia en su misión de transformación mundial. El árbol de la vida simboliza la abundancia espiritual y material que resultará del reino expandido de Cristo.",
      strengths: "Enfatiza la responsabilidad cultural cristiana. Mantiene optimismo sobre el futuro terrenal. Motiva la misión y transformación social. Integra escatología con historia presente.",
      denominations: "Algunos reformados, presbiterianos reconstruccionistas, algunas corrientes pentecostales del dominio.",
      keyPassages: ["Mateo 28:18-20", "Isaías 11:9", "Habacuc 2:14", "1 Corintios 15:25"]
    },
    {
      name: "Historicista",
      description: "Las promesas describen el desarrollo de la historia de la iglesia hasta el fin.",
      explanation: "La interpretación historicista ve en estas palabras finales el sello sobre toda la historia profética descrita en el Apocalipsis. El libro completo ha trazado la historia de la iglesia desde el siglo I hasta el fin del mundo, y estas palabras finales garantizan el cumplimiento de todo lo profetizado.\n\nEl 'vengo pronto' se refiere al hecho de que, después de todos los períodos históricos descritos en el Apocalipsis, la venida de Cristo está realmente cerca. Las advertencias sobre añadir o quitar han protegido las profecías durante siglos de cumplimiento histórico. La Nueva Jerusalén representa el estado final después de que toda la historia profética se haya cumplido completamente.",
      strengths: "Proporciona marco para toda la historia cristiana. Conecta profecía con eventos históricos verificables. Mantiene relevancia continua del texto. Demuestra providencia divina en la historia.",
      denominations: "Adventistas del séptimo día, algunos metodistas wesleyanos, históricamente reformadores protestantes.",
      keyPassages: ["Daniel 7:1-27", "Apocalipsis 12:1-17", "Daniel 2:31-45", "Apocalipsis 17:1-18"]
    }
  ];

  // Preguntas de estudio
  const studyQuestions = [
    {
      question: "¿Qué afirma el ángel sobre las palabras de la profecía en el versículo 6?",
      options: [
        "Que son difíciles de entender y requieren interpretación especial",
        "Que son fieles y verdaderas, enviadas por Dios para mostrar lo que debe suceder pronto",
        "Que solo se cumplirán en un futuro muy distante",
        "Que son simbólicas y no deben tomarse literalmente"
      ],
      correctAnswer: 1,
      explanation: "El ángel declara que 'estas palabras son fieles y verdaderas' y que el Señor 'ha enviado su ángel, para mostrar a sus siervos las cosas que deben suceder pronto.' Esto establece tanto la veracidad como la autoridad divina de toda la revelación apocalíptica, enfatizando su origen en Dios mismo."
    },
    {
      question: "¿Cuántas veces promete Jesús Su venida 'pronto' en este pasaje específico (vv. 6-15, 18-19)?",
      options: [
        "Una vez",
        "Dos veces",
        "Tres veces",
        "Cuatro veces"
      ],
      correctAnswer: 1,
      explanation: "Jesús promete Su venida 'pronto' dos veces en este pasaje específico: en el versículo 7 ('¡He aquí, vengo pronto!') y en el versículo 12 ('He aquí yo vengo pronto, y mi galardón conmigo'). Hay una tercera vez en el versículo 20, pero ese versículo no está incluido en nuestro pasaje de estudio."
    },
    {
      question: "¿Qué error comete Juan por segunda vez en este capítulo?",
      options: [
        "Malinterpreta una visión que había recibido",
        "Se olvida de escribir parte del mensaje",
        "Intenta adorar al ángel que le muestra las revelaciones",
        "Cuestiona la veracidad de las palabras del ángel"
      ],
      correctAnswer: 2,
      explanation: "Juan admite que 'me postré para adorar a los pies del ángel que me mostraba estas cosas' (v. 8). Esta es la segunda vez que comete este error (la primera fue en 19:10), mostrando la tendencia humana a venerar a los mediadores de revelación divina en lugar de adorar solo a Dios."
    },
    {
      question: "¿Cómo responde el ángel al intento de adoración de Juan?",
      options: [
        "Acepta la adoración como apropiada para un mensajero divino",
        "Le dice que no lo haga porque es consiervo suyo y debe adorar solo a Dios",
        "Se siente honrado pero prefiere que Juan adore a Cristo",
        "Explica que la adoración debe reservarse para ocasiones especiales"
      ],
      correctAnswer: 1,
      explanation: "El ángel responde: 'Mira, no lo hagas; porque yo soy consiervo tuyo, de tus hermanos los profetas, y de los que guardan las palabras de este libro. Adora a Dios' (v. 9). Esto establece la igualdad entre ángeles y humanos redimidos en el servicio a Dios, y reserva la adoración exclusivamente para Dios."
    },
    {
      question: "¿Qué contraste existe entre la instrucción dada a Juan y la dada a Daniel?",
      options: [
        "Juan debe sellar el libro mientras Daniel debía abrirlo",
        "Juan no debe sellar las palabras porque el tiempo está cerca, a diferencia de Daniel",
        "Juan debe escribir más detalles que Daniel",
        "Juan debe ocultar las visiones mientras Daniel las publicó"
      ],
      correctAnswer: 1,
      explanation: "A Juan se le dice 'No selles las palabras de la profecía de este libro, porque el tiempo está cerca' (v. 10), en contraste directo con Daniel quien fue instruido a 'sellar las palabras y cerrar el libro hasta el tiempo del fin' (Daniel 12:4). Esto marca un punto de inflexión en la revelación profética."
    },
    {
      question: "¿Cómo se presenta Jesús en el versículo 13?",
      options: [
        "Como el Buen Pastor y la Puerta",
        "Como el Camino, la Verdad y la Vida",
        "Como el Alfa y la Omega, el principio y el fin, el primero y el último",
        "Como el Rey de reyes y Señor de señores"
      ],
      correctAnswer: 2,
      explanation: "Jesús se identifica con la triple declaración: 'Yo soy el Alfa y la Omega, el principio y el fin, el primero y el último' (v. 13). Esta es una de las afirmaciones más poderosas de Su deidad y eternidad, usando títulos que solo Dios puede reclamar legítimamente."
    },
    {
      question: "¿Quiénes son bienaventurados según el versículo 14?",
      options: [
        "Los que estudian profecía con diligencia",
        "Los que lavan sus ropas para tener derecho al árbol de la vida",
        "Los que sufren persecución por su fe",
        "Los que predican el evangelio hasta los confines de la tierra"
      ],
      correctAnswer: 1,
      explanation: "El versículo 14 declara: 'Bienaventurados los que lavan sus ropas, para tener derecho al árbol de la vida, y para entrar por las puertas en la ciudad.' El lavamiento de ropas simboliza la purificación por la sangre de Cristo, dando acceso a la vida eterna."
    },
    {
      question: "¿Qué tipos de personas quedarán fuera de la ciudad santa?",
      options: [
        "Solo los que han negado explícitamente a Cristo",
        "Los perros, hechiceros, fornicarios, homicidas, idólatras y los que aman la mentira",
        "Únicamente los líderes religiosos corruptos",
        "Solo aquellos que han perseguido a los cristianos"
      ],
      correctAnswer: 1,
      explanation: "El versículo 15 enumera específicamente: 'los perros estarán fuera, y los hechiceros, los fornicarios, los homicidas, los idólatras, y todo aquel que ama y hace mentira.' Esta lista abarca diferentes categorías de rebelión moral y espiritual contra Dios."
    },
    {
      question: "¿Cuáles son las dos advertencias solemnes sobre el manejo de este libro?",
      options: [
        "No interpretarlo mal y no enseñarlo sin autorización",
        "No añadir a sus palabras y no quitar de sus palabras",
        "No venderlo con fines comerciales y no traducirlo incorrectamente",
        "No memorizarlo mal y no citarlo fuera de contexto"
      ],
      correctAnswer: 1,
      explanation: "Los versículos 18-19 presentan dos advertencias paralelas: 'Si alguno añadiere a estas cosas' recibirá las plagas del libro, y 'si alguno quitare de las palabras del libro de esta profecía' perderá su parte en el libro de la vida. Estas protegen la integridad completa de la revelación."
    },
    {
      question: "¿Cuál es la aplicación principal de este pasaje para los creyentes contemporáneos?",
      options: [
        "Calcular fechas exactas para el regreso de Cristo",
        "Vivir en expectativa constante del regreso de Cristo mientras guardamos fielmente Su palabra",
        "Enfocarse principalmente en los juicios venideros",
        "Prepararse para tribulaciones específicas profetizadas"
      ],
      correctAnswer: 1,
      explanation: "El pasaje combina la promesa del regreso pronto de Cristo con la bienaventuranza de 'guardar las palabras de la profecía'. Esto llama a los creyentes a vivir en expectativa activa del regreso de Cristo mientras obedecen fielmente toda Su revelación, tratando Su palabra con reverencia y cuidado."
    }
  ];

  // Datos de recursos
  const resourcesData = {
    applications: [
      {
        title: "La autoridad y veracidad de la Palabra de Dios",
        content: "Las declaraciones 'estas palabras son fieles y verdaderas' nos llaman a confiar completamente en la Escritura. En una era de relativismo y escepticismo, este pasaje afirma la confiabilidad absoluta de la revelación divina. Debemos acercarnos a toda la Biblia con la misma reverencia que estas palabras finales demandan."
      },
      {
        title: "Viviendo en expectativa del regreso de Cristo",
        content: "La triple promesa 'vengo pronto' debe transformar nuestra perspectiva diaria. No significa inactividad sino urgencia santa en el cumplimiento de nuestra misión. ¿Cómo cambiaría nuestra vida si realmente creyéramos que Cristo podría regresar hoy? Esta esperanza debe motivar santidad, evangelismo y fidelidad."
      },
      {
        title: "La importancia de guardar toda la revelación",
        content: "Guardar las palabras va más allá de la preservación textual; implica obediencia práctica. En nuestro tiempo de interpretaciones selectivas, debemos comprometernos a aceptar y obedecer toda la Palabra de Dios, incluyendo las partes difíciles o impopulares. La bienaventuranza viene por la obediencia integral."
      },
      {
        title: "El peligro de alterar la Palabra de Dios",
        content: "Las advertencias sobre añadir o quitar son relevantes para predicadores, maestros y todos los creyentes. Añadir incluye especulaciones no bíblicas; quitar incluye ignorar verdades incómodas. Debemos ser fieles mayordomos de la revelación divina, enseñando y viviendo según lo que Dios ha dicho realmente."
      },
      {
        title: "La realidad del juicio y las recompensas eternas",
        content: "Cristo viene 'con su galardón' para recompensar según las obras. Esto no anula la salvación por gracia sino que confirma que la fe verdadera produce frutos. Nuestras acciones presentes tienen consecuencias eternas. Esta verdad debe motivar excelencia en el servicio cristiano y generosidad en el amor."
      },
      {
        title: "La certeza de la Nueva Jerusalén",
        content: "Las promesas sobre el árbol de la vida y la ciudad santa no son metáforas vagas sino realidades futuras garantizadas por Cristo mismo. Esta esperanza debe consolarnos en el sufrimiento presente y motivarnos a perseverar. La eternidad con Dios es nuestro destino seguro por la gracia divina."
      }
    ],
    crossReferences: [
      {
        reference: "Daniel 12:4, 9",
        content: "Contrasta con la instrucción a Juan de no sellar el libro. Mientras Daniel escribía para un tiempo futuro lejano, Juan escribía para la era inmediata de la iglesia."
      },
      {
        reference: "Apocalipsis 1:3",
        content: "La primera bienaventuranza del libro se relaciona directamente con la bienaventuranza del versículo 7, creando inclusión literaria y temática."
      },
      {
        reference: "Deuteronomio 4:2; 12:32",
        content: "Las advertencias sobre añadir o quitar conectan con advertencias similares en la ley mosaica, estableciendo continuidad en la protección de la revelación divina."
      },
      {
        reference: "Génesis 2:9; 3:22-24",
        content: "El árbol de la vida cierra el arco narrativo bíblico, restaurando lo que se perdió en la Caída y cumpliendo las promesas de redención completa."
      },
      {
        reference: "1 Corintios 6:9-11",
        content: "La lista de excluidos en v. 15 encuentra paralelo en las listas paulinas, pero también en la esperanza de transformación por la gracia de Dios."
      },
      {
        reference: "2 Pedro 1:19-21",
        content: "La autoridad profética establecida en v. 6 se relaciona con la enseñanza petrina sobre el origen divino de toda profecía genuina."
      },
      {
        reference: "Apocalipsis 7:14",
        content: "El lavamiento de ropas conecta con la descripción de los redimidos que han lavado sus vestiduras en la sangre del Cordero."
      },
      {
        reference: "Juan 14:3",
        content: "La promesa 'vengo pronto' encuentra eco en las palabras de despedida de Jesús sobre Su regreso para recibir a los Suyos."
      }
    ]
  };

  // Funciones de renderizado
  const renderIntroductionSection = (section) => {
    if (section === "keywords") {
      return (
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-3 flex items-center bg-gradient-to-r from-purple-600 to-purple-400 text-white px-4 py-2 rounded-lg shadow-md">
            <Info className="mr-2" size={20} />
            {introductionData[section].title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {introductionData[section].content.map((item, idx) => (
              <div key={idx} className="p-3 rounded-lg border shadow-sm bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200 hover:shadow-md transition-all">
                <p className="font-bold text-purple-800">{item.term}</p>
                <p className="text-gray-700 text-sm mt-1">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    return (
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-3 flex items-center bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-4 py-2 rounded-lg shadow-md">
          {section === "context" && <Info className="mr-2" size={20} />}
          {section === "structure" && <BookMarked className="mr-2" size={20} />}
          {section === "statistics" && <Clock className="mr-2" size={20} />}
          {introductionData[section].title}
        </h3>
        <div className="p-4 rounded-lg border shadow-sm bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <p className="text-gray-700 whitespace-pre-line">{introductionData[section].content}</p>
        </div>
      </div>
    );
  };

  const renderResourcesSection = (section) => {
    if (section === "applications") {
      return (
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-3 flex items-center bg-gradient-to-r from-rose-600 to-pink-500 text-white px-4 py-2 rounded-lg shadow-md">
            <Shield className="mr-2" size={20} />
            Aplicaciones Prácticas
          </h3>
          <div className="space-y-4">
            {resourcesData.applications.map((item, idx) => (
              <div key={idx} className="p-3 rounded-lg border shadow-sm bg-gradient-to-r from-rose-50 to-pink-50 border-rose-200 hover:shadow-md transition-all">
                <p className="font-bold text-rose-800">{item.title}</p>
                <p className="text-gray-700 mt-1">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    if (section === "crossReferences") {
      return (
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-3 flex items-center bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-4 py-2 rounded-lg shadow-md">
            <ExternalLink className="mr-2" size={20} />
            Referencias Cruzadas
          </h3>
          <div className="space-y-3">
            {resourcesData.crossReferences.map((item, idx) => (
              <div key={idx} className="p-3 rounded-lg border shadow-sm bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200 flex hover:shadow-md transition-all">
                <div className="font-bold text-emerald-800 mr-2 min-w-32">{item.reference}:</div>
                <p className="text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-white p-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold flex items-center">
            <Scroll className="mr-2" size={24} />
            Apocalipsis 22:6-15, 18-19 | Las Palabras Finales de Cristo
          </h1>
          <p className="text-blue-100 italic">Estudio del Mensaje Profético y Escatológico</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-md border-b border-indigo-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto space-x-1 py-2">
            <button 
              onClick={() => setActiveTab('texto')}
              className={`py-2 px-4 font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'texto' 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md' 
                  : 'bg-gradient-to-r from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200 text-blue-800'
              }`}
            >
              Texto Bíblico
            </button>
            <button 
              onClick={() => setActiveTab('introduccion')}
              className={`py-2 px-4 font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'introduccion' 
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md' 
                  : 'bg-gradient-to-r from-indigo-100 to-purple-100 hover:from-indigo-200 hover:to-purple-200 text-indigo-800'
              }`}
            >
              Introducción
            </button>
            <button 
              onClick={() => setActiveTab('perspectivas')}
              className={`py-2 px-4 font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'perspectivas' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md' 
                  : 'bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 text-purple-800'
              }`}
            >
              Perspectivas
            </button>
            <button 
              onClick={() => setActiveTab('recursos')}
              className={`py-2 px-4 font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'recursos' 
                  ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-md' 
                  : 'bg-gradient-to-r from-pink-100 to-rose-100 hover:from-pink-200 hover:to-rose-200 text-pink-800'
              }`}
            >
              Recursos
            </button>
            <button 
              onClick={() => setActiveTab('preguntas')}
              className={`py-2 px-4 font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'preguntas' 
                  ? 'bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-md' 
                  : 'bg-gradient-to-r from-rose-100 to-amber-100 hover:from-rose-200 hover:to-amber-200 text-rose-800'
              }`}
            >
              Preguntas
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Texto Bíblico Tab */}
        {activeTab === 'texto' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Bible Text - 2/3 in desktop */}
            <div className="lg:col-span-2 bg-white p-5 rounded-lg shadow-md border border-indigo-100">
              <h2 className="text-xl font-semibold mb-4 flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-md">
                <Book className="mr-2" size={20} />
                Texto Bíblico <span className="ml-2 text-blue-100 text-sm">(RVR)</span>
              </h2>
              
              <div className="space-y-4">
                {bibleVerses.map((verse) => {
                  const isSelected = selectedVerse === verse.number;
                  
                  return (
                    <div key={verse.number} className={`p-3 rounded-lg transition-all duration-300 ${isSelected ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 shadow-md' : 'hover:bg-blue-50'}`}>
                      <div 
                        className="cursor-pointer flex items-start group"
                        onClick={() => handleVerseClick(verse.number)}
                      >
                        <span className="font-bold text-blue-600 mr-2 bg-blue-100 px-2 py-1 rounded-full">{verse.number}</span>
                        <div className="flex-1">
                          <p className="text-gray-800">{verse.text}</p>
                          {!isSelected && (
                            <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-blue-500 flex items-center">
                              <Sparkles size={14} className="mr-1" /> 
                              Click para ver comentarios
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {isSelected && (
                        <div className="mt-4 pl-6 space-y-4">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <button 
                              onClick={() => setShowCommentaryType('all')}
                              className={`px-3 py-1 text-xs rounded-full transition-all ${showCommentaryType === 'all' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
                            >
                              Todos
                            </button>
                            <button 
                              onClick={() => setShowCommentaryType('contextual')}
                              className={`px-3 py-1 text-xs rounded-full transition-all ${showCommentaryType === 'contextual' ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow' : 'bg-amber-100 text-amber-800 hover:bg-amber-200'}`}
                            >
                              Contextual
                            </button>
                            <button 
                              onClick={() => setShowCommentaryType('doctrinal')}
                              className={`px-3 py-1 text-xs rounded-full transition-all ${showCommentaryType === 'doctrinal' ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow' : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'}`}
                            >
                              Doctrinal
                            </button>
                            <button 
                              onClick={() => setShowCommentaryType('prophetic')}
                              className={`px-3 py-1 text-xs rounded-full transition-all ${showCommentaryType === 'prophetic' ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow' : 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200'}`}
                            >
                              Profético
                            </button>
                            <button 
                              onClick={() => setShowCommentaryType('devotional')}
                              className={`px-3 py-1 text-xs rounded-full transition-all ${showCommentaryType === 'devotional' ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow' : 'bg-rose-100 text-rose-800 hover:bg-rose-200'}`}
                            >
                              Devocional
                            </button>
                          </div>
                          
                          {(showCommentaryType === 'all' || showCommentaryType === 'contextual') && (
                            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-4 rounded-lg shadow-sm">
                              <div className="flex items-center mb-2">
                                <BookMarked size={18} className="text-amber-600 mr-2" />
                                <span className="font-medium text-amber-800">Contextual</span>
                              </div>
                              <p className="text-gray-800">{verse.contextual}</p>
                            </div>
                          )}
                          
                          {(showCommentaryType === 'all' || showCommentaryType === 'doctrinal') && (
                            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 p-4 rounded-lg shadow-sm">
                              <div className="flex items-center mb-2">
                                <Book size={18} className="text-emerald-600 mr-2" />
                                <span className="font-medium text-emerald-800">Doctrinal</span>
                              </div>
                              <p className="text-gray-800">{verse.doctrinal}</p>
                            </div>
                          )}
                          
                          {(showCommentaryType === 'all' || showCommentaryType === 'prophetic') && (
                            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-4 rounded-lg shadow-sm">
                              <div className="flex items-center mb-2">
                                <MessageCircle size={18} className="text-indigo-600 mr-2" />
                                <span className="font-medium text-indigo-800">Profético</span>
                              </div>
                              <p className="text-gray-800">{verse.prophetic}</p>
                            </div>
                          )}
                          
                          {(showCommentaryType === 'all' || showCommentaryType === 'devotional') && (
                            <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-l-4 border-rose-500 p-4 rounded-lg shadow-sm">
                              <div className="flex items-center mb-2">
                                <Send size={18} className="text-rose-600 mr-2" />
                                <span className="font-medium text-rose-800">Devocional</span>
                              </div>
                              <p className="text-gray-800">{verse.devotional}</p>
                            </div>
                          )}
                          
                          {(verse.number === '7' || verse.number === '12' || verse.number === '18') && (
                            <button 
                              onClick={() => setActiveTab('perspectivas')}
                              className="mt-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-2 px-4 rounded-lg flex items-center text-sm shadow-md transition-all"
                            >
                              <Layers size={16} className="mr-2" />
                              Ver perspectivas escatológicas
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Side Panel - 1/3 in desktop */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-5 rounded-lg shadow-md border border-indigo-100">
              <h2 className="text-xl font-semibold text-indigo-800 mb-4">Análisis del Pasaje</h2>
              
              {/* Prophetic elements */}
              <div className="mb-6">
                <h3 className="font-medium text-indigo-800 mb-3 flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-2 rounded-lg shadow-sm">
                  <Clock size={18} className="mr-2" />
                  Elementos Proféticos Clave
                </h3>
                <ul className="space-y-3">
                  <li className="bg-white p-3 rounded-lg shadow-sm border border-indigo-100 hover:shadow-md transition-all">
                    <span className="font-medium text-indigo-700">Palabras fieles y verdaderas </span>
                    <span className="text-xs text-purple-500">(v. 6)</span>
                    <p className="text-gray-700 text-sm mt-1">Establece la autoridad divina absoluta de toda la revelación apocalíptica.</p>
                  </li>
                  <li className="bg-white p-3 rounded-lg shadow-sm border border-indigo-100 hover:shadow-md transition-all">
                    <span className="font-medium text-indigo-700">"Vengo pronto" </span>
                    <span className="text-xs text-purple-500">(vv. 7, 12)</span>
                    <p className="text-gray-700 text-sm mt-1">Promesa central de la Parusía, el regreso glorioso de Cristo para establecer Su reino eterno.</p>
                  </li>
                  <li className="bg-white p-3 rounded-lg shadow-sm border border-indigo-100 hover:shadow-md transition-all">
                    <span className="font-medium text-indigo-700">El tiempo está cerca </span>
                    <span className="text-xs text-purple-500">(v. 10)</span>
                    <p className="text-gray-700 text-sm mt-1">Contrasta con Daniel: las profecías están ahora abiertas para la era de la iglesia.</p>
                  </li>
                  <li className="bg-white p-3 rounded-lg shadow-sm border border-indigo-100 hover:shadow-md transition-all">
                    <span className="font-medium text-indigo-700">Destinos eternos fijos </span>
                    <span className="text-xs text-purple-500">(vv. 11, 14-15)</span>
                    <p className="text-gray-700 text-sm mt-1">Describe la confirmación final del carácter y las condiciones para la vida eterna.</p>
                  </li>
                  <li className="bg-white p-3 rounded-lg shadow-sm border border-indigo-100 hover:shadow-md transition-all">
                    <span className="font-medium text-indigo-700">Galardón según las obras </span>
                    <span className="text-xs text-purple-500">(v. 12)</span>
                    <p className="text-gray-700 text-sm mt-1">Enseña sobre recompensas eternas basadas en la fidelidad presente.</p>
                  </li>
                </ul>
              </div>

              {/* Practical applications */}
              <div>
                <h3 className="font-medium text-rose-800 mb-3 flex items-center bg-gradient-to-r from-rose-500 to-pink-500 text-white p-2 rounded-lg shadow-sm">
                  <Shield size={18} className="mr-2" />
                  Aplicaciones Centrales
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-rose-100 hover:shadow-md transition-all">
                    <Crown size={16} className="text-rose-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium text-rose-700">Autoridad absoluta de la Escritura </span>
                      <p className="text-gray-700 text-sm">Las palabras "fieles y verdaderas" demandan reverencia total hacia toda la revelación divina.</p>
                    </div>
                  </li>
                  <li className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-rose-100 hover:shadow-md transition-all">
                    <Eye size={16} className="text-rose-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium text-rose-700">Expectativa constante del retorno </span>
                      <p className="text-gray-700 text-sm">La promesa "vengo pronto" debe transformar nuestra perspectiva diaria y prioridades eternas.</p>
                    </div>
                  </li>
                  <li className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-rose-100 hover:shadow-md transition-all">
                    <Heart size={16} className="text-rose-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium text-rose-700">Guardar toda la Palabra </span>
                      <p className="text-gray-700 text-sm">Obediencia integral a la revelación divina, no selectiva según nuestras preferencias.</p>
                    </div>
                  </li>
                  <li className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-rose-100 hover:shadow-md transition-all">
                    <AlertTriangle size={16} className="text-rose-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium text-rose-700">Integridad en la enseñanza </span>
                      <p className="text-gray-700 text-sm">Las advertencias sobre añadir o quitar protegen contra distorsiones de la verdad bíblica.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Alert */}
              <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg border border-amber-200 shadow-sm">
                <h3 className="font-medium text-amber-800 mb-2 flex items-center">
                  <Scroll size={18} className="text-amber-600 mr-2" />
                  Sello Final del Canon
                </h3>
                <p className="text-gray-700 text-sm">
                  Este pasaje funciona como el "sello divino" sobre todo el canon bíblico. 
                  Las palabras finales de Cristo establecen la autoridad suprema de la 
                  revelación completa y advierten contra cualquier alteración.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Introducción Tab */}
        {activeTab === 'introduccion' && (
          <div className="bg-white p-5 rounded-lg shadow-md border border-indigo-100">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-md">Introducción a Apocalipsis 22:6-15, 18-19</h2>
            
            {renderIntroductionSection("context")}
            {renderIntroductionSection("structure")}
            {renderIntroductionSection("keywords")}
            {renderIntroductionSection("statistics")}
          </div>
        )}

        {/* Perspectivas Tab */}
        {activeTab === 'perspectivas' && (
          <div className="bg-white p-5 rounded-lg shadow-md border border-purple-100">
            <h2 className="text-xl font-semibold text-purple-800 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg shadow-md">Perspectivas Escatológicas sobre las Palabras Finales</h2>
            
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg mb-6 border border-purple-200 shadow-sm">
              <h3 className="font-bold text-purple-800 mb-2">Pasajes clave:</h3>
              <div className="space-y-2 text-gray-800">
                <p><strong>v. 7:</strong> "¡He aquí, vengo pronto! Bienaventurado el que guarda las palabras de la profecía de este libro."</p>
                <p><strong>v. 12:</strong> "He aquí yo vengo pronto, y mi galardón conmigo, para recompensar a cada uno según sea su obra."</p>
                <p><strong>vv. 18-19:</strong> "Yo testifico... Si alguno añadiere a estas cosas... y si alguno quitare de las palabras..."</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {eschatologicalPerspectives.map((perspective, index) => (
                <div key={index} className="border border-purple-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-3 cursor-pointer flex justify-between items-center"
                    onClick={() => handlePerspectiveClick(perspective.name)}
                  >
                    <h3 className="font-bold text-lg">{perspective.name}</h3>
                    <div className="flex items-center">
                      <p className="text-purple-100 text-sm mr-2">{perspective.description}</p>
                      <span>{activePerspective === perspective.name ? '−' : '+'}</span>
                    </div>
                  </div>
                  
                  {activePerspective === perspective.name && (
                    <div className="p-4 space-y-3 bg-gradient-to-r from-purple-50 to-indigo-50">
                      <div>
                        <h4 className="font-semibold text-purple-700 flex items-center">
                          <Book size={16} className="mr-2" />
                          Explicación:
                        </h4>
                        <p className="text-gray-700 whitespace-pre-line">{perspective.explanation}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-purple-700 flex items-center">
                          <Star size={16} className="mr-2" />
                          Fortalezas:
                        </h4>
                        <p className="text-gray-700">{perspective.strengths}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-purple-700 flex items-center">
                          <Church size={16} className="mr-2" />
                          Denominaciones asociadas:
                        </h4>
                        <p className="text-gray-700">{perspective.denominations}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-purple-700 flex items-center">
                          <BookMarked size={16} className="mr-2" />
                          Pasajes bíblicos de apoyo:
                        </h4>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {perspective.keyPassages.map((pasaje, idx) => (
                            <span key={idx} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm shadow-sm">
                              {pasaje}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-lg border border-indigo-200 shadow-sm">
              <h3 className="font-bold text-indigo-800 mb-2">Puntos de consenso entre todas las perspectivas:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight size={18} className="text-indigo-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Cristo regresará en gloria y majestad para establecer justicia perfecta.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={18} className="text-indigo-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">La Palabra de Dios es completamente confiable y debe preservarse intacta.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={18} className="text-indigo-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Habrá recompensas y juicios eternos basados en la respuesta a la revelación divina.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={18} className="text-indigo-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Los creyentes deben vivir en expectativa del cumplimiento de todas las promesas de Dios.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={18} className="text-indigo-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">La obediencia a la revelación divina es esencial para recibir las bendiciones prometidas.</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600 italic">
                "¡He aquí, vengo pronto! Bienaventurado el que guarda las palabras de la profecía de este libro." (Apocalipsis 22:7)
              </p>
            </div>
          </div>
        )}

        {/* Recursos Tab */}
        {activeTab === 'recursos' && (
          <div className="bg-white p-5 rounded-lg shadow-md border border-rose-100">
            <h2 className="text-xl font-semibold text-rose-800 mb-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white px-4 py-2 rounded-lg shadow-md">Recursos de Estudio</h2>
            
            {renderResourcesSection("applications")}
            {renderResourcesSection("crossReferences")}
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-md">
                <Layers className="mr-2" size={20} />
                Perspectivas Escatológicas
              </h3>
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg border border-purple-200 shadow-sm">
                <p className="mb-3">
                  Las palabras finales de Cristo en el Apocalipsis han sido interpretadas de diversas maneras 
                  por diferentes tradiciones cristianas. Cada perspectiva aporta elementos valiosos para 
                  entender el cumplimiento de estas promesas solemnes sobre el regreso de Cristo y 
                  la preservación de la revelación divina.
                </p>
                <button 
                  onClick={() => setActiveTab('perspectivas')}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-2 px-4 rounded-lg flex items-center text-sm mx-auto shadow-md transition-all"
                >
                  <Layers size={16} className="mr-2" />
                  Ver Perspectivas Escatológicas
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Preguntas Tab */}
        {activeTab === 'preguntas' && (
          <div className="bg-white p-5 rounded-lg shadow-md border border-amber-100">
            <h2 className="text-xl font-semibold text-amber-800 mb-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-lg shadow-md">Preguntas de Estudio</h2>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg shadow-sm border border-amber-200">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-amber-800">Pregunta {currentQuestion + 1} de {studyQuestions.length}</h3>
                <div className="text-sm text-gray-500">
                  {Array.from({ length: studyQuestions.length }, (_, i) => (
                    <span 
                      key={i} 
                      className={`inline-block w-3 h-3 rounded-full mx-1 ${
                        i === currentQuestion 
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 shadow-sm' 
                          : 'bg-gray-300'
                      }`}
                    ></span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm mb-4 border border-amber-100">
                <p className="font-medium text-gray-800 mb-4">{studyQuestions[currentQuestion].question}</p>
                
                <div className="space-y-3">
                  {studyQuestions[currentQuestion].options.map((option, idx) => (
                    <div 
                      key={idx}
                      onClick={() => !showAnswerFeedback && handleAnswerSelect(idx)}
                      className={`p-3 border rounded-lg cursor-pointer transition-all ${
                        selectedAnswer === idx 
                          ? idx === studyQuestions[currentQuestion].correctAnswer
                            ? 'bg-gradient-to-r from-green-100 to-emerald-100 border-green-300 shadow-sm'
                            : 'bg-gradient-to-r from-red-100 to-rose-100 border-red-300 shadow-sm'
                          : 'hover:bg-amber-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-start">
                        {showAnswerFeedback && selectedAnswer === idx && (
                          <>
                            {idx === studyQuestions[currentQuestion].correctAnswer ? (
                              <CheckCircle2 size={20} className="text-green-500 mr-2 flex-shrink-0" />
                            ) : (
                              <XCircle size={20} className="text-red-500 mr-2 flex-shrink-0" />
                            )}
                          </>
                        )}
                        {!showAnswerFeedback && (
                          <div className="w-5 h-5 border border-amber-300 rounded-full mr-2 flex-shrink-0"></div>
                        )}
                        <span>{option}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {showAnswerFeedback && (
                  <div className={`mt-4 p-4 rounded-lg ${
                    selectedAnswer === studyQuestions[currentQuestion].correctAnswer
                      ? 'bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200'
                      : 'bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200'
                  }`}>
                    <div className="flex items-start">
                      {selectedAnswer === studyQuestions[currentQuestion].correctAnswer ? (
                        <CheckCircle2 size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      ) : (
                        <HelpCircle size={20} className="text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className="font-medium mb-1">
                          {selectedAnswer === studyQuestions[currentQuestion].correctAnswer
                            ? '¡Correcto!'
                            : 'Respuesta incorrecta'}
                        </p>
                        <p className="text-gray-700">{studyQuestions[currentQuestion].explanation}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-between">
                <button
                  onClick={handlePrevQuestion}
                  disabled={currentQuestion === 0}
                  className={`px-4 py-2 rounded-lg ${
                    currentQuestion === 0
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700 shadow-sm'
                  }`}
                >
                  Anterior
                </button>
                
                {showAnswerFeedback && (
                  <button
                    onClick={handleNextQuestion}
                    disabled={currentQuestion === studyQuestions.length - 1}
                    className={`px-4 py-2 rounded-lg shadow-sm ${
                      currentQuestion === studyQuestions.length - 1
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'
                        : 'bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700'
                    }`}
                  >
                    {currentQuestion === studyQuestions.length - 1 ? 'Finalizar' : 'Siguiente'}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ApocalipsisEstudioApp;