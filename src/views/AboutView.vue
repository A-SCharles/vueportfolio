<template>
  <div id="about" class="container py-2" v-if="Me">
    <div class="row text-center"> 
    <h1>This is an about page</h1>
      <div class="col-6">
        <p>{{ Me.about }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    Me() {
      return this.$store.state.Me
    }
  }
}
</script>

<style scoped>
#about {
  min-height: 100vh;
  scroll-margin: 100px;
}
</style>