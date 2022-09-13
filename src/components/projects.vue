<template>
  <!-- <div v-if="projects"> -->
  <div data-aos="zoom-in" data-aos-duration="3000" class="card mx-auto m-3">
    <img :src="project.img" class="img-fluid my-auto" />
    <div
      class="btn-center d-flex justify-content-center align-content-center flex-column"
    >
      <h5 class="card-title">{{ project.name }}</h5>
      <div>
        <a
          :href="project.github"
          target="_blank"
          class="btn btn-outline-warning m-3"
          >Github</a
          >
        <a
        :href="project.live"
        target="_blank"
        class="btn btn-outline-warning m-3"
        >Live</a
        >
      </div>
      
      <p>{{project.desc}}</p>
      <!-- <div class=""> -->
      <p>{{ project.category }}</p>
      <!-- </div> -->
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import AOS from "aos";
export default {
  props: ["project"],
  computed: {
    // projects() {
    //     return this.$store.state.projects
    // }
  },
  mounted() {
    AOS.init();
  },
};
</script>

<style scoped>
#projects {
  scroll-margin: 50px;
}

.card {
  /* width: 350px; */
  height: 100%;
  transition: 0.8s;
  color: white;
  position: relative;
  background-color: black;
  box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.8);
}

.card img {
  /* object-fit: cover; */
  width: 100% !important;
  transition: 0.8s;
  background-color: black;
}

.btn-center {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: 0.8s;
  opacity: 0;
}

.card:hover > :not(.btn-center) {
  filter: blur(7px) grayscale(100) opacity(0.4);
}

.card:hover .btn-center {
  opacity: 1;
}
</style>
