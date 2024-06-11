<template>
    <footer>
        <p>Copyright &copy; {{ currentYear }}</p>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            currentYear: new Date().getFullYear()
        }
    }
}
</script>

<style scoped lang="scss">
footer {
    flex-shrink: 0;
}
</style>