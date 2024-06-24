<template>
    <section class="main">
        <div v-if="loggedIn">
            <h1>Admin Panel</h1>
            <button @click="logout">Logout</button>
        </div>
        <div v-else>
            <h1>Admin Login</h1>
            <form @submit="login">
                <label for="username">Username</label>
                <input v-model="username" type="text" placeholder="Jacek" />
                <label for="password">Password</label>
                <input v-model="password" type="password" placeholder="Placek" />
                <div class="checkbox">
                    <label for="logged">Stay logged in</label>
                    <input type="checkbox" name="logged" value="logged" />
                </div>
                <button>Login</button>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    name: "AdminView",
    data() {
        return {
            loggedIn: false,
            username: "",
            password: "",
        };
    },
    methods: {
        login(e) {
            e.preventDefault();
            fetch("backend/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: this.username,
                    password: this.password,
                }),
            }).then((response) => {
                if (response.ok) {
                    this.$emit("login");
                    this.$router.push("/");
                }
            }).catch((error) => {
                console.error(error);
            });
        },
        logout() {
            this.loggedIn = false;
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