<template>
  <div class="home">
    <div class="nav-bar">
     <div class="title">弘源旅途</div>
    </div>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp">
    </div>
    <div class="location">
      <div class="city">广州</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png">
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.home{
  .nav-bar{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    .title{
      color: var(--primary-color);
      font-size: 20px;
      font-weight: 600;
    }
  }
  
}
.banner{
    .img{
      width: 100%;

    }
  }
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
</style>
