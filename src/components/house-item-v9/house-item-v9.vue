<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemdata.image.url" alt="">
      </div>
      <div class="infos">
        <div class="summary">{{ itemdata.summaryText }}</div> 
        <div class="name">{{ itemdata.houseName }}</div> 
        <dic class="price">
          <van-rate :model-value="itemScore" size="12" gutter="0" color="#fff"/>
          <div class="new">${{ itemdata. finalPrice}}</div>
        </dic>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"


const props=defineProps({
  itemdata:{
    type:Object,
    default:()=>({})
  }
})
const itemScore=computed(()=>{
  return Number(props.itemdata.commentScore)
})

</script>

<style  lang="less" scoped>
.house-item{
  width: 50%;
  .item-inner{
    position: relative;
    margin: 5px;
    background: #fff;
    border-radius: 6px;
    overflow: hidden;

  }
  .cover{
    img{
      width: 100%;
    }
  }
  .infos{
    position: absolute;
    bottom: 0;
    padding: 8px 10px;
    color: #fff;
  }
  .summary{
    font-size: 12px;
  }
  .name{
    margin: 5px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

}
</style>