<template>
  <el-menu
    active-text-color="#fff"
    background-color="#fff"
    text-color="#333333"
    :default-active="modelValue"
    router
    class="yxtnav"
  >
    <el-menu-item index="/index">
      <div class="fcs">
        <img :src="modelValue == '/index' ? nav1_a_i : nav1_i" alt="" class="left_nav_icon">
        <span class="fz16">首页</span>
      </div>
    </el-menu-item>

    <template  v-for="v in nav" :key="v.path">

      <el-sub-menu :index="v.path" v-if="v.path!='/index' && v.path!='/login' && userlv.indexOf(v.meta.lv)>-1 && userlv.some(lv=>v.meta.clv.split(',').indexOf(lv)>-1)">
      <!-- v : /users 用户/企业管理 /dmp DMP系统管理 ... -->
        <template #title>
          <div class="fcs">
            <img :src="v.meta.icon" alt="" class="left_nav_icon">
            <span class="fz16">{{v.meta.title}}</span>
          </div>
        </template>

        <template v-for="value in v.children" :key="v.path">

          <!-- value : /dmp/findb 找B端客户 ... -->
          <!-- cvalue : /dmp/findb/specificdata 个性化数据 -->
          <!-- <el-sub-menu :index="value.path" v-if="value.children" v-show="userlv.indexOf(value.meta.lv)>-1 && userlv.some(lv=>value.meta.clv.split(',').indexOf(lv)>-1)">
            <template #title>
              <span>{{value.meta.title}}</span>
            </template>
            <el-menu-item :index="cvalue.path" v-for="cvalue in value.children" :key="cvalue.path" v-show="!cvalue.meta.father && (userlv.indexOf(cvalue.meta.lv)>-1)">
              <div class="topafter"></div>
              <span>{{cvalue.meta.title}}</span>
              <div class="botafter"></div>
            </el-menu-item>
          </el-sub-menu> -->

          <el-menu-item :index="value.path" v-if="!value.meta.father && (userlv.indexOf(value.meta.lv)>-1)">
          <!-- value : /users/user 用户管理 ... -->
            <div class="fcs">
              <img :src="value.path == modelValue ? value.meta.icon_a : value.meta.icon" alt="" class="left_nav_icon">
              <span>{{value.meta.title}}</span>
            </div>
          </el-menu-item>

        </template>

      </el-sub-menu>

    </template>

  </el-menu>
</template>

<script setup lang="ts">
/**
 * 左侧导航
 * @author chn 
*/
import { mainStore } from '@/store/index'
import { computed } from 'vue'
import nav1_i from '@/assets/images/nav/nav1.png'
import nav1_a_i from '@/assets/images/nav/nav1_a.png'
const props = withDefaults(defineProps<{
  modelValue:string, // 激活的菜单
  nav:Navitem[], // 菜单数组
}>(),{
  nav:()=>([{path:'/',name:'-',meta:{title:'-'}}]),  //默认值的设置 须要用函数return
})
const store = mainStore()
const userlv = computed(() => store.state.userLv)

</script>

<style scoped lang="scss">
.yxtnav{
  border-right: none;
  .fz16{
    font-size: 16px;
  }
  .el-menu-item{
    min-width: 100%;
    border-radius: 8px;
  }
  .is-active.el-menu-item{
    background-color: $dfcolor;
  }
  .left_nav_icon{
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
}
</style>