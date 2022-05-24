<template>
  <div id="app">
    <SideNav/>
    <router-view class="component-view"/>
  </div>
</template>

<script>
    import SideNav from './components/partials/SideNav.vue'
    export default {
        name: 'App',
        components: {
            SideNav,
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

    .component-view {
        margin-left: 200px;
        margin-top: 50px;
    }
</style>
