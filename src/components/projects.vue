<template>
  <!-- <div v-if="projects"> -->
  <div data-aos="zoom-in" data-aos-duration="1000" class="card mx-auto my-5">
    <img :src="project.img" class="img-fluid my-auto" />
    <div class="btn-center d-flex justify-content-center align-content-center flex-column">
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-outline-warning w-50 mx-auto" data-bs-toggle="modal"
        :data-bs-target="'#projectModal' + project.id">
        View Project Details
      </button>

    </div>
  </div>
  <!-- </div> -->
  <ProjectModal :project="project" />
</template>

<script>
import AOS from "aos";
import ProjectModal from "./projectModal.vue";
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
  components: { ProjectModal }
};
</script>

<style scoped>
#projects {
  scroll-margin: 50px;
}

.card {
  width: 350px;
  height: 100%;
  transition: 0.8s;
  color: white;
  position: relative;
  background-color: black;
  box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.8);
}

.card img {
  object-fit: cover;
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

.card:hover> :not(.btn-center) {
  filter: blur(7px) grayscale(100) opacity(0.4);
}

.card:hover .btn-center {
  opacity: 1;
}
</style>
