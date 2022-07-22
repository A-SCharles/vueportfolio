<template>
    <div v-for="testimonial in Testimonials" :key="testimonial" class="card p-2 m-5 mx-auto">
        <div class="row">
            <div class="col-md-3 my-auto">
                <img :src="testimonial.img" class="img-fluid rounded-2" data-aos="zoom-in" data-aos-duration="3000">
            </div>
            <div class="col-md-8 my-auto text-start">
                <h5 data-aos="zoom-in" data-aos-duration="2000" class="card-title text-center">{{ testimonial.name }}</h5>
                <hr>
                <p data-aos="zoom-in" data-aos-duration="2000" class="card-text">{{ testimonial.testimonial }}</p>
                <p data-aos="fade-right" data-aos-duration="3000" class="text-end"><i>~ {{ testimonial.position }}</i></p>
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
    background-color: transparent;
    width: 550px;
    /* box-shadow: #e9d985 5px 5px 5px ; */
    /* box-shadow: #ffffff80 5px 5px 5px ; */
     box-shadow: 15px 15px 50px rgba(0,0,0,0.2);
     color: white;
}
</style>