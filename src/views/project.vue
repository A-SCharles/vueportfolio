<template>
    <section id="project">
        <div class="container p-5">
            <h2 data-aos="zoom-out" data-aos-duration="3000">Projects</h2>
            <div class="row py-3">
                <div class="d-inline-block">
                    <button data-aos="fade-right" data-aos-duration="3000" class="btn fs-4 btn-outline-warning m-1 px-5">All</button>
                    <button data-aos="fade-up" data-aos-duration="3000" class="btn fs-4 btn-outline-warning m-1 px-5">HTML / CSS</button>
                    <button data-aos="fade-up" data-aos-duration="3000" class="btn fs-4 btn-outline-warning m-1 px-5">Javascript</button>
                    <button data-aos="fade-left" data-aos-duration="3000" class="btn fs-4 btn-outline-warning m-1 px-5">Vue</button>
                </div>
                <div class="row mx-auto">
                    <Projects />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AOS from 'aos'
import Projects from '@/components/projects.vue';
export default {
    components: { Projects },
    mounted() {
        AOS.init();
    },
}
</script>

<style scoped>
#project {
    /* min-height: 100vh; */
    scroll-margin: 10px;
}
</style>