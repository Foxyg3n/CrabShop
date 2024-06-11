<template>
    <div class="server">
        <div :style="{ backgroundImage: imgCssPath(server.img)}" class="image"></div>
        <h2>{{ server.name }}</h2>
        <ServerStatus :status="status" />
        <p>{{ count }} / {{ max }}</p>
    </div>
</template>

<script>
import ServerStatus from "@/components/ServerStatus.vue"

export default {
    name: 'Server',
    props: {
        server: Object
    },
    components:  {
        ServerStatus
    },
    data() {
        return {
            count: 0,
            max: 0,
            status: false
        }
    },
    methods: {
        imgCssPath(image) {
            return "url(" + require('@/assets/' + image + '') + ")";
        }
    },
    created() {
        this.count = Math.floor(Math.random() * 100);
        this.max = 100;
        this.status = Math.random() < 0.5;
    }
}
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

    .image {
        width: 360px;
        height: 220px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
}
</style>