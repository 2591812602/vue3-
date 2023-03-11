<template>
  <div class="home-navbar">
    <div class="nav-bar">
     <div class="title">弘源旅途</div>
    </div>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp">
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
</style>