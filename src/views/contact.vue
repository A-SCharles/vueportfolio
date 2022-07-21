<template>
    <!-- contact start -->
    <section v-if="Me" id="contact" class="text-black py-5">
        <div class="container">
            <div class="row">
                <h2 class="mb-5 text-center">Looking For Me?</h2>
                <div class="col-lg-7 my-auto text-center text-lg-start">

                    <span class="section-title">Contact me here</span>

                    <!-- Contact Form -->
                    <form id="contact-form" class="form-border text-md-start"
                        action="https://formspree.io/f/myyolgzn" method="post">
                        <label class="form-label pt-3" for="name">Name:</label>
                        <input id="name" name="name" type="text" class="form-control py-1" placeholder="Enter Your Name"
                            required>
                        <label class="form-label pt-3" for="email">Your Email Address:</label>
                        <input id="email" name="email" type="email" class="form-control py-1"
                            placeholder="Enter Your Email Address " required>
                        <label class="form-label pt-3" for="form-message">How can I Help you?:</label>
                        <textarea id="form-message" name="form-message" class="form-control py-1" rows="4"
                            placeholder="Enter a message" required></textarea>
                        <button id="submit-btn" class="btn btn-outline-primary rounded-3 my-4" type="submit">Send</button>
                    </form>
                    <!-- Contact Form end -->
                </div>

                <div class="my-auto col-lg-4 col-sm-6 text-center text-lg-start mx-auto">
                    <span class="mb-5 section-title">Also, find me at these places</span>
                    <div class="contact-links">

                        <ul class="list-unstyled">
                            <li class="my-5">
                                <!-- Codepen -->
                                <a id="profile-link" href="https://codepen.io/AsC_Squirtle" target="_blank">
                                    <i class="fa fa-codepen"></i>
                                    Codepen
                                </a>
                            </li>

                            <li class="my-5">
                                <!-- FCC -->
                                <a id="profile-link" href="https://www.freecodecamp.org/ASCharles" target="_blank">
                                    <i class="fa fa-free-code-camp"></i>
                                    FreeCodeCamp
                                </a>
                            </li>

                            <li class="my-5">
                                <!-- Github -->
                                <a id="profile-link" href="https://github.com/A-SCharles" target="_blank">
                                    <i class="fa fa-github-square"></i>
                                    Github
                                </a>
                            </li>
                            <li class="my-5">
                                <!-- LinkedIn -->
                                <a href="https://za.linkedin.com/in/abdus-samad-charles-51bba5227?trk=people-guest_people_search-card"
                                    target="_blank">
                                    <i class="fa fa-linkedin"></i>
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- contact end -->
</template>

<script>

export default {
    computed: {
        Me() {
            return this.$store.state.Me
        }
    },
}
</script>

<style scoped>
.clickhere {
    width: 50px;
    height: 50px;
}

#contact {
    /* min-height: 100vh; */
    /* background-color: #007991; */
    scroll-margin: 50px;
}

#contact a {
    color: #e9d985;
}

#contact ul li a {
    font-size: 1.50em;
    color: white;
    text-decoration: none;
    transition: .5s;
}
</style>