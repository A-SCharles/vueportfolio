<template>
    <section id="project">
        <h1>I am project page</h1>
        <div class="container">
            <div class="row">
                <div class="d-inline-block">
                    <button class="btn btn-outline-warning m-1 px-5">All</button>
                    <button class="btn btn-outline-warning m-1 px-5">HTML / CSS</button>
                    <button class="btn btn-outline-warning m-1 px-5">Javascript</button>
                    <button class="btn btn-outline-warning m-1 px-5">Vue</button>
                </div>
                <div class="row mx-auto">
                    <Projects />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Projects from '@/components/projects.vue';
export default {
    components: { Projects }
,
}
</script>

<style scoped>
#project {
    min-height: 100vh;
    scroll-margin: 10px;
}
</style>