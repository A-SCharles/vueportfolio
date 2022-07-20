<template>
    <div v-for="project in Projects" :key="project" class="card mx-auto m-3">
        <img :src="project.img" class="img-fluid">
        <div class="btn-center d-flex justify-content-center align-content-center flex-column">
            <h5 class="card-title">{{ project.name }}</h5>
            <div>
                <a :href="project.github" target="_blank" class="btn btn-outline-warning m-3">Github</a>
                <a :href="project.live" target="_blank" class="btn btn-outline-warning m-3">Live</a>
            </div>

            <!-- <div class=""> -->
            <p>{{ project.category }}</p>
            <!-- </div> -->
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        Projects() {
            return this.$store.state.projects
        }
    },
}
</script>

<style scoped>
.card {
    width: 300px;
    transition: 0.8s;
    color: white;
    position: relative;
    background-color: black;
}

.card img {
    /* object-fit: cover; */
    width: 100% !important;
    transition: 0.8s;
    background-color: black;
}

.btn-center {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: 0.8s;
    opacity: 0;
}

.card:hover>:not(.btn-center){
    filter: blur(7px);
 }

.card:hover .btn-center {
    opacity: 1;
}
</style>