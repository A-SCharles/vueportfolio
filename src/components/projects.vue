<template>
    <div v-for="project in Projects" :key="project" class="card mx-auto m-3">
        <img :src="project.img" class="card-img-top img-fluid">
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
}

.card img {
    /* object-fit: cover; */
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

.card:hover {
    /* background-image: linear-gradient(#333, black); */
    background-color: black;
    z-index: 1;
    box-shadow: black 5px 5px 10px 1px;
}

.card:hover img {
    filter: blur(7px);
    /* filter: ; */
}

.card:hover .btn-center {
    /* transform: translateX(50%); */
    /* transition: transform 0.5s, opacity 0.9s; */
    opacity: 1;
}
</style>