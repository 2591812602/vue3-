<template>
  <div class="search-box">
    <div class="location">
      <div class="city" @click="cityClick">{{currentcity.cityName}}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png">
      </div>
    </div>
    <hr class="xian">
    <div class="section data-range" @click="showclick=!showclick">
      <div class="start">
        <div class="data">
          <span class="tip">入住</span>
        <span class="time">{{ startDate }}</span>
        </div>
      </div>
      <div class="stay" >共{{staycount}}晚</div>
      <div class="end">
        <div class="data">
          <span class="tip">离店</span>
        <span class="time">{{endDate }}</span>
        </div>
      </div>
    </div>
    <van-calendar 
    v-model:show="showclick" 
    type="range"
    @confirm="onConfirm"
    color="#ff9854"
    
    />
    <div class="item price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <div class="item keyword bottom-gray-line">
      关键字/位置/民宿名
    </div>
    <div class="section hot-suggest">
      <template v-for="(item,index) in hotSuggests" :key="index">
        <div 
        class="iten"
        :style="{color:item.tagText.color ,background:item.tagText.background.color}"
        >{{ item.tagText.text }}</div>
      </template>
    </div>
    <div class="section search-btn">
      <div class="btn" @click="searchclick">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router"
import useCityStore from "../../../stores/modules/city"
import {formatMonthDay,getDiffdate} from "@/utils/format_date"
import {ref} from "vue"
import useHomeStore from '@/stores/modules/home'
const router=useRouter()
// defineProps({
//   hotSuggests:{
//     type:Array,
//     default: ''
//   }
// })
const cityClick=()=>{
  router.push("/city")
}
const positionClick=()=>{
  navigator.geolocation.getCurrentPosition((res)=>{
    console.log('成功', res)
  },err=>{
    console.log('错误', err)
  })
}
const citystore=useCityStore()
const {currentcity} =storeToRefs(citystore)
const nowdate=new Date()
const newdate=new Date()
newdate.setDate(nowdate.getDate()+1)
const startDate=ref(formatMonthDay(nowdate))
const endDate=ref(formatMonthDay(newdate))
const staycount=ref(getDiffdate(nowdate,newdate))


const showclick=ref(false)

const onConfirm=(value)=>{
   const selectStartDate=value[0]
   const selectenddate=value[1]
   startDate.value=formatMonthDay(value[0])
   endDate.value=formatMonthDay(value[1])
   staycount.value=getDiffdate(selectStartDate,selectenddate)
   showclick.value=!showclick.value
   
   
}
const homestore=useHomeStore()
const {hotSuggests}=storeToRefs(homestore)
const searchclick=()=>{
  router.push({
    path:"/search",
    query:{
      startDate:startDate.value,
      endDate:endDate.value,
      currentcity:currentcity.value
    }
  })
}

</script>

<style lang="less" scoped>
.location{
  display:flex;
  align-items: center;
  height: 44px;
  .city{
    flex:1;
    padding-left: 10px;
  }
  .text{
   font-size: 10px;
  }
  .position{
    width: 74px;
    img{
      width: 18px;
      height: 18px;
    }
  }
}
.section{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 40px;
  .start{
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }
  .stay{
    flex: 1;
    display: flex;
    height: 50px;
    align-items: center;
    
  }
  .end{
    min-width: 30%;
    padding-left: 20px;
  }
  .data{
    display: flex;
    flex-direction: column;
    .tip{
      font-size: 12px;
      color:#999
    }
    .time{
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }


}
.xian{
  background-color: orange;
  height: 1px;
}

.price-counter{
  display: flex;
  padding-left: 40px;
  height: 50px;
  .start{
    flex: 1;
    display: flex;
    text-align: center;
    
    color: gray;
    font-size: 17px;
    
  }
  .end{
    display: flex;
    text-align: center;
    color:gray;
    padding-right: 180px;
    font-size: 17px;
    
  }
}
.keyword{
  margin-top: 40px;
  padding-left: 40px;
  font-size: 17px;
  color: gray;
  height: 40px;
  margin-bottom: 10px;
}
.bottom-gray-line{
  
  height: 1px;
}
.iten{
  padding: 10px 10px;
  border-radius: 3px;
  margin-top: 18px;
  margin-right: 7px;
}
.search-btn{
  .btn{
  background-image:var(--theme-linear-gradient);
  line-height: 38px;
  height: 38px;
  width: 342px;
  max-height: 50px;
  border-radius: 20px;
  text-align: center;
  margin-top: 40px;
  margin-left: 10px;
  font-weight: 500;
  font-size: 18px;
  color: #999;
}
  
}

</style>