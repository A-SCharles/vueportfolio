<template>
  <section id="skills">
    <div v-if="Skills">
      <div class="container">
        <h2>My Skills</h2>

        <div class="row mx-auto">
          <div
            v-for="skill in Skills"
            :key="skill"
            class="card mx-auto border-0 bg-transparent p-2 m-2"
          >
            <img :src="skill.icon" alt="" />
            <h4 class="my-1">{{ skill.name }}</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    Skills() {
      return this.$store.state.skills;
    },
  },
};
</script>

<style scoped>
#skills {
  min-height: 100vh;
}

.card {
    width: 300px;
    transition: 0.8s;
}

.card img {
    filter: grayscale(1);
}

.card:hover {
    box-shadow: #007991 5px 5px 60px 1px;
}

.card:hover img{
    filter: brightness(1);
}

</style>
