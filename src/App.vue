<template>
  <div id="app">
    <el-button @click="$store.commit('OUT_LOGIN')">退出</el-button>
    <router-link to="/adminLog">跳</router-link>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
