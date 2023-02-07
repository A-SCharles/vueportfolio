<template>
  <section id="about" class="p-5">
    <div class="container text-white pb-5 bg-dark text-white rounded-3" v-if="Me">
      <div class="row">
        <h1 data-aos="fade-down" data-aos-duration="2000" class="col-md-12 py-5 text-center">Who Am I ?</h1>
      </div>
      <div class="row text-center">
        <div class="col-md-5 order-first">
          <img data-aos="zoom-in" data-aos-duration="2000" :src="Me.headshot" class="img-fluid rounded-5 my-auto mb-5">
        </div>
        <div class="col-md-7 col-sm-12 my-auto text-center text-lg-start"
        data-aos="fade-right" data-aos-duration="2000">
          <h3>Hi, I am <span class="border-bottom border-warning border-3">{{ Me.name }}</span></h3>
          <p class="fs-5">{{ Me.about }}</p>

        </div>
      </div>
    </div>
  </section>
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
  scroll-margin: 100px;
}

#about .container {
  box-shadow: 15px 15px 50px rgb(0 0 0 / 80%);
}

#about img {
  height: auto;
  width: 100%;
  /* aspect-ratio: 1; */
  /* box-shadow: #e9d985 4px 1px 5px 5px; */
  /* border-radius: 35px; */
}
</style>