<template>
  <div class="city">
    <div class="top">
      
      <form action="/">
      <van-search
    v-model="searchvalue"
    show-action
    placeholder="请输入搜索关键词"
    @cancel="onCancel"
  />
       
     </form>
     <van-tabs v-model:active="tabActvie" color="#ff9854">
        <template v-for="(value,key,index) in allcities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
  </van-tabs>
    </div>
    <div class="content">
        <template v-for="(value,key,index) in allcities">
          <citygroup v-show="tabActvie===key" :groupdata="value"></citygroup>
        </template>
    </div>



  </div>
</template>

<script setup>

import {ref, computed} from 'vue'
import { useRouter } from "vue-router"
import { storeToRefs } from 'pinia';
import useCityStore  from '../../stores/modules/city'
import citygroup from '@/views/city/cpns/city-group.vue'
const router=useRouter()
const searchvalue=ref("")
const onCancel=()=>{
 router.back()
}
const tabActvie=ref()
// const allcity=ref()
// getcityall().then(res=>{
//  allcity.value=res.data
// })
const citystore=useCityStore()
citystore.fetchAllcitiesData()
const {allcities} =storeToRefs(citystore)
const currentcity=computed(()=>allcities.value[tabActvie.value])

</script>

<style lang="less" scoped>
.van-search{
  :deep(.van-field__left-icon){
    color: var(--primary-color);
  }
}
.city{

  .top{
    position: fixed;
    top: 0;


  }
  .content{
    margin-top: 98px;
    
    overflow: auto;
  }
}
</style>