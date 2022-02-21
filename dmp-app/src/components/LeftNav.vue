<template>
  <el-menu
    active-text-color="#2D68EB"
    background-color="#333333"
    text-color="#fff"
    :default-active="activePath"
    router
    class="yxtnav"
  >
    <el-menu-item :index="v.path" v-for="(v) in nav" :key="v.path" v-show="!v.meta.leftHidden">
      <div class="topafter"></div>
      <el-icon><fold /></el-icon>
      <span>{{v.name}}</span>
      <div class="botafter"></div>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
//布局左侧导航
import { Fold } from '@element-plus/icons-vue'

const props = withDefaults(defineProps<{
  nav:Navitem[],
  activePath:string,
}>(),{
  nav:()=>([{path:'/',name:'-'}]),  //默认值的设置 须要用函数return
  activePath:'/'
})

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
}
</style>