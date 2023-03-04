<template>
  <div class="tar-bar">
    
      <!-- <template v-for="(item,index) in tabbardata">
        <div 
        class="tab-bar-item" 
        :class="{active:currentIndex===index}"
        @click="itemclick(index,item)"
        >
        <img v-if="currentIndex!==index" :src="getAssetUrl(item.image)" alt="">
        <img v-else :src="getAssetUrl(item.imageActive)" alt="">
        <span class="text">{{ item.text }}</span>
        </div>
      </template> -->
      <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item,index) in tabbardata">
        <van-tabbar-item :to="item.path" >
        <span>{{ item.text }}</span>
        <template #icon>
          <img v-if="currentIndex!==index" :src="getAssetUrl(item.image)" alt="">
        <img v-else :src="getAssetUrl(item.imageActive)" alt="">
        </template>
        </van-tabbar-item>
     
      </template>
      </van-tabbar>

    
  </div>
</template>

<script setup>

import tabbardata from '@/assets/data/data.js'
import {getAssetUrl} from '@/utils/get_assets_img.js'
import {ref} from 'vue'

const currentIndex=ref(0)


</script>

<style lang="less" scoped>
.van-tabbar{
  :deep(.van-tabbar-item__icon){
    font-size: 50px;
  }
  img{
    height: 30px;
  }
}
</style>