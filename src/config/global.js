export default {
  global: {
    componenteFormativo:
      'Evaluación y monitoreo en la implementación de BPG para bovinos de carne',
    descripcionCurso:
      'Mediante este componente el aprendiz se afianzará en conceptos y prácticas para el desempeño de contingencias, seguimiento y evaluación, tipos y técnicas de evaluación, metodología de seguimiento. Asimismo se capacitará en el manejo de indicadores de gestión, procedimientos e instrumentos, diagramación, aplicación y trazabilidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Contingencias',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Seguimiento y evaluación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipo y técnicas de evaluación y monitoreo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Metodologías',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Indicadores de gestión',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Procedimientos e instrumentos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Trazabilidad',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Consejo Nacional de Política Económica y Social. (2019). Política nacional para mejorar la competitividad del sector lácteo colombiano.',
      link:
        'https://www.minagricultura.gov.co/ministerio/direcciones/Documents/d.angie/conpes%203675.pdf',
    },
    {
      referencia:
        'Corrientes Portal Turístico Provincial. (s.f.). Ganadería de Corrientes. Corrientes. ',
      link: 'http://www.corrientes.com.ar/provincia/ganaderia.php',
    },
    {
      referencia:
        'Federación Colombiana de Ganaderos. (s.f.). Buenas Prácticas Ganaderas. FEDEGAN. ',
      link:
        'https://www.fedegan.org.co/programas/buenas-practicas-ganaderas#:~:text=Las%20Buenas%20Pr%C3%A1cticas%20Ganaderas%20(BPG,que%20trabajan%20en%20la%20explotaci%C3%B3n.',
    },
    {
      referencia: 'García, E. (2019). Ganadería de Sinaloa. Luz Noticias.',
      link:
        'https://www.luznoticias.mx/agro/ganaderia-de-sinaloa-fuera-del-programa-creditos-a-la-palabra/57574 ',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (s.f.). Reglamentación sobre las condiciones sanitarias y de inocuidad en la producción primaria de ganado bovino y porcino. ICA.',
      link:
        'https://www.ica.gov.co/getdoc/016f3c96-a458-4fa6-ae96-41d18b2221f5/requisitos-sanitarios-y-de-inocuidad-en-la-producc.aspx',
    },
    {
      referencia:
        'Metro Ecuador. (2019). La "ganadería climáticamente inteligente" se consolida en Ecuador. Contexto Ganadero.',
      link:
        'https://www.contextoganadero.com/reportaje/la-ganaderia-climaticamente-inteligente-se-consolida-en-ecuador',
    },
    {
      referencia:
        'OnCuba. (2018). Ganadería cubana: más leche, pero muy lejos de satisfacer la demanda. OnCuba News.',
      link:
        'https://oncubanews.com/cuba/ganaderia-cubana-mas-leche-pero-muy-lejos-de-satisfacer-la-demanda/.',
    },
    {
      referencia:
        'Rangel, V. (2015). Gestión ambiental en el sector ganadero doble propósito de los pequeños productores en Maicao, Colombia. Revista Espacios. ',
      link: 'https://www.revistaespacios.com/a20v41n27/a20v41n27p03.pdf',
    },
    {
      referencia:
        'Resolución 002341 de 2007. [Instituto Colombiano Agropecuario]. Por la cual se reglamentan las condiciones sanitarias y de inocuidad en la producción primaria de ganado bovino y bufalino destinado al sacrificio para consumo humano. Agosto 23 de 2007. ',
    },
  ],
  glosario: [
    {
      termino: 'Contingencia ',
      significado:
        'Es un evento que podría acontecer en el futuro, con posibles consecuencias positivas o negativas para la empresa',
    },
    {
      termino: 'Gestión',
      significado:
        'Operaciones que se realizan para administrar un negocio o una empresa.',
    },
    {
      termino: 'ICA',
      significado:
        ' Instituto Colombiano Agropecuario, entidad pública del orden nacional con personería jurídica, autonomía administrativa y patrimonio independiente, perteneciente al Sistema Nacional de Ciencia y Tecnología, adscrita al Ministerio de Agricultura y Desarrollo Rural.',
    },
    {
      termino: 'Impacto',
      significado:
        'Consecuencia planeada o imprevista con efectos en un proyecto.',
    },
    {
      termino: 'Indicador',
      significado:
        'Instrumento que suministra información sobre una condición o logro de una cierta situación, actividad o resultado.',
    },
    {
      termino: 'Inocuo',
      significado: 'Que no hace daño físico o moral.',
    },
    {
      termino: 'Metodología',
      significado:
        'Hace referencia al conjunto de procedimientos racionales utilizados para alcanzar el objetivo o la gama de objetivos.',
    },
    {
      termino: 'Riesgo',
      significado:
        'Combinación de la probabilidad de que resulte un evento y sus consecuencias negativas.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Serie de procedimientos que permiten seguir el proceso de evolución de un producto en cada una de sus etapas de producción.',
    },
    {
      termino: 'Viabilidad',
      significado:
        'Es un análisis que tiene por finalidad conocer la probabilidad que existe de poder llevar a cabo un proyecto con éxito.',
    },
  ],
  complementario: [
    {
      tema: 'Seguimiento y evaluación',
      referencia: 'Mtra. Marcia ATP. (2021). PEMC. Seguimiento y evaluación',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Nnz2yv27PCo',
    },
    {
      tema: 'Contingencia',
      referencia:
        'Procem Consultores. (2020). Cómo elaborar un plan de contingencia ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HOEPtwPPRaw',
    },
    {
      tema: 'Indicadores de gestión ',
      referencia:
        'Procem Consultores. (2019). ¿Qué son los indicadores de gestión? ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ON2_v7GrDE0',
    },
    {
      tema: 'Trazabilidad ',
      referencia:
        'Instituto Colombiano Agropecuario. (2021). ICA - Recuperación de la trazabilidad bovina ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=JqUQA8U9koE',
    },
    {
      tema: 'Trazabilidad',
      referencia:
        'La finca de hoy. (2019). Trazabilidad en producción cárnica ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Y65Fr10l3NM',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'María Camila García Santamaría',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable Equipo desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'James Dubán Lozano Cuellar',
        cargo: 'Experto temático',
        centro: 'Centro Agropecuario la Granja Regional Tolima',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro de la Industria, la Empresa y los Servicios Regional Norte de Santander',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabían Castaño Pérez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sandra Milena Triana Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Eugenia Mejía López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos ',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
