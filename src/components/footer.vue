<template>
    <footer>
        <div class="container" id="container">
            <div id="contacts">
                <div id="contacts--contact">
                    <p>Email: {{ email }}</p>
                    <p>Cell: {{ cell }}</p>
                </div>
                <div id="contacts--social">
                    <div>
                        <a href="https://github.com/A-SCharles">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.freecodecamp.org/ascharles">
                            <i class="fa-brands fa-free-code-camp"></i>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/abdus-samad-charles-51bba5227/">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
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
            email: "a.charles.edu@gmail.com",
            cell: "074 269 5595",
            year : new Date().getFullYear()
        }
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

footer {
    background-color: #292354;
}

#container {
    padding-top: 20px;
    margin-top: 20px;
    width: 100vw;
    color: white;
    background-color: #292354;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#contacts {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}

#contacts--contact {
    text-align: right;
}

#contacts--social {
    width: 20%;
    display: flex;
    justify-content: space-between;
}

#contacts--social div {
    height: 30px;
    width: 30px;
    background-color: white;
    border-radius: 50%;
}

#contacts i{
font-size: 30px;
}

#mentions p {
    font-size: 18px;
}
</style>