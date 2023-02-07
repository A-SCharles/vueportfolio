<template>
    <div v-for="testimonial in Testimonials" :key="testimonial" class="card bg-dark p-2 m-5 mx-auto">
            <div class="row">
                <div class="col-md-3 my-auto">
                    <img :src="testimonial.img" class="img-fluid rounded-2" data-aos="zoom-in" data-aos-duration="1000">
                </div>
                <div class="col-md-8 my-auto text-start">
                    <h5 data-aos="zoom-in" data-aos-duration="1000" class="card-title text-center p-2">{{
                        testimonial.name
                    }}</h5>
                    <hr>
                    <p data-aos="zoom-in" data-aos-duration="1000" class="card-text">{{ testimonial.testimonial }}</p>
                    <p data-aos="fade-right" data-aos-duration="1000" class="text-warning text-end"><i>~ {{
                        testimonial.position
                    }}</i></p>
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
    /* background: rgba(255, 255, 255, 0.26); */
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.3px);
    -webkit-backdrop-filter: blur(5.3px);
    width: 550px;
    box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2);
    color: white;
}

</style>