<template>
    <h1>Welcome {{ loggedAs }} to Admin panel!</h1>
</template>

<script>
export default {
    name: "PanelMainView",
    props: {
        loggedAs: String,
    }
}
</script>