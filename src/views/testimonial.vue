<template>
    <section id="testimonial" class="container">
        <h2>Testimonials</h2>
        <div class="row mx-auto">
                <Testimonials />
        </div>
    </section>
</template>

<script>
import Testimonials from '@/components/testimonials.vue';
export default {
    components: { Testimonials },
}
</script>

<style>
#testimonial {
    min-height: 100vh;
}
</style>