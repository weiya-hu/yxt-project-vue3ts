<template>
  <div class="details_header">
    <div class="fcs breadcrumb">
      <div>当前位置：</div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: v.path }" v-for="v in crumbs" :key="v.path">{{v.meta!.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-page-header :icon="ArrowLeft" :content="$route.meta.title" @back="$router.back()" class="dh_title"/>
  </div>
</template>

<script setup lang="ts">
/**
 * 详情顶部面包屑
 * @author chn 
*/
import { ArrowLeft } from '@element-plus/icons-vue'
import { useRoute, RouteRecordRaw } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()
const pathArr = route.path.split('/')
const path1 = '/' + pathArr[1]
const path2 = path1 + '/' + pathArr[2]
const crumbs = ref<RouteRecordRaw[]>([])
for (let i = 0; i < route.matched.length; i++) {
  const v = route.matched[i];
  if(v.path === path1){
    crumbs.value.push(v)
    const r2 = v.children.find(j => j.path === route.meta.father)
    r2 && crumbs.value.push(r2)
    continue
  }
  if(v.path === path2){
    crumbs.value.push(v)
    if(v.path === route.path){
      break
    }
    if(v.children){
      const r3 = v.children.find(j => j.path === route.meta.father)
      r3 && crumbs.value.push(r3)
    }
    continue
  }
  if(v.path === route.path){
    crumbs.value.push(v)
    break
  }
}
</script>

<style scoped lang="scss">
.details_header{
  .breadcrumb{
    font-size: 12px;
    margin-bottom: 10px;
    .el-breadcrumb{
      font-size: 12px;
    }
  }
  .dh_title{
    font-weight: 600;
    color: $dfcolor;
  }
}
</style>