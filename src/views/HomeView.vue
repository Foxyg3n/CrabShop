<template>
  <div class="servers">
    <Server v-for="server in servers" :key="server.id" :server="server" />
  </div>
</template>

<script>
import Server from '@/components/Server.vue'

export default {
  props: {
    servers: Array
  },
  name: 'HomeView',
  components: {
    Server
  }
}
</script>

<style scoped lang="scss">
.servers {
  display: flex;
  justify-content: center;
}
</style>