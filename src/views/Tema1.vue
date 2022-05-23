<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Contingencias
    .row.justify-content-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        .dual-txt-deco
          p(style="position: relative; z-index: 1;") Son acciones en respuesta a un suceso que puede o no presentarse en un futuro. Se pueden implementar para promover y materializar una meta y estas pueden tener resultados positivos o negativos, dependiendo de la estrategia implementada por parte del ganadero o el equipo de trabajo de la finca.
          p #[b Dentro de los elementos más destacados que se deben tener en cuenta, relacionados con las contingencias, se encuentran:]
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/img1.png', style="width: 350px").m-auto
    SlyderB.mb-5(:datos="datosSlyder")
    p.mb-5 Los siguientes son los pasos que se deben seguir para la preparación de una ruta de contingencia:
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img5.png', style="width: 400px").m-auto
      .col-lg-7
        .row.mb-3
          .col-auto.p-3.bg-color1
            p.mb-0.text-center #[b 01.]
          .col.p-3.bg-color2
            p.mb-0 Lista de riesgos
        .row.mb-3
          .col-auto.p-3.bg-color1
            p.mb-0.text-center #[b 02.]
          .col.p-3.bg-color2
            p.mb-0 Observación de la dificultad y de la probabilidad
        .row.mb-3
          .col-auto.p-3.bg-color1
            p.mb-0.text-center #[b 03.]
          .col.p-3.bg-color2
            p.mb-0 Priorización de los riesgos
        .row.mb-3
          .col-auto.p-3.bg-color1
            p.mb-0.text-center #[b 04.]
          .col.p-3.bg-color2
            p.mb-0 Elaboración de un plan
        .row.mb-3
          .col-auto.p-3.bg-color1
            p.mb-0.text-center #[b 05.]
          .col.p-3.bg-color2
            p.mb-0 Determinar medidas y estrategias
        .row.mb-3
          .col-auto.p-3.bg-color1
            p.mb-0.text-center #[b 06.]
          .col.p-3.bg-color2
            p.mb-0 Determinar recursos a utilizar
        .row.mb-3
          .col-auto.p-3.bg-color1
            p.mb-0.text-center #[b 07.]
          .col.p-3.bg-color2
            p.mb-0 Divulgarlo al equipo de trabajo y a otros agentes que corresponda
        .row
          .col-auto.p-3.bg-color1
            p.mb-0.text-center #[b 08.]
          .col.p-3.bg-color2
            p.mb-0 Ejecución del plan
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-secundario.p-4
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/img1.svg', style="width: 80px").m-auto
            .col
              p.mb-0 #[b ¡Atención!]
              p.mb-0 Es de vital importancia la vinculación, directa o indirecta, de los distintos sectores de la cadena productiva en este proceso; ello favorece llegar al consumidor final con un producto inocuo y apto para el consumo humano.
    p.mb-5 Y estos son los sectores de la cadena productiva de carne bovina que se deben tener en cuenta en las contingencias, ver figura:
    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Figura 1]. Sectores a tener en cuenta en las contingencias.
    .row.justify-content-center
      .col-lg-6
        figure
          img(src='@/assets/curso/tema1/img2.svg', style="width: 650px").m-auto
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Función principal',
        texto:
          'La principal función de las contingencias es anticipar cualquier circunstancia que, de manera positiva o negativa, afecte el proceso productivo y las actividades de la finca ganadera.',
        imagen: require('@/assets/curso/tema1/img2.png'),
      },
      {
        titulo: 'Acciones y estrategias',
        texto:
          'Dada la probabilidad de situaciones que afecten positiva o negativamente la producción, las BPG establecen acciones y estrategias para su manejo, enfocadas al mejoramiento, producción y comercializaciones del producto final.',
        imagen: require('@/assets/curso/tema1/img3.png'),
      },
      {
        titulo: 'Reglamentación',
        texto:
          'Los productos cárnicos resultantes del proceso de producción deberán ser aptos para competir en el mercado nacional e internacional; debe aplicarse la reglamentación de la Resolución 002347/2007 y el Decreto 1500/2007 de vigilancia y control de productos cárnicos.',
        imagen: require('@/assets/curso/tema1/img4.png'),
      },
    ],
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
