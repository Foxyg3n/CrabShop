<template>
    <main>
        <h1>{{ $route.params.server }}</h1>
        <div class="offers">
            <Product v-for="offer in offers" :key="offer.name" :offer="offer" />
        </div>
    </main>
    <aside>
        <Sidebar :server="server" />
    </aside>
</template>

<script>
import Product from "@/components/Product.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
    name: "OfferView",
    components: {
        Product,
        Sidebar
    },
    props: {
        servers: Array,
    },
    data() {
        return {
            server: {},
            offers: [],
        };
    },
    created() {
        this.server = this.servers.find(server => server.name === this.$route.params.server);
        this.offers = this.server.offers;
    },
};
</script>

<style scoped lang="scss">
main {
    display: flex;
    flex-direction: column;
    flex: 4 0 0;
    flex-wrap: wrap;

    .offers {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
}

aside {
    top: 50px;
    position: sticky;
    display: flex;
    justify-content: center;
    width: 450px;
    flex: 1 0 0;
    height: fit-content;
}

@media only screen and (max-width: 992px) {
    aside {
        top: 10px;
    }
}

@media only screen and (max-width: 768px) {
    aside {
        width: 100%;

        .sidebar {
            width: 100%;
        }
    }
}
</style>