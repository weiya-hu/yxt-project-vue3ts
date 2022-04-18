<template>
  <div class="index_page">
    
    <el-carousel trigger="click" height="320px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img :src="banner_i" alt="" class="banner">
      </el-carousel-item>
    </el-carousel>
    

    <div class="test fcs mt20">
      <img :src="imgs1" alt="" @click="showKzPool('test1')" style="width:100px;height:100px"/>
      <img :src="imgs2" alt="" @click="showKzPool('test2')" style="width:100px;height:100px" class="ml20"/>
      <img :src="imgs3" alt="" @click="showKzPool('test3', 2)" style="width:100px;height:100px" class="ml20"/>
    </div>

  </div>
</template>

<script setup lang="ts">
import banner_i from '@/assets/images/banner.png'
import { ref } from 'vue'
import emiter from '@/utils/bus'
import { showKzPool } from '@/utils/index'

const imgs1 = ref('')
emiter.on('test1', (val:KzPool) => {
  // 发接口 do something ...
  imgs1.value = val.source_url
})
const imgs2 = ref('')
emiter.on('test2', (val:KzPool) => {
  imgs2.value = val.source_url
})
const imgs3 = ref('')
emiter.on('test3', (val:KzPool) => {
  imgs3.value = val.cover_url as string
})

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