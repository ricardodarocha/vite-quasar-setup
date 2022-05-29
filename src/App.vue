<script setup>
import HelloWorld from "./components/HelloWorld.vue";

</script>

<template>


  <div class="q-pa-md">
    
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <HelloWorld title="Google" msg></HelloWorld>
    <router-view></router-view>

    
    
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>