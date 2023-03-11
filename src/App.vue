<template>
  <div class="app">
    <router-view/>
    <tab-bar v-if="!route.meta.hidetabbar"></tab-bar>
    
    
  </div>
</template>
<script setup>
   import  TabBar from "@/components/tabbar/tab-bar.vue"
   import { useRoute } from "vue-router"
   const route=useRoute()
</script>
<style lang="less" scoped>

</style>
