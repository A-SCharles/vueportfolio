<template>
  <section id="resume">
    <div class="container">
      <h2 data-aos="fade-up" data-aos-duration="3000" data-aos-delay="500">  Resumè</h2>
      <div class="row">
        <!-- edu -->
        <div class="col-md-6 text-start" data-aos="fade-right" data-aos-duration="3000" data-aos-delay="500">
          <h3 class="py-3 my-3">My Education</h3>
          <div v-for="edu in Resume.education" :key="edu" class="">
            <h3>{{ edu.name }}</h3>
            <a target="_blank" :href="edu.link">{{ edu.place }}</a>
            <p class="text-muted">{{ edu.duration }}</p>
            <hr>
          </div>
        </div>
        <!-- work -->
        <div class="col-md-6 text-start" data-aos="fade-left" data-aos-duration="3000" data-aos-delay="500">
          <h3 class="py-3 my-3">My Work Experience</h3>
          <div v-for="work in Resume.experience" :key="work" class="">
            <h3>{{ work.position }}</h3>
            <a target="_blank" :href="work.link">{{ work.place }}</a>
            <p class="text-muted">{{ work.duration }}</p>
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
};
</script>

<style scoped>
#resume {
  /* min-height: 100vh; */
  scroll-margin: 100px;
}
</style>
