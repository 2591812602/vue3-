<template>
  <div class="categories">
    <template v-for="(item,index) in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl">
        <div class="text">{{ item.title }}</div>
      </div>

    </template>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import useHomeStore from "../../../stores/modules/home";

const homestore=useHomeStore()
const {categories}=storeToRefs(homestore)
</script>

<style lang="less" scoped>
.categories{
  display: flex;
  overflow-x: auto;
  height: 80px;
  .item{
    width: 70px;
    flex-shrink: 0;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    img{
    width: 32px;
    height: 32px;
  }
  }
  .text{
    font-size: 12px;
    margin-top: 5px;
    font-weight: 200;
  }
}
</style>