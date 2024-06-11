<template>
    <div class="sidebar">
        <div class="server-stats-container">
            <img src="@/assets/logo.png" alt="logo" class="logo" />
            <div class="server-info">
                <ServerStatus :status="status" />
                <p>{{ count }} / {{ max }}</p>
            </div>
        </div>
        <h2>Last payments</h2>
        <h3 v-for="player in server.players">
            {{ player.playerName }}
        </h3>
    </div>
</template>

<script>
import ServerStatus from './ServerStatus.vue';

export default {
    name: 'Sidebar',
    props: {
        server: Object
    },
    components: {
        ServerStatus
    },
    data() {
        return {
            count: 0,
            max: 100,
            status: false
        };
    },
}
</script>

<style scoped lang="scss">
.server-stats-container {
    background-color: rgb(29, 30, 34);
    width: 100%;
    height: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .server-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100px;
    }
}

.sidebar {
    background-color: var(--background);
    color: #fff;
    height: 50vh;
    width: 100%;

    h2 {
        padding: 20px;
    }

    img {
        width: 128px;
        height: 128px;
        margin-left: 10px;
    }

    p {
        margin-right: 20px;
    }
}
</style>