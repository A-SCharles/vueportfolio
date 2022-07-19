<template>
    <!-- NAVIGATION -->
    <nav class="navbar navbar-expand-md navbar-dark sticky-top">
        <div class="container">
            <div class=" d-flex align-content-center">
                <a class="navbar-brand fw-bold" href="#landing">
                    Abdus-Samad Charles
                </a>
                    <img src="https://i.postimg.cc/x8w6tG9m/navLogo.png" alt="" width="45" height="45">
            </div>
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
                            <li><a class="dropdown-item" href="#skills">Skills</a></li>
                            <li><a class="dropdown-item" href="#testimonial">Testimonials</a></li>
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
nav {
    background-color: #222e50;
}

@media all and (min-width: 992px) {
    .navbar .nav-item .dropdown-menu {
        display: none;
    }

    .navbar .nav-item:hover .dropdown-menu {
        display: block;
    }

    .navbar .nav-item .dropdown-menu {
        margin-top: 0;
    }
}
</style>