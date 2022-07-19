<template>
  <div v-if="Me" class="container text-black" id="landing">
    <div class="row d-flex justify-content-center align-content-center">
        <div class="col-7 my-auto text-center">
            <h2>Ayo, I am {{Me.name}}</h2>
        </div>
        <div class="col-4">
            <img class="img-fluid rounded-5" :src="Me.logo" alt="">
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
  scroll-margin: 100px;
}
.row {
    min-height: 90vh;
}
</style>