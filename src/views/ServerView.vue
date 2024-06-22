<template>
    <main>
        <h1>Select a server</h1>
        <div class="servers">
            <Server v-for="server in servers" :key="server.name" :server="server" />
        </div>
    </main>
</template>

<script>
import Server from "@/components/Server.vue";

export default {
    props: {
        servers: Array,
    },
    name: "ServerView",
    components: {
        Server
    },
};
</script>

<style scoped lang="scss">
.servers {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 30px;
}
</style>
