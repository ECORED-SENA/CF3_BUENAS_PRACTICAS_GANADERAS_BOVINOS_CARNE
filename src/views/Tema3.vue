<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Trazabilidad
    .row.justify-content-center.mb-5
      .col-lg-5
        .dual-txt-deco
          p(style="position: relative; z-index: 1;") Consiste en todos aquellos procedimientos que favorecen conocer las condiciones del proceso de producción de la finca ganadera hasta la fase final del producto para el consumo humano; procedimientos sistemáticos que se llevan a cabo durante cada una de sus etapas de producción, transformación y comercialización.
        .row.align-items-center.p-3.bg-color5
          .col-auto
            figure
              img(src='@/assets/curso/tema3/img1.svg', style="width: 70px").m-auto
          .col
            p.mb-0 Mediante la trazabilidad es posible, incluso, la identificación de un animal, de acuerdo con una base de datos que suministra la información correspondiente, desde su nacimiento hasta su sacrificio y de sus subproductos a lo largo de la cadena productiva.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema3/img1.png', style="width: 450px").m-auto
    p.mb-5 Visualice con atención el siguiente video y profundice en los aspectos generales y claves de la trazabilidad en el marco de las BPG para bovinos de carne:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 Ahora, en la siguiente tabla identifique los tipos de trazabilidad aplicables a los procesos de BPG y analice los elementos que los detallan:
    .row.justify-content-center
      .col-lg-10
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th(colspan="3")
                  p.mb-0 #[b Tabla 1.] Trazabilidad: tipos
            tbody
              tr
                td(style="background-color: #9CE9E3") #[b Trazabilidad hacia atrás]
                td(style="background-color: #FEE793") #[b Trazabilidad interna]
                td(style="background-color: #C8E5BE") #[b Trazabilidad hacia delante]
              tr
                td(style="background-color: #DFF6F4") De quién recibe el producto.
                td(style="background-color: #FFF4CE") Cuándo dividió, mezcló o cambió el producto con otro.
                td(style="background-color: #E5F3E1") A qué cliente se le entregó el producto.
              tr
                td(style="background-color: #CDF8F5") Qué producto se recibió.
                td(style="background-color: #FFF0B9") Qué se creó con el producto.
                td(style="background-color: #DDEFD7") A qué cliente se le vendió el producto.
              tr
                td(style="background-color: #DFF6F4") Cuándo se recibió el producto.
                td(style="background-color: #FFF4CE") A partir de qué producto se creó el otro producto.
                td(style="background-color: #E5F3E1") Cuándo se le vendió el producto final al cliente.
              tr
                td(style="background-color: #CDF8F5") Para qué es el producto.
                td(style="background-color: #FFF0B9") Cuál es el producto final.
                td(style="background-color: #DDEFD7")

</template>

<script>
export default {
  name: 'Tema3',
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
