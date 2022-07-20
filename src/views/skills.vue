<template>
    <section id="skills">
        <div v-if="Me">
            <div class="container">
                <h2>My Skills</h2>

                <div class="row">
                    <div class="col-md-6">
                        <h1>{{Me.name}}</h1>
                    </div>
                    <div class="col-md-6">

                    </div>
                </div>
            </div>
        </div>
    </section>
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

<style>
#skills {
    min-height: 100vh;
}
</style>