<template>
  <el-menu
    active-text-color="#2D68EB"
    background-color="#333333"
    text-color="#fff"
    :default-active="modelValue"
    router
    class="yxtnav"
  >
    <el-menu-item index="/index">
      <div class="topafter"></div>
      <span>首页</span>
      <div class="botafter"></div>
    </el-menu-item>
    <el-sub-menu :index="v.path" v-for="v in nav" :key="v.path" v-show="v.path!='/index' && userlv.some(lv=>v.meta.lv.indexOf(lv)>-1)">
      <template #title>
        <span>{{v.meta.title}}</span>
      </template>
      <template v-for="value in v.children" :key="v.path">
        <el-menu-item :index="value.path" v-if="true" v-show="!value.meta.leftHidden && (userlv.indexOf(value.meta.lv)>-1)">
          <div class="topafter"></div>
          <span>{{value.meta.title}}</span>
          <div class="botafter"></div>
        </el-menu-item>
      </template>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
/**
 * 左侧导航
 * @author chn 
*/
const props = withDefaults(defineProps<{
  modelValue:string, // 激活的菜单
  nav:Navitem[], // 菜单数组
}>(),{
  nav:()=>([{path:'/',name:'-',meta:{title:'-'}}]),  //默认值的设置 须要用函数return
})

const userlv = ['a','a1','a2','a3','a4','b','b1','b2','b3','c','c1','d','d1','e','e1']

</script>

<style scoped lang="scss">
.yxtnav{
  border-right: none;
  .is-active{
    position: relative;
    background-color: $bgcolor;
  }
  .el-menu-item{
    min-width: 100%;
  }
  .is-active.el-menu-item{
    position: relative;
    background-color: $bgcolor;
    border-radius: 30px 0 0 30px;
    z-index: 1;
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