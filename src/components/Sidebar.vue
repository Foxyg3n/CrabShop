<template>
    <div class="sidebar">
        <div class="server-stats-container">
            <img src="@/assets/logo.png" alt="logo" class="logo" />
            <div class="server-info">
                <ServerStatus :status="status" />
                <p>{{ count }} / {{ max }}</p>
            </div>
        </div>
        <div class="payments-container">
            <h2 v-if="server.players.length">Last payments</h2>
            <h2 v-else>No payments yet</h2>
            <div class="player" v-for="player in server.players.slice(0, 5)">
                <img :src="`https://mc-heads.net/avatar/` + player.playerName" alt="{{ player.playerName }}">
                <h3>
                    {{ player.playerName }}
                </h3>
                <div class="product">
                    VIP - 30 days
                </div>
            </div>
        </div>
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
.sidebar {
    background-color: var(--background);
    color: var(--primary);
    min-height: 40vh;
    width: 400px;
    align-items: center;
    display: flex;
    flex-direction: column;

    .logo {
        width: 128px;
        height: 128px;
        margin-left: 10px;
    }

    h2 {
        padding: 20px;
    }

    p {
        margin-right: 20px;
    }

    .payments-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 30vh;
        width: 100%;
        padding: 0 20px;
    }

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

    .player {
        background-color: rgb(54, 58, 73);
        display: flex;
        justify-content: start;
        align-items: center;
        margin-bottom: 15px;
        width: 100%;
        padding: 10px 10px;

        img {
            flex: 0;
            width: 64px;
            height: 64px;
        }

        h3 {
            flex: 1;
            font-size: 16px;
            text-align: left;
            margin-left: 10px;
        }

        .product {
            flex: 1;
            text-align: right
        }
    }
}
@media only screen and (max-width: 992px) {
    .sidebar {
        width: 300px;
    }
}
</style>