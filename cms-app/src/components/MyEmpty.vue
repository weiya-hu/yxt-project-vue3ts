<template>
  <div class="my_empty fcc fc">
    <img :src="empty_i" alt="">
    <div>暂无相关数据</div>
  </div>
</template>

<script setup lang="ts">
//空状态组件
import empty_i from '@/assets/images/empty.png'
</script>

<style scoped lang="scss">
.my_empty{
  font-size: 14px;
  color: #666666;
  img{
    width: 300px;
    height: 200px;
  }
}
</style>