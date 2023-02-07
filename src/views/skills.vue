<template>
  <section id="skills">
    <div v-if="Skills">
      <div class="container pt-5">
        <h2 data-aos="fade-down" data-aos-duration="1000">My Skills</h2>

        <div class="row mx-auto">
          <div
            v-for="skill in Skills"
            :key="skill"
            data-aos="zoom-in" data-aos-duration="1000"
            class="card m-auto border-0 bg-transparent p-3"
          >
            <img :src="skill.icon" alt="" class="img-fluid"/>
            <h4 class="my-1">{{ skill.name }}</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from "aos";
export default {
  computed: {
    Skills() {
      return this.$store.state.skills;
    },
  },
  mounted() {
    AOS.init();
  },
};
</script>

<style scoped>
#skills {
  min-height: 100vh;
  scroll-margin: 100px
}

.card {
    width: 250px;
    transition: 0.3s;
}

@media screen and (max-width: 768px) {
  .card {
    width: 30%;
} 
}

@media screen and (max-width: 425px) {
  .card {
    width: 50%;
} 
}

.card img {
    /* filter: grayscale(1); */

}

.card:hover {
  box-shadow: 15px 15px 50px rgb(0 0 0 / 80%);
}

</style>
