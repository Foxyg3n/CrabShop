<template>
    <router-link :class="animate" :to="'offers/' + server.name" class="server">
        <div :style="{ backgroundImage: assetsUrl(server.img) }" class="image"></div>
        <h2>{{ server.name }}</h2>
        <p>Version: {{ server.version }}</p>
        <div class="server-info">
            <ServerStatus :status="status" />
            <p>{{ count }} / {{ max }}</p>
        </div>
    </router-link>
</template>

<script>
import ServerStatus from "@/components/ServerStatus.vue";

export default {
    name: "Server",
    props: {
        server: Object
    },
    components: {
        ServerStatus,
    },
    data() {
        return {
            count: 0,
            max: 0,
            status: false,
            animate: ""
        };
    },
    methods: {
        assetsUrl(image) {
            return "url(" + require("@/assets/" + image + "") + ")";
        },
    },
    created() {
        this.animate = "animation";
        this.count = Math.floor(Math.random() * 100);
        this.max = 100;
        this.status = Math.random() < 0.5;
    },
};
</script>

<style scoped lang="scss">
.server {
    width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background: #f5f5f5;
    overflow: hidden;

    h2 {
        font-size: 28px;
        margin: 0;
        margin-top: 10px;
    }

    &>p {
        margin-top: 0;
    }

    .image {
        width: 360px;
        height: 220px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .server-info {
        display: flex;
        align-items: center;
        column-gap: 12px;
    }
}

.animation {
    animation: slideIn 0.7s ease-in-out;
}

@keyframes slideIn {
    0% {
        transform: translateY(15%);
        opacity: 0;
    }

    100% {
        transform: translateX(0%);
        opacity: 1;
    }
}

@media screen and (max-width: 768px) {
    .server {
        width: 300px;
    }
}
</style>
