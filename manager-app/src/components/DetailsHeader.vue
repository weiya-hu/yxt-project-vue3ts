<template>
  <div class="details_header">
    <div class="fcs breadcrumb">
      <div>当前位置：</div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: v.path }" v-for="v in crumbs">{{v.meta.title}}</el-breadcrumb-item>
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
import { useRoute } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()
const gf_path = '/' + route.path.split('/')[1]
const crumbs = ref<any[]>([])
for (let i = 0; i < route.matched.length; i++) {
  const v = route.matched[i];
  if(v.path == gf_path){
    // crumbs.value[0] = v
    crumbs.value.push(v)
    v.children.forEach(value => {
      if(value.path == route.meta.father && value.path != '/index'){
        // crumbs.value[1] = value
        crumbs.value.push(value)
      }
      if(value.children){
        // crumbs.value[1] = value
        const f_path = gf_path + '/' + route.path.split('/')[2]
        if(f_path == value.path){
          crumbs.value.push(value)
          value.children.forEach(r =>{
            if(r.path == route.meta.father){
              crumbs.value.push(r)
            }
          })
        }
      }
    })
    continue
  }
  if(v.path == route.path){
    // crumbs.value[2] = v
    crumbs.value.push(v)
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
    font-weight: 600;
    color: $dfcolor;
  }
}
</style>