<template>
  <section id="about">
    <div class="container text-white py-2" v-if="Me">
      <div class="row">
        <h1 data-aos="fade-down" data-aos-duration="5000" class="col-md-12 py-5 text-center">Who Am I ?</h1>
      </div>
      <div class="row text-center">
        <div class="col-md-5 order-first">
          <img data-aos="zoom-in" data-aos-duration="3000" :src="Me.headshot" class="img-fluid rounded-5 my-auto">
        </div>
        <div class="col-md-7 col-sm-12 my-auto text-center text-lg-start">
          <h3>Hi, I am <span class="border-bottom border-warning border-3">{{ Me.name }}</span></h3>
          <p class="fs-5">{{ Me.about }}</p>

        </div>
        <div class="row my-5">

          <div data-aos="fade-up" data-aos-duration="3000" class="col-lg-4 col-12 text-start">
            <p class="text-white-50 fs-3">Email: </p>
            <p>
              <span class="fa fa-envelope-o text-black fs-4"> </span> {{ Me.email }}
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="3000" class="col-lg-4 col-12 text-start text-lg-center">
            <p class=" text-white-50 fs-3">Cell: </p>
            <p>
              <span class="fa fa-user-circle-o text-black fs-4"> </span> {{ Me.cell }}
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="3000" class="col-lg-4 col-12 text-start">
            <p class="text-white-50 fs-3">Location: </p>
            <p>
              <span class="fa fa-map-marker text-black fs-4"> </span> {{ Me.location }}
            </p>
          </div>
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
  min-height: 100vh;
  scroll-margin: 100px;
  /* overflow-x: hidden; */
}

#about img {
  height: auto;
  width: 100%;
  /* aspect-ratio: 1; */
  /* box-shadow: #e9d985 4px 1px 5px 5px; */
  /* border-radius: 35px; */
}
</style>