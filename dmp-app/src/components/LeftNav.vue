<template>
  <el-menu
    active-text-color="#2D68EB"
    background-color="#333333"
    text-color="#fff"
    :default-active="modelValue"
    router
    class="yxtnav"
  >
    <el-menu-item :index="v.path" v-for="(v) in nav" :key="v.path" v-show="!v.meta.leftHidden && v.meta.lv<=userlv" :class="v.path==modelValue?'is-active':'userlv'+userlv">
      <div class="topafter"></div>
      <img :src="v.path==modelValue?v.meta.icon_a:v.meta.icon" alt="" class="left_nav_icon">
      <span>{{v.meta.title}}</span>
      <div class="botafter"></div>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
/**
 * 左侧导航
 * @author chn 
*/
import { computed } from 'vue'
import { mainStore } from '@/store/index'

const props = withDefaults(defineProps<{
  modelValue:string,
  nav:Navitem[],
}>(),{
  nav:()=>([{path:'/',name:'-',meta:{title:'-'}}]),  //默认值的设置 须要用函数return
})
const store = mainStore()
const userlv = computed(()=>store.state.userLv)

</script>

<style scoped lang="scss">
.yxtnav{
  border-right: none;
  .el-menu-item{
    height: 60px;
    margin: 10px 0;
    font-size: 16px;
  }
  .is-active{
    position: relative;
    background-color: $bgcolor;
    border-radius: 30px 0 0 30px;
    .topafter{
      position: absolute;
      right: 0;
      top: -10px;
      width: 10px;
      height: 10px;
      background-color: $bgcolor;
      &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $color333;
        border-radius:0 0 10px 0;
      }
    }
    .botafter{
      position: absolute;
      right: 0;
      bottom: -10px;
      width: 10px;
      height: 10px;
      background-color: $bgcolor;
      &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $color333;
        border-radius:0 10px 0 0;
      }
    }
  }
  .left_nav_icon{
    width: 34px;
    height: 34px;
    margin-right: 10px;
  }
}
</style>