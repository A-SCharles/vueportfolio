<template>
  <Navbar />
  <landing />
  <AboutView />
  <Skills />
  <Testimonial />
  <Project />
  <Contact />
  <Footer1 />
  <!-- <router-view /> -->
</template>

<script>
import Navbar from "./components/navbar.vue";
import Landing from './views/landing.vue';
import AboutView from './views/AboutView.vue';
import Testimonial from "./views/testimonial.vue";
import Project from "./views/project.vue";
import Contact from "./views/contact.vue";
import Footer1 from './components/footer.vue';
import Skills from "./views/skills.vue";

export default {
  components: {
    Navbar,
    Landing,
    AboutView,
    Footer1,
    Contact,
    Testimonial,
    Project,
    Skills
}
}

</script>

<style>
:root {
  --space_cadet: #222e50;
  --teal_blue: #007991;
  --flax: #e9d985;
}

body {
  overflow-x: hidden !important;
  /* background-image: linear-gradient(180deg, var(--teal_blue, var(--space_cadet, var(--flax)))) !important; */
  background-image: linear-gradient(180deg, #222e50, #007991, #e9d985) !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  /* min-height: 15vh; */
  /* padding: 30px; */
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
