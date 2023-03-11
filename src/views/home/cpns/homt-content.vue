<template>
  <div class="content">
    <div class="content">
      <h2 class="title">热门精选</h2>
      <div class="list">
        <template v-for="(item,index) in contentdata" :key="item.data.houseId">
          <houseItemV9 v-if="item.discoveryContentType ===9" :itemdata="item.data"></houseItemV9>
          <houseItemV3 v-else-if="item.discoveryContentType ===3" :itemdata="item.data"></houseItemV3>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import useHomeStore from "../../../stores/modules/home";
import houseItemV9 from "@/components/house-item-v9/house-item-v9.vue";
import houseItemV3 from "../../../components/house-item-v3/house-item-v3.vue";
const homestore=useHomeStore()
const {contentdata}=storeToRefs(homestore)
</script>

<style lang="less" scoped>
.content{
  padding-left: 8px;
  .title{
    font-size: 22px;
    
  }
  .list{
    display: flex;
    flex-wrap: wrap;
  }
}
</style>