<template>
    <div v-for="testimonial in Testimonials" :key="testimonial" class="card p-1 m-5 mx-auto">
        <div class="row" data-aos="fade-right" data-aos-duration="3000" data-aos-delay="500" >
            <div class="col-md-3 my-auto">
                <img :src="testimonial.img" class="img-fluid rounded-2 mb-3" alt="...">
            </div>
            <div class="col-md-8 my-auto text-start">
                <h5 class="card-title text-center">{{ testimonial.name }}</h5>
                <hr>
                <p class="card-text">{{ testimonial.testimonial }}</p>
                <p class="text-end"><i>~ {{ testimonial.position }}</i></p>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from 'aos'
export default {
    computed: {
        Testimonials() {
            return this.$store.state.testimonials
        }
    },

      mounted() {
    AOS.init();
  },
}
</script>

<style scoped>
.card {
    width: 550px;
    box-shadow: #e9d985 5px 5px 5px ;
}
</style>