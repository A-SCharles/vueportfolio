<template>
  <Navbar />
  <landing />
  <AboutView />
  <Footer1 /> 
  <!-- <router-view /> -->
</template>

<script>
import Navbar from "./components/navbar.vue";
import Landing from './views/landing.vue';
import AboutView from './views/AboutView.vue';
import Footer1 from './components/footer.vue';

export default {
  components: {
    Navbar,
    Landing,
    AboutView,
    Footer1
}
}

</script>

<style scoped>
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
