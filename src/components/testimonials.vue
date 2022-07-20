<template>
    <div v-for="testimonial in Testimonials" :key="testimonial" class="card p-1 m-5 mx-auto">
        <div class="row">
            <div class="col-3 my-auto">
                <img :src="testimonial.img" class="img-fluid rounded-2" alt="...">
            </div>
            <div class="col-8 my-auto text-start">
                <h5 class="card-title text-center">{{ testimonial.name }}</h5>
                <hr>
                <p class="card-text">{{ testimonial.testimonial }}</p>
                <p class="text-end"><i>~ {{ testimonial.position }}</i></p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    computed: {
        Testimonials() {
            return this.$store.state.testimonials
        }
    },
}
</script>

<style scoped>
.card {
    width: 550px;
    box-shadow: #e9d985 5px 5px 5px ;
}
</style>