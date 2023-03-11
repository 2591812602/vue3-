<template>
  <div class="home">
    <navbar></navbar>
    <search ></search>
    <categoriy></categoriy>
    <div class="search-bar" v-if="isshow">sousuo111</div>
    <content></content>

    
  </div>
</template>

<script setup>
import { ref,watch } from 'vue';
import search from '@/views/home/cpns/home-search-box.vue'
import navbar from '@/views/home/cpns/home-nav-bar.vue'
import categoriy from '@/views/home/cpns/home-categories.vue'
import content from '@/views/home/cpns/homt-content.vue'
//1、热门建议
import HYRequest from  '@/services/request/index'

import useHomeStore from '@/stores/modules/home'
import { storeToRefs } from 'pinia';
import useScroll from'@/hooks/useScoll'
// const hotSuggests=ref([])
// HYRequest.get({
//   url:"/home/hotSuggests"
// }).then(res=>{
//   hotSuggests.value=res.data
// })
// const categories=ref([])
// HYRequest.get({
//   url:"/home/categories"
// }).then(res=>{
//   categories.value=res.data
// })
//搜索框显示控制
const isshow=ref(false)
const{scrollTop}=useScroll()
const homestore=useHomeStore()
const {currentpage}=storeToRefs(homestore)
homestore.fetchHotsuggest()
homestore.fetchHomecategoriesDate()

 homestore.fetchContentDate(currentpage)

useScroll(()=>{
  homestore.fetchContentDate()
})
watch(scrollTop,(newtop)=>{
  isshow.value = newtop > 100
})
</script>

<style lang="less" scoped>
.home{
  padding-bottom: 50px;
}

</style>
