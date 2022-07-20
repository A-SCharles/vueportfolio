<template>
    <footer v-if="Me" class="py-2">
        <div class="container">
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
    color: #333;
    /* background-color: #e9d985; */
}

.circle {
    margin: 5px;
}

.circle i {
    border-radius: 10px;
    padding: 5px;
    background-color: #222e50;
    font-size: 30px;
    color: white;
}

#mentions p {
    color: #333;
    font-size: 18px;
}
</style>