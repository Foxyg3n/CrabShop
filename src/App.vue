<template>
  
  <router-view :servers="servers" />
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      servers: [],
      pokemon: {}
    }
  },
  async created() {
    this.servers = [
      { name: 'BlackMC', img: 'server1.jpeg', ip: 'blackmc.com.pl', port: '25565' },
      { name: 'Server 2', img: 'server2.jpeg', ip: '', port: '' },
      { name: 'Server 3', img: 'server3.jpeg', ip: '', port: '' }
    ]
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
