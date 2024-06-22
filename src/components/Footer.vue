<template>
    <footer>
        <p>Copyright &copy; {{ currentYear }} - CRAB SHOP</p>
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
    background: var(--background);
    color: #f5f5f5;
}
</style> 