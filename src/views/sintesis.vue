<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 Se invita a hacer un estudio consciente del esquema que se muestra a continuación. Procure hacer un refuerzo de cada concepto, definición y de la estructura del mismo. 
    figure
      img(src='@/assets/curso/sintesis.svg', style="width: 850px").m-auto
    
  .row.justify-content-center 
    .col-auto
      a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-pdf.svg")
        .anexo__texto
          p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
