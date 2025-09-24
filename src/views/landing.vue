<template>
  <div id="landing" class="vh-100">
    <div v-if="Me" class="container text-white">
      <div class="row d-flex justify-content-center align-content-center">
        <div class="col-md-12 order-last my-auto text-center">
          <div class="bg">
            <h1 class="display-3" data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="500">Hello, I am {{ Me.name }}</h1>
          <h3 data-aos="zoom-in" data-aos-duration="3000"><i>An SEO Specialist & Web developer</i></h3>
          <a data-aos="fade-right" data-aos-duration="3000" href="#project" class="btn btn-outline-light mx-2">View my
            work</a>
          <a data-aos="fade-left" data-aos-duration="3000" href="#contact" class="btn btn-outline-light mx-2">Contact
            Me</a>
          </div>
        </div>
        <!-- <div class="col-md-4 order-md-last order-first">
          <img class="img-fluid rounded-5" :src="Me.logo" alt="">
        </div> -->
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
  background-image: url("https://i.postimg.cc/ydBzSBRF/lubo-minar-B-gb-8fgmz8-unsplash.jpg");
  /* background-image: url("https://i.postimg.cc/Jht41Ks9/Abstract-blue-wave-on-transparent-background-PNG.png"); */
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: (50, 10);
  scroll-margin: 100px;
  overflow-x: hidden;
  
}

#landing h1 {
  font-family: 'Cardo', serif;
}

.bg {
  background-image:radial-gradient(#373b3e, transparent) ;
  padding: 5px;
  border-radius: 10px;
}

.row {
  min-height: 90vh;
}
</style>