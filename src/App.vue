<template>
  <Navbar />
  <landing /> 
  <AboutView /> 
  <Skills />
  <Testimonial />
  <Project />
  <Resume /> 
  <Contact />
  <Footer1 />
  <!-- <router-view /> -->
</template>

<script>
import Navbar from "./components/navbar.vue";
import Landing from "./views/landing.vue";
import AboutView from "./views/AboutView.vue";
import Testimonial from "./views/testimonial.vue";
import Project from "./views/project.vue";
import Skills from "./views/skills.vue";
import Resume from "./views/resume.vue";
import Contact from "./views/contact.vue";
import Footer1 from "./components/footer.vue";

export default {
  components: {
    Navbar,
    Landing,
    AboutView,
    Testimonial,
    Project,
    Skills,
    Resume,
    Contact,
    Footer1,
  },
};
</script>

<style>
:root {
  --space_cadet: #222e50;
  --teal_blue: #007991;
  --flax: #e9d985;
}

*{ 
  margin: 0;
  padding: 0;
}

body {
  /* background-image: linear-gradient(180deg, var(--teal_blue, var(--space_cadet, var(--flax)))) !important; */
  background-image: linear-gradient(
    180deg,
    #222e50,
    #007991,
    #e9d985
  ) !important;
    overflow-x: hidden !important;
    /* overflow-y: auto !important; */
}

h2,
h3,
h4 {
  color: white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
