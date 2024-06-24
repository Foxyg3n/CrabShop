<template>
    <div class="navbar">
        <img src="@/assets/logo.png" alt="logo" class="logo" />
        <div class="nav-links">
            <router-link to="/" class="nav-link">Servers</router-link>
            <router-link to="/tos" class="nav-link">Terms of service</router-link>
            <button v-if="loggedIn" @click="logout">Logout</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    props: {
        loggedIn: Boolean
    },
    methods: {
        logout() {
            fetch("backend/logout", { method: "POST" });
            this.$emit("logout");
        }
    }
};
</script>

<style scoped lang="scss">
.navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--background);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);

    .logo {
        width: 100px;
        margin: 10px;
    }

    .nav-links {
        display: flex;
        column-gap: 15px;
        margin-right: 20px;

        .nav-link {
            text-decoration: none;
            font-size: 18px;
            color: var(--primary);
            display: block;
            position: relative;
            padding: 0.2em 0;
        }

        .nav-link::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 0.1em;
            background-color: rgb(255, 255, 255);
            opacity: 0;
            transition: opacity 300ms, transform 300ms;
        }

        .nav-link:hover::after,
        .nav-link:focus::after {
            opacity: 1;
            transform: translate3d(0, 0.2em, 0);
        }
    }
}
</style>
