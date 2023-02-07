<template>
<div id="test"></div>
  <section id="resume">
    <div class="container">
      <h2 data-aos="fade-down" data-aos-duration="1000">Resumè</h2>
      <div class="row">
        <!-- edu -->
        <div class="col-md-6 text-start">
          <h3 data-aos="fade-down" data-aos-duration="1000" class="py-3 my-3 ">My Education</h3>
          <div v-for="edu in Resume.education" :key="edu" data-aos="fade-right" data-aos-duration="1000">
            <h4>{{ edu.name }}</h4>
            <a target="_blank" :href="edu.link">{{ edu.place }}</a>
            <p class="text-white-50">{{ edu.duration }}</p>
            <hr>
          </div>
        </div>
        <!-- work -->
        <div class="col-md-6 text-start">
          <h3 data-aos="fade-down" data-aos-duration="1000" class="py-3 my-3 ">My Work Experience</h3>
          <div v-for="work in Resume.experience" :key="work" data-aos="fade-left" data-aos-duration="1000">
            <h4>{{ work.position }}</h4>
            <a target="_blank" :href="work.link">{{ work.place }}</a>
            <p class="text-white-50">{{ work.duration }}</p>
            <hr>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from 'aos'
export default {
  computed: {
    Resume() {
      return this.$store.state.Resume;
    },
  },
  mounted() {
    AOS.init();
  },
};
</script>

<style scoped>
#test {
  scroll-margin-block-start: 70px;
}

#resume {
  /* min-height: 100vh; */
  overflow-x: hidden !important;
}

#resume a {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: whitesmoke ;
  text-decoration: none;
  transition: .5s;
  /* text-decoration-color: #e9d985;  */
}

/*  */
a {
  display: inline-block;
  position: relative;
  color: whitesmoke;
}

a:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ffc107;
  transform-origin: bottom right;
  transition: transform 0.5s ease-out;
}

a:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
  /*  */
}

a:hover {
  color: lightcyan  !important;
  /* text-decoration: underline; */
}

h3 {
  font-family: 'Cardo', serif;  
  text-decoration: underline;
  text-decoration-color: #e9d985;
  font-weight: 900
}

h4 {
  font-size: 25px;
  font-family: 'Cardo', serif;
  text-decoration: underline;
  text-decoration-color: #e9d985;
}
</style>
