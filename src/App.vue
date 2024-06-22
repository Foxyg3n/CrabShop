<template>
    <Navbar />
    <div class="content">
        <RouterView :servers="servers" />
    </div>
    <Footer />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "App",
    components: {
        Navbar,
        Footer,
    },
    data() {
        return {
            servers: [],
        };
    },
    async created() {
        this.servers = [
            {
                name: "BlackMC",
                img: "server1.jpeg",
                ip: "blackmc.com.pl",
                port: "25565",
                version: "1.19.4",
                offers: [
                    {
                        name: "Starter Pack",
                        price: "$9.99",
                        img: "rangavip.png",
                    },
                    {
                        name: "Starter Pack",
                        price: "$9.99",
                        img: "rangasvip.png",
                    },
                    {
                        name: "Starter Pack",
                        price: "$9.99",
                        img: "rangaevip.png",
                    },
                    {
                        name: "Starter Pack",
                        price: "$9.99",
                        img: "rangauvip.png",
                    },
                    {
                        name: "Starter Pack",
                        price: "$9.99",
                        img: "ranganvip.png",
                    }
                ],
                players: [
                    {
                        uuid: "13a42b28-02b1-3129-9c1e-4453c0be131e",
                        playerName: "Sharyxxx"
                    },
                    {
                        uuid: "13a42b28-02b1-3129-9c1e-4453c0be131e",
                        playerName: "F0xyg3n"
                    },
                    {
                        uuid: "13a42b28-02b1-3129-9c1e-4453c0be131e",
                        playerName: "AtroxZen"
                    },
                    {
                        uuid: "13a42b28-02b1-3129-9c1e-4453c0be131e",
                        playerName: "Kocur"
                    },
                    {
                        uuid: "13a42b28-02b1-3129-9c1e-4453c0be131e",
                        playerName: "F0xyg3n"
                    }
                ]
            },
            {
                name: "Server 2",
                img: "server2.jpeg",
                ip: "",
                port: "",
                version: "1.8.2",
                offers: [
                    {
                        name: "Basic Package",
                        price: "$4.99",
                        img: "basic-package.jpeg",
                    },
                    {
                        name: "Premium Package",
                        price: "$14.99",
                        img: "premium-package.jpeg",
                    },
                ],
                players: []
            },
            {
                name: "Server 3",
                img: "server3.jpeg",
                ip: "",
                port: "",
                version: "1.21",
                offers: [
                    {
                        name: "Gold Package",
                        price: "$24.99",
                        img: "gold-package.jpeg",
                    },
                    {
                        name: "Diamond Package",
                        price: "$49.99",
                        img: "diamond-package.jpeg",
                    },
                ],
            },
        ];
    },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
    box-sizing: border-box;
}

:root {
    --primary: #fff;
    --background: #272932;
    --accent: #272932;
    --text: #2c3e50;
}

body {
    margin: 0;
    padding: 0;
    background: #f5f5f5;
}

main {
    border-radius: 10px;
    background-color: #f5f5f5;
    padding: 20px 50px;
    height: 100%;
}

button,
input,
optgroup,
select,
textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

#app {
    min-height: 100vh;
    font-family: "Poppins", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
}

.content {
    background-image: url('assets/background.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: space-around;
    flex: 1 0 0;
    padding: 40px;
    column-gap: 10vh;
}

@media only screen and (max-width: 1200px) {
    .content {
        column-gap: 5vh;
    }
}

@media only screen and (max-width: 992px) {
    .content {
        column-gap: 2vh;
        padding: 15px;
    }
}

@media only screen and (max-width: 768px) {
    .content {
        flex-direction: column;
        align-items: center;
        padding: 0;
    }

    main {
        padding: 0;
        margin: 20px 0;
    }

    aside {
        width: 100% !important;
        margin-top: 20px;
        margin-bottom: 20px;
    }
}
</style>
