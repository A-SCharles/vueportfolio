<template>
    <!-- contact start -->
    <section v-if="Me" id="contact" class="text-black py-5">
        <div class="container">
            <div class="row mx-auto">
                <h2 data-aos="fade-down" data-aos-duration="3000" class="mb-5 text-center">Looking For Me?</h2>
                <div class="col-lg-6 col-md-12 m-auto text-center text-lg-start">


                    <!-- Contact Form -->
                    <form data-aos="zoom-out" data-aos-duration="3000"
                        class="bg-light form-border p-3 mx-auto text-md-start" action="https://formspree.io/f/myyolgzn"
                        method="post">
                        <h3 class="text-lg-center  text-black">Contact me here</h3>
                        <label class="form-label pt-3" for="name">Name:</label>
                        <input name="name" type="text" class="form-control py-1" placeholder="Enter Your Name" required>
                        <label class="form-label pt-3" for="email">Your Email Address:</label>
                        <input name="email" type="email" class="form-control py-1"
                            placeholder="Enter Your Email Address " required>
                        <label class="form-label pt-3" for="form-message">How can I Help you?:</label>
                        <textarea name="form-message" class="form-control py-1" rows="4" placeholder="Enter a message"
                            required></textarea>
                        <button class="btn btn-outline-dark rounded-3 my-4" type="submit">Send</button>
                    </form>
                    <!-- Contact Form end -->
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

.form-border {
    border-radius: 5px;
    box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.8);
}
</style>