<template>
    <main>
        <h1>Database setup</h1>
        <p>We support only MySQL database.</p>
        <form @submit="send">
            <input v-model="address" type="text" placeholder="Address" />
            <input v-model="user" type="text" placeholder="User" />
            <input v-model="password" type="password" placeholder="Password" />
            <input v-model="database" type="text" placeholder="Database" />
            <input v-model="port" type="text" placeholder="Port" />
            <button>Send</button>
        </form>
    </main>
</template>

<script>
export default {
    name: "SetupView",
    props: {
        setup: Boolean
    },
    data() {
        return {
            address: "",
            user: "",
            password: "",
            database: "",
            port: "3306"
        };
    },
    methods: {
        send: async function (e) {
            e.preventDefault();
            const response = await fetch("backend/setup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    address: this.address,
                    user: this.user,
                    password: this.password,
                    database: this.database,
                    port: this.port
                }),
            });
            const data = await response.json();
            console.log(data);
        }
    },
    mounted() {
        // console.log(this.setup);
        // if (this.setup) this.$router.push("/");
    }
};
</script>

<style scoped lang="scss">
main {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;

        ::placeholder {
            text-align: center;
        }

        input {
            width: 250px;
            border-radius: 15px;
            text-align: center;
            margin: 20px;
            padding: 3px;
        }

        button {
            width: 150px;
            border-radius: 15px;
            background-color: var(--background);
            color: var(--primary);
            margin: 20px;
        }

        button:hover {
            background-color: var(--hover);
            cursor: pointer;
        }
    }
}
</style>