<template>
<div class="city-group">
<van-index-bar sticky="false" :index-list="indexlist">
  <div class="list">
    <template v-for="(city,index) in groupdata.hotCities">
    <div class="city" @click="cityclick(city)">{{ city.cityName }}</div>
  </template>
  </div>
  <template v-for="(item ,index) in groupdata.cities" :key="index">
    <van-index-anchor :index="item.group"/>
            <template v-for="(iten,indey) in item.cities" :key="indey">
              <van-cell :title="iten.cityName"  @click="cityclick(iten)"/>
            </template>
  </template>
</van-index-bar>

    
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from '../../../stores/modules/city';
const props=defineProps({
  groupdata:{
    type:Object,
    default:()=>({})
  }
})
const indexlist=computed(()=>{
   const list= props.groupdata.cities.map(item=>item.group)
   list.unshift("*")
   return list
})
const router=useRouter()
const citystore=useCityStore()
const cityclick=(city)=>{

 router.back()
 citystore.currentcity=city
}
</script>

<style lang="less" scoped>
.list{
  display:flex;
  flex-wrap: wrap;
  justify-content:space-around ;
  padding: 10px;
  padding-right: 25px;
  .city{
    width: 70px;
    height: 28px;
    border-radius: 15px;
    font-size: 12px;
    text-align: center;
    background-color: #fff4ec;
    line-height: 28px;
  }
}
</style>