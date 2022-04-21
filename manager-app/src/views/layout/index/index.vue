<template>
  <div class="index_page">
    
    <el-carousel trigger="click" height="320px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img :src="banner_i" alt="" class="banner">
      </el-carousel-item>
    </el-carousel>
    
  </div>
</template>

<script setup lang="ts">
import banner_i from '@/assets/images/banner.png'

</script>

<style scoped lang="scss">
.index_page{
  height: 100%;
  width: 100%;
  background-color: #F7F8FA;
  box-sizing: border-box;
  
  .banner{
    width: 100%;
    height: 320px;
  }
}
</style>