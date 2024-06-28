<template>
    <aside>
        <ul>
            <li>
                <p>Server</p>
                <ol>
                    <li>Server 1</li>
                    <li>Server 2</li>
                    <li>Server 3</li>
                </ol>
            </li>
            <li>Database</li>
        </ul>
        <button @click="logout">Logout</button>
    </aside>
</template>

<script>
export default {
    name: "SidebarAdmin",
    methods: {
        logout() {
            this.$emit("logout");
        }
    }
};
</script>

<style scoped lang="scss">
aside {
    height: 100%;
    background: var(--primary);
}

ul {
    padding: 0;

    &>li {
        cursor: pointer;
        list-style-type: none;
        padding: 20px;
        font-size: 20px;
        transition: background 0.2s, color 0.2s;

        &:hover {
            background: var(--background);
            color: var(--primary);
        }

        &:hover ol {
            height: auto;
        }
    }

    ol {
        list-style-type: none;
        margin: 0;
        padding: 0 !important;
        overflow: hidden;
        height: 0;
        transition: height 0.2s;
        padding: 20px;

        li {
            font-size: 16px;
        }
    }
}
</style>