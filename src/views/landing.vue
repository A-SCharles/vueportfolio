<template>
  <div id="landing" class="vh-100">
    <div v-if="Me" class="container text-white">
      <div class="row d-flex justify-content-center align-content-center">
        <div class="col-md-7 order-last my-auto text-center">
          <h2 data-aos="fade-up" data-aos-duration="3000" data-aos-delay="500">Ayo, I am {{ Me.name }}</h2>
          <h3><i>An aspiring full stack developer</i></h3>
          <a href="#project" class="btn btn-outline-light mx-2">View my work</a>
          <a href="#contact" class="btn btn-outline-light mx-2">Contact Me</a>
        </div>
        <div class="col-md-4 order-md-last order-first">
          <img class="img-fluid rounded-5" :src="Me.logo" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
export default {
  mounted() {
    AOS.init();
  },
  computed: {
    Me() {
      return this.$store.state.Me
    }
  }
}
</script>

<style scoped>
#landing {
  /* background-image: url("https://i.postimg.cc/ydBzSBRF/lubo-minar-B-gb-8fgmz8-unsplash.jpg"); */
  scroll-margin: 100px;
}

.row {
  min-height: 90vh;
}

</style>