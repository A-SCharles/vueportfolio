<template>
  <section id="resume">
    <div class="container">
      <h2>Resumè</h2>
      <div class="row">
        <!-- edu -->
        <div class="col-6">
          <div v-for="edu in Resume.education" :key="edu" class="row">
          <h3>{{edu.name}}</h3>
          <a target="_blank" :href="edu.link">{{edu.place}}</a>
          <p class="text-muted">{{edu.duration}}</p>
          <hr>
          </div>
        </div>
        <!-- work -->
        <div class="col-6">
          <div v-for="work in Resume.experience" :key="work" class="row">
          <h3>{{work.position}}</h3>
          <a target="_blank" :href="work.link">{{work.place}}</a>
          <p class="text-muted">{{work.duration}}</p>
          <hr>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    Resume() {
      return this.$store.state.Resume;
    },
  },
};
</script>

<style>
#resume {
  min-height: 100vh;
  scroll-margin: 100px;
}
</style>
