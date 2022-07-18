<template>
    <!-- NAVIGATION -->
    <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top border-bottom border-warning border-5">
        <div class="container">
                <a class="navbar-brand fw-bold" href="#about">
                    <img src="https://i.postimg.cc/x8w6tG9m/navLogo.png" alt="" width="45" height="45"
                        class="d-inline-block align-text-top">
                    Abdus-Samad Charles
                </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link text-white" href="#landing">Home</a>

                    <!-- DROPDOWN  -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-white" href="#about" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            About Me
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                            <li><a class="dropdown-item" href="#about">About</a></li>
                            <li><a class="dropdown-item" href="#services">Services</a></li>
                            <li><a class="dropdown-item" href="#skills">Skills</a></li>
                            <li><a class="dropdown-item" href="#testimonial">Testimonials</a></li>
                            <li><a class="dropdown-item" href="#resume">Resumè</a></li>
                            <li><a class="dropdown-item" href="#project">Projects</a></li>
                        </ul>
                    </li>
                    <!-- DROPDOWN  -->
                    <a class="nav-link text-white" href="#contact">Contact</a>
                </div>
            </div>
        </div>
    </nav>
    <!-- navigation ending -->
</template>

<script>
export default {

}
</script>

<style scoped>
</style>