<template>
    <section class="main">
        <form @submit="login">
            <h1>Admin Login</h1>
            <label for="username">Username</label>
            <input v-model="username" type="text" />
            <label for="password">Password</label>
            <input v-model="password" type="password" />
            <div class="checkbox">
                <label for="logged">Stay logged in</label>
                <input type="checkbox" name="logged" value="logged" />
            </div>
            <button>Login</button>
        </form>
    </section>
</template>

<script>
export default {
    name: "AdminView",
    props: {
        loggedIn: Boolean,
    },
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        login(e) {
            e.preventDefault();
            this.$emit("login", this.username, this.password);
        }
    },
    watch: {
        loggedIn() {
            this.$router.push("/admin-panel");
        }
    },
    mounted() {
        if (this.loggedIn) {
            this.$router.push("/admin-panel");
        }
    }
}
</script>

<style scoped lang="scss">
.main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
        background: #fff;

        .checkbox {
            display: flex;
            column-gap: 5px;
        }

        input[type="text"],
        input[type="password"] {
            width: 100%;
            padding: 5px;
            margin: 5px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        button {
            font: inherit;
            background: var(--background);
            color: var(--primary);
            border: none;
            padding: 5px 15px;
            border-radius: 5px;
            margin-top: 10px;
            cursor: pointer;
        }
    }
}
</style>