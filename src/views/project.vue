<template>
  <section id="project">
    <div class="container p-5">
      <h2 data-aos="zoom-out" data-aos-duration="3000">Projects</h2>
      <div class="row py-3">
        <div class="d-inline-block">
          <input
            type="radio"
            class="btn-check"
            name="options"
            autocomplete="off"
            value="All"
            id="option1"
            checked
            v-model="category"
          />
          <label
            data-aos="fade-right"
            data-aos-duration="3000"
            class="btn fs-4 btn-outline-warning m-1 px-5"
            for="option1"
            >All</label
          >

          <input
            type="radio"
            class="btn-check"
            name="options"
            value="HTML / CSS"
            id="option2"
            autocomplete="off"
            v-model="category"
          />
          <label
            data-aos="fade-up"
            data-aos-duration="3000"
            class="btn fs-4 btn-outline-warning m-1 px-5"
            for="option2"
            >HTML / CSS</label
          >

          <input
            type="radio"
            class="btn-check"
            name="options"
            value="Javascript"
            id="option3"
            autocomplete="off"
            v-model="category"
          />
          <label
            data-aos="fade-up"
            data-aos-duration="3000"
            class="btn fs-4 btn-outline-warning m-1 px-5"
            for="option3"
            >Javascript</label
          >

          <input
            type="radio"
            class="btn-check"
            name="options"
            value="Vue"
            id="option4"
            autocomplete="off"
            v-model="category"
          />
          <label
            data-aos="fade-left"
            data-aos-duration="3000"
            class="btn fs-4 btn-outline-warning m-1 px-5"
            for="option4"
            >Vue</label
          >
        </div>

        <div v-if="Projects">
        <div class="row mx-auto">
            <Projects
              v-for="project in Projects"
              :key="project"
              :project="project"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from "aos";
import Projects from "@/components/projects.vue";
export default {
  components: { Projects },
  data() {
    return {
      category: "All",
    };
  },
  computed: {
    // Projects() {
    //   return this.$store.state.projects;
    // },
    Projects() {
      return this.$store.state.projects?.filter((project) => {
        let isMatch = true;
        if (this.category !== "All" && this.category !== project.category) {
          isMatch = false;
        }
        return isMatch;
      });
    },
  },
  mounted() {
    AOS.init();
  },
  //   methods: {
  //     javascript() {
  //       let js = document.getElementById("Javascript").value;
  //       return this.$store.state.projects?.filter((product) => {
  //         let isMatch = true;

  //         if (js !== product.category) {
  //           isMatch = false;
  //         }
  //         return isMatch;
  //       });
  //     },
  //   },
};
</script>

<style scoped>
#project {
  /* min-height: 100vh; */
  scroll-margin: 10px;
  overflow-x: hidden;
}
</style>
