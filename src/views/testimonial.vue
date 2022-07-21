<template>
    <section id="testimonial" class="container">
        <h2 data-aos="fade-up" data-aos-duration="3000" data-aos-delay="500">Testimonials</h2>
        <div class="row mx-auto ">
                <Testimonials />
        </div>
    </section>
</template>

<script>
import Testimonials from '@/components/testimonials.vue';
import AOS from 'aos'
export default {
    components: { Testimonials },
 
}
</script>

<style>
#testimonial {
    min-height: 100vh;
}
</style>