<template>
    <div class="admin-panel">
        <SidebarAdmin @logout="logout" />
        <main>
            <RouterView :loggedAs="loggedAs" />
        </main>
    </div>
</template>

<script>
import SidebarAdmin from "@/components/admin/SidebarAdmin.vue";

export default {
    name: "AdminPanelView",
    props: {
        loggedIn: Boolean,
        loggedAs: String,
    },
    components: {
        SidebarAdmin,
    },
    watch: {
        loggedIn() {
            if (!this.loggedIn) this.$router.push("/");
        }
    },
    methods: {
        logout() {
            this.$emit("logout");
        }
    },
    async mounted() {

    }
}
</script>

<style scoped lang="scss">
.admin-panel {
    width: 100%;
    height: 100vh;
    display: flex;

    aside {
        width: 20%;
    }

    main {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}
</style>