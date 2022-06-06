<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Seguimiento y evaluación
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4(data-aos="fade-right")
        figure
          img.mb-5(src='@/assets/curso/tema2/img1.png', style="width: 350px").m-auto
      .col-lg-6
        .dual-txt-deco2
          p.mb-5(style="position: relative; z-index: 1;") La implementación de las BPG en la producción de carne exige un compromiso constante de los ganaderos; por ello, desarrollar seguimiento y evaluación son un conjunto de actividades de intervención clave con las que se recopila la información, de una manera sistemática, de cada una de las dependencias del proyecto, durante toda la trayectoria hasta su fase final.
        .cajon.color-primario.p-4
          p.mb-0 A continuación, se presentan los objetivos más importantes de la evaluación y el seguimiento en los procesos de producción de bovinos de carne en el marco de las BPG:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    #t_2_1.pt-5
    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2 2.1 Tipo y técnicas de evaluación y monitoreo
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-5.mb-lg-0
        .dual-txt-deco3
          p(data-aos="fade-right")(style="position: relative; z-index: 1;") La evaluación y monitoreo son un modelo de técnicas que reúnen características esenciales y contribuyen a la aplicación de acciones y actividades que se fomentan en la ganadería de carne. Los modelos de las BPG en Colombia se basan en la implementación y mejora de las actividades ganaderas de países más desarrollados, puesto que a nivel nacional se presenta un déficit en el sector agropecuario que no le permite la creación de un modelo único ganadero.
      .col-lg-4
        figure
          img(data-aos="fade-left")(src='@/assets/curso/tema2/img1.svg', style="width: 350px").m-auto
    p.mb-5 En cuanto a las técnicas de evaluación y monitoreo tenga presente:
    AcordionA(data-aos="fade-right").mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--amarilla")
      .row(titulo="BPG").justify-content-evenly.align-items-center
        .col-lg-8.mb-4.mb-md-0
          p BPG: las empresas y fincas ganaderas deben aplicar las Buenas Prácticas Ganaderas para aspirar al proceso de certificación del ICA.
        .col-6.col-lg-2.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema2/img2.svg')
      .row(titulo="Refuerzo del proceso productivo").justify-content-evenly.align-items-center
        .col-lg-8.mb-4.mb-md-0
          p Refuerzo del proceso productivo: los tipos de monitoreo y evaluación sirven de apoyo para la recolección sistemática de información de las BPG durante el desarrollo del proyecto.
        .col-6.col-lg-2.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema2/img3.svg')
      .row(titulo="Clasificación del propósito").justify-content-evenly.align-items-center
        .col-lg-8.mb-4.mb-md-0
          p Tanto el monitoreo como la evaluación permiten la clasificación del propósito y la relación costo beneficio de la empresa de carne bovina.
        .col-6.col-lg-2.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema2/img4.svg')
      .row(titulo="Direccionamiento del monitoreo").justify-content-evenly.align-items-center
        .col-lg-8.mb-4.mb-md-0
          p Direccionamiento del monitoreo: las técnicas de monitoreo están direccionadas a la medición de variables financieras y productivas de la empresa, pues su función es recoger, interpretar y realizar seguimiento de cada acción del proceso en la producción.
        .col-6.col-lg-2.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema2/img5.svg')
      .row(titulo="Toma de decisiones").justify-content-evenly.align-items-center
        .col-lg-8.mb-4.mb-md-0
          p Toma de decisiones: el monitoreo, además de evidenciar los indicadores y los procesos que determinan el estado del proyecto, favorece la toma de decisiones oportunas para el crecimiento del nivel competitivo de la empresa o finca.
        .col-6.col-lg-2.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema2/img6.svg')
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema2/img7.svg', style="width: 90px").m-auto
            .col
              p.mb-0 Las variables de evaluación de la cadena productiva de ganado de carne son pilares fundamentales del correcto funcionamiento de la empresa ganadera, ayudan a direccionar el establecimiento al buen manejo y cumplimiento de BPG en la ganadería de carne colombiana.
    p.mb-5 Reconozca, a continuación, los tipos de técnicas de evaluación y monitoreo aplicables en el proceso de producción de bovinos de carne:
    SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="fade-left")
      .tarjeta.color-acento-botones.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img9.svg' alt='AvatarTop')
        p.text-center #[b 1. Evaluación de resultados]
        p.text-center Mide los resultados a corto y largo plazo del proyecto. #[span.txt-deco1 -------------]
      .tarjeta.color-acento-botones.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img10.svg' alt='AvatarTop')
        p.text-center #[b 2. Evaluación de impacto]
        p.text-center Mide la diferencia entre un programa implementado y uno sin implementar.
      .tarjeta.color-acento-botones.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img11.svg' alt='AvatarTop')
        p.text-center #[b 3. Evaluación productiva]
        p.text-center Se enfoca en las estadísticas de producción de la empresa. #[span.txt-deco1 -------------]
      .tarjeta.color-acento-botones.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img12.svg' alt='AvatarTop')
        p.text-center #[b 4. Evaluación de calidad]
        p.text-center Permite conocer si el producto cumple con los estándares de calidad.
      .tarjeta.color-acento-botones.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img13.svg' alt='AvatarTop')
        p.text-center #[b 5. Estados financieros]
        p.text-center Permiten conocer la parte administrativa y económica de la empresa.
      .tarjeta.color-acento-botones.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img14.svg' alt='AvatarTop')
        p.text-center #[b 6. Solución de problemas]
        p.text-center Fase en la que se busca identificar una problemática y buscar una solución temprana.
    Separador
    #t_2_2
    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2 2.2 Metodologías
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(data-aos="fade-right")(src='@/assets/curso/tema2/img2.png', style="width: 450px").m-auto
      .col-lg-5
        .dual-txt-deco4
          p(data-aos="fade-left")(style="position: relative; z-index: 1;") Son procedimientos, métodos o reglas con que se recopila información y/o se transmite el saber. En tal sentido, las BPG buscan implementar conocimiento bajo procesos que procuran el cuidado del medio ambiente, del personal y del producto final, ver figura.
    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Figura 2]. BPG-VC en la producción.
    figure.mb-5
      img(src='@/assets/curso/tema2/img15.svg', style="width: 1250px").m-auto
    p.mb-5 Para el desarrollo y aplicación de las metodologías en el marco de las BPG es importante tener en cuenta los siguientes lineamientos:
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema2/img16.svg')(data-aos="fade-right")
      .tarjeta.tarjeta--amarilla2.p-3(x="12%" y="100%" numero="+")
        p.mb-0 Es una recopilación de información, correspondiente a manuales, normas, documentos y certificaciones de toda la cadena productiva de carne, con la cual se hace un comparativo entre BPG y lo que se está implementando en la empresa. Luego se buscan mejoras y se realizan los ajustes para cumplir con todo lo exigido.
      .tarjeta.tarjeta--amarilla2.p-3(x="38%" y="100%" numero="+")
        p.mb-0 Se realizan visitas al predio, con el fin de identificar las fortalezas y debilidades encontradas en la trazabilidad, alimentación, sanidad y transporte. Con ello se diagnostica el estado actual de producción de la empresa.
      .tarjeta.tarjeta--amarilla2.p-3(x="63%" y="100%" numero="+")
        p.mb-0 Se ponen en práctica las mejoras diagnosticadas, se realiza una junta en la que se revisa el plan de acción y se le da visto bueno, entonces, se adecua un cronograma de capacitación e implementación de herramientas.
      .tarjeta.tarjeta--amarilla2.p-3(x="88%" y="100%" numero="+")
        p.mb-0 Después de implementar las BPG se realiza la evaluación; esta ofrece la información correspondiente y se verifica el cumplimiento de los objetivos cada tres o seis meses, ya que esta suele encontrarse en constante cambio.
    Separador
    #t_2_3
    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2 2.3 Indicadores de gestión
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mt-5(data-aos="fade-right") Son resultados medibles de los insumos, acciones y procesos, los cuales muestran a una empresa, los logros, avances y posibilidades de mejora continua, todo ello, mediante el análisis de los mismos.
        .cajon.color-primario.p-4.mb-5
          p.mb-0 Los indicadores de gestión marcan, entre otras, la viabilidad, el estado financiero y administrativo de la empresa, asegurando la satisfacción del cliente y de las partes interesadas.
      .col-lg-4
        figure.mb-5
          img(data-aos="fade-left")(src='@/assets/curso/tema2/img17.svg', style="width: 450px").m-auto
    TabsC.color-primario.mb-5(data-aos="fade-left").modif
      .py-3.py-md-4(titulo="¡Atención!").bg-color3
        .row
          .col-12.p-4
            p.text-center.mb-0 Los indicadores de gestión de las BPG, están articuladas con las normativas vigentes implementadas en Colombia y el mundo.
      .py-5.py-md-4(titulo="¡Importante!").bg-color3.p-4
        .row
          .col-12.p-4
            p.text-center.mb-0 A partir de la normativa, se siguen lineamientos para el desarrollo organizado y continuo de las diferentes facetas de producción de carne bovina, hasta llegar al consumidor final.
      .py-3.py-md-4(titulo="Certificación").bg-color3
        .row
          .col-12.p-4
            p.text-center.mb-0 El cumplimiento de estos indicadores también permite una certificación por parte del ICA.
    p.mb-5 En la siguiente figura se muestran los pasos para el alcance y consolidación de los indicadores de gestión:
    .row.mb-5
      .col-lg-3.mb-4.mb-lg-0
        .p-4.bg-color4
          figure.mb-4
            img(src='@/assets/curso/tema2/img18.svg', style="width: 120px").m-auto
          p.text-center 1. Identificar el objeto a medir.
      .col-lg-3.mb-4.mb-lg-0
        .p-4.bg-color4
          figure.mb-4
            img(src='@/assets/curso/tema2/img19.svg', style="width: 120px").m-auto
          p.text-center 2. Revisar alternativas de medición.
      .col-lg-3.mb-4.mb-lg-0
        .p-4.bg-color4
          figure.mb-4
            img(src='@/assets/curso/tema2/img20.svg', style="width: 120px").m-auto
          p.text-center 3. Seleccionar las medidas correctas.
      .col-lg-3
        .p-4.bg-color4
          figure.mb-4
            img(src='@/assets/curso/tema2/img21.svg', style="width: 120px").m-auto
          p.text-center 4. Definir los indicadores correctos.
    Separador
    #t_2_4
    .titulo-segundo.color-secundario(data-aos="fade-right")
      h2 2.4 Procedimientos e instrumentos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(data-aos="fade-right")(src='@/assets/curso/tema2/img22.svg', style="width: 450px").m-auto
      .col-lg-4
        .dual-txt-deco3
          p(data-aos="fade-left")(style="position: relative; z-index: 1;") Son técnicas para llevar a cabo una evaluación continua y seguimiento sistemático de información, acorde a los objetivos que tenga planteada la empresa ganadera.
    p.text-center.mb-5 Los procedimientos para la #[b certificación de BPG en bovinos de carne] son:
    .tarjeta.tarjeta--amarilla3.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-evenly
          .col-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img23.svg', style="width: 200px").m-auto
          .col-10
            p #[b 01.] Inscripción de predios ante el ICA.
            p #[b 02.] Instalaciones: deben estar acordes al Plan de Ordenamiento Territorial de su municipio (POT).
            p #[b 03.] El predio debe tener registros de ingreso y salida (personas, vehículos y animales) y tener la asistencia del médico veterinario.
            p #[b 04.] Las instalaciones deben estar adecuadas en pro del bienestar animal y de los operarios.
            p Deben tener una identificación individual, registros con novedades sanitarias, productivas y de medicamentos e insumos veterinarios.
        .row.justify-content-evenly
          .col-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img23.svg', style="width: 200px").m-auto
          .col-10
            p #[b 05.] Los medicamentos veterinarios deben contar con el registro ICA y deben tener la formula médica por parte del veterinario encargado.
            p #[b 06.] Deben contar con  el Manejo Integral de Plagas (MIP).
            p #[b 07.] A las fuentes hídricas se les debe realizar monitoreo constante.
            p #[b 08.] Se debe realizar exámenes anuales al personal, capacitación de seguridad y riesgos ocupacionales.
        .row.justify-content-evenly
          .col-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img23.svg', style="width: 200px").m-auto
          .col-10
            p #[b 09.] El personal debe contar con la indumentaria necesaria.
            p #[b 10.] Todos los predios deben tener el registro ICA.
            p #[b 11.] El transporte de los animales debe ser adecuado y con las normas establecidas.
            p #[b 12.] Deben contar con la guía de movilización del ICA.
    .row.justify-content-center
      .col-lg-10.bg-color3
        .p-4
          p.mb-0 #[b ¡Importante!]
          p Todos estos documentos y procedimientos permiten al evaluador conocer a fondo, si hay un déficit o problema dentro de las etapas de producción o, si por el contrario, se presentan avances que permiten el alcance de los objetivos planteados.
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-2.col-sm-2.col-lg-2
                img(src='@/assets/curso/tema2/img24.svg')
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 Resolución 068167 de 2020
                    p.text-small Para afianzar su conocimiento con relación a la normativa asociada a la evaluación continua y seguimiento, visite y explore la Resolución No. 068167 de 2020, “por medio de la cual se establecen los requisitos para obtener la certificación en Buenas Prácticas Ganaderas BPG en la producción de carne de bovinos y/o bufalinos”. 
                  .col-sm-auto
                    a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('https://www.ica.gov.co/getattachment/db5b53ff-0752-4884-90b8')" target="_blank")
                      span(style="color: #12263F !important") Descargar
                      i.fas.fa-file-download(style="color: #12263F !important")

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
