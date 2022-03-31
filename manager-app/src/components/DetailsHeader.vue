<template>
  <div class="details_header">
    <div class="fcs breadcrumb">
      <div>当前位置：</div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: v.path }" v-for="v in crumbs">{{v.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="fcs dh_title">
      <div class="fcs chover" @click="$router.back()">
        <el-icon size="20px"><arrow-left /></el-icon>
        <div>返回</div>
      </div>
      <div class="bgline"></div>
      <div class="fw600">用户信息</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()
const gf_path = '/' + route.path.split('/')[1]
const crumbs = ref<any[]>([])
for (let i = 0; i < route.matched.length; i++) {
  const v = route.matched[i];
  if(v.path == gf_path){
    crumbs.value[0] = v
    v.children.forEach(value => {
      if(value.path == route.meta.father){
        crumbs.value[1] = value
      }
    })
    continue
  }
  if(v.path == route.path){
    crumbs.value[2] = v
    continue
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
    font-size: 18px;
  }
}
</style>