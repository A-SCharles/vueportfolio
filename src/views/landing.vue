<template>
  <div id="landing" class="vh-100">
    <div v-if="Me" class="container text-white">
      <div class="row d-flex justify-content-center align-content-center">
        <div class="col-7 my-auto text-center">
          <h2>Ayo, I am {{ Me.name }}</h2>
          <h3><i>An aspiring full stack developer</i></h3>
          <button class="btn btn-outline-light mx-2">View my work</button>
          <button class="btn btn-outline-light mx-2">Contact Me</button>
        </div>
        <div class="col-4">
          <img class="img-fluid rounded-5" :src="Me.logo" alt="">
        </div>
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
#landing {
  /* background-image: url("https://i.postimg.cc/ydBzSBRF/lubo-minar-B-gb-8fgmz8-unsplash.jpg"); */
  scroll-margin: 100px;
}

.row {
  min-height: 90vh;
}

</style>