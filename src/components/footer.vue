<template>
    <footer v-if="Me" class="py-2">
        <div class="container">
            <div class="row">
                <div class="col-md-4 my-auto mx-auto">
                    <h1>{{ Me.name }}</h1>
                    <p class="footer-links fs-5 d-inline-block mx-auto">
					<a href="#" class="link-1">Home</a>
					
					<a href="#">Blog</a>
				
					<a href="#">Pricing</a>
				
					<a href="#">About</a>
					
					<a href="#">Faq</a>
					
					<a href="#">Contact</a>
				</p>
                </div>
                <div class="col-md-4 my-auto">
                    <p>
                        <span class="fa fa-envelope-o text-black fs-4"> </span> {{ Me.email }}
                    </p>
                    <p>
                        <span class="fa fa-user-circle-o text-black fs-4"> </span> {{ Me.cell }}
                    </p>
                    <p>
                        <span class="fa fa-map-marker text-black fs-4"> </span> {{ Me.location }}
                    </p>
                </div>
                <div class="col-md-4 my-auto">
                    <div class="d-inline-block rounded-5">
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
                </div>
                <div class="row mx-auto">
                    <p>

                    </p>
                    &copy;{{ Me.name }} {{ year }}
                </div>
            </div>
        </div>

        <!-- <div class="container">
            <div class="row">
                <div class="col-6 my-auto d-inline-block align-content-center">
                    <div class="text-lg-start">
                        <p>Cell: {{ Me.cell }}</p>
                    </div>
                    <div class="text-lg-start">
                        <p>Email: {{ Me.email }}</p>
                    </div>
                </div>

                <div class="col-6 mx-auto">
                    <div class="">
                        <div class="circle">
                            <a target="_blank" href="https://github.com/A-SCharles">
                                <i class="fa-brands fa-github"></i>
                            </a>
                        </div>
                        <div class="circle">
                            <a target="_blank" href="https://www.freecodecamp.org/ascharles">
                                <i class="fa-brands fa-free-code-camp"></i>
                            </a>
                        </div>
                        <div class="circle">
                            <a target="_blank" href="https://www.linkedin.com/in/abdus-samad-charles-51bba5227/">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="mentions">
                <p>&copy;Abdus-Samad Charles {{ year }}</p>
            </div>
        </div> -->
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
    color: #333;
    /* background-color: #e9d985; */
}

i {
    font-size: 40px;
    color: white;
}

.footer-links a:before {
  content: "|";
  padding-left: 10px;
  padding-right: 10px;
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