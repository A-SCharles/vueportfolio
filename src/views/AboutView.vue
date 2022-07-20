<template>
  <div id="about" class="container text-white py-2" v-if="Me">
    <h1>Who Am I ?</h1>
    <div class="row text-center"> 
      <div class="col-md-5 order-first my-auto">
        <img :src="Me.logo" class="img-fluid rounded-5" alt="">
      </div>
        <div class="col-md-6 col-sm-12 my-auto text-center text-lg-start">
          <p>{{ Me.about }}</p>
        </div>
        <div class="row my-5">
          <div class="col-lg-4 col-12 text-start"><p>
            <span class="fa fa-envelope-o text-black fs-4"> </span> {{Me.email}}
          </p>
            </div>
          <div class="col-lg-4 col-12 text-start"><p>
            <span class="fa fa-user-circle-o text-black fs-4"> </span> {{Me.cell}}
          </p>
            </div>
          <div class="col-lg-4 col-12 text-start"><p>
            <span class="fa fa-map-marker text-black fs-4"> </span> {{Me.location}}
          </p>
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
#about {
  min-height: 100vh;
  scroll-margin: 100px;
}

#about img{
    height: auto;
    width: 100%;
    /* aspect-ratio: 1; */
    /* box-shadow: #e9d985 4px 1px 5px 5px; */
    /* border-radius: 35px; */
}
</style>