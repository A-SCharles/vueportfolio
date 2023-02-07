<template>
    <footer v-if="Me" class="py-4 bg-dark">
        <div class="container">
            <div class="row">
                <!-- <div class="col-md-4 my-auto mx-auto">
                    <h1>{{ Me.name }}</h1>
                    <p class="row footer-links d-lg-inline-block fs-5">
                        <a href="#about" class="link-1">About</a>

                        <a href="#project">Projects</a>
                        </p>

                    <p class="col-md-6 footer-links fs-5 mx-auto">
                        <a href="#resume">Resumè</a>

                        <a href="#contact">Contact</a>
                    </p>
                </div>
                <div class="col-md-4 my-auto flex-row">
                    <div>
                        <i class="fa fa-envelope-o text-light fs-4"> </i>
                        <p>
                            <span>{{ Me.email }}</span>
                        </p>
                    </div>


                    <div>

                    </div>
                    <i class="fa fa-map-marker text-light fs-4"> </i>
                    <p>
                        <span>
                            {{ Me.location }}
                        </span>
                    </p>
                </div> -->
                <!-- <div class="col-md-4 my-auto">
                    <div class="d-inline-block rounded-5 text-end">
                        <a href="https://codepen.io/AsC_Squirtle" target="_blank">
                            <i class="fa fa-codepen mx-2"></i>
                        </a>
                        <a target="_blank" href="https://github.com/A-SCharles">
                            <i class="fa-brands fa-github mx-2"></i>
                        </a>
                        <a target="_blank" href="https://www.freecodecamp.org/ascharles">
                            <i class="fa-brands fa-free-code-camp mx-2"></i>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/abdus-samad-charles-51bba5227/">
                            <i class="fa-brands fa-linkedin mx-2"></i>
                        </a>
                    </div>
                </div> -->
                <div class="row d-flex">
                    <hr>
                        <div class="col-md-6 text-md-start">
                        <a href="https://codepen.io/AsC_Squirtle" target="_blank">
                            <i class="fa fa-codepen mx-2"></i>
                        </a>
                        <a target="_blank" href="https://github.com/A-SCharles">
                            <i class="fa-brands fa-github mx-2"></i>
                        </a>
                        <a target="_blank" href="https://www.freecodecamp.org/ascharles">
                            <i class="fa-brands fa-free-code-camp mx-2"></i>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/abdus-samad-charles-51bba5227/">
                            <i class="fa-brands fa-linkedin mx-2"></i>
                        </a>
                    </div>
                    <div class="col-md-6">
                        <p class=" text-md-end">
                            &copy;{{ Me.name }} {{ year }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            year: new Date().getFullYear()
        }
    },
    computed: {
        Me() {
            return this.$store.state.Me
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

footer {
    overflow-x: hidden !important;
    color: lightgray;
    /* background-color: #e9d985; */
}

i {
    font-size: 40px;
    color: lightgray;
}

a {
    color: lightgray;
    transition: 0.5s;
    padding: 0;
}

a:hover {
    color: #0077b5
}

.fa,
.fa-brands {
    transition: 0.5s;
    font-size: 25px;
}

.fa-codepen:hover {
    color: #34a65f;
}

.fa-free-code-camp:hover {
    color: green;
}

.fa-github:hover {
    color: #222e50;
}

.fa-linkedin:hover {
    color: #0077b5;
}

.footer-links a:before {
    content: "|";
    padding-left: 10px;
    padding-right: 10px;
    color: white;
    text-decoration: none;
}

.footer-links .link-1:before {
    content: none;
}


/* .circle {
    margin: 5px;
}

.circle i {
    border-radius: 10px;
    padding: 5px;
    background-color: #222e50;
    font-size: 30px;
    color: white;
} */

/* #mentions p {
    color: #333;
    font-size: 18px;
} */
</style>