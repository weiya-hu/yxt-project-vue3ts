<template>
  <div class="layout_page">
    <el-row class="layout_top">
      <el-col class="logobox">
        <img :src="logo_i" alt=""/>
      </el-col>
      <el-col class="navbox fsc">
        <TopNav :nav="topNav" :activePath="activePath" @change="changeNav"/>
        <div class="user fcs">
          <el-button color="#2D68EB" plain>完善资料</el-button>
          <div class="sline"></div>
          <div class="userbox fcs">
            <el-avatar :size="48" :src="znkf_i"></el-avatar>
            <div class="username">
              <el-dropdown>
                <div class="fcs">
                  <div>海绵宝宝</div>
                  <el-icon class="right_icon"><caret-bottom /></el-icon>
                </div>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item >
                      退出
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="layout_container">
      <el-col class="layout_nav" v-if="activePath!='/index'">
        <LeftNav :nav="leftNav" :activePath="nowPath"/>
      </el-col>
      <el-col :class="activePath=='/index'?'':'layout_content'">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import logo_i from '@/assets/images/logo.png'
import znkf_i from '@/assets/images/znkf.png'
import {reactive, ref  } from 'vue'
import LeftNav from '@/components/LeftNav.vue'
import TopNav from '@/components/TopNav.vue'
import {useRouter, useRoute} from 'vue-router'
import { CaretBottom } from '@element-plus/icons-vue'
const route = useRoute()
const router = useRouter()

const nowPath = ref(route.path)
if(nowPath.value.indexOf('specificData')>-1) nowPath.value = '/findB/specificData' //解决在详情页刷新导致左侧导航激活失效 有点蠢

let s = nowPath.value.split('/')
const activePath = ref('')
if((s.length-1)>1){
  // 有两个'/' 则是子页面 取父页面路由为顶部导航激活路由
  activePath.value = '/' + s[1]
}else{
  activePath.value = nowPath.value
}

const routers = router.getRoutes()
const leftNav:any = ref([])
const topNav:any = ref([])
const geNavs = (first:boolean = false)=>{
  //从路由获取顶部和左侧导航
  routers.forEach(v=>{
    if(v.path === activePath.value && v.children) leftNav.value = v.children
    if(first && v.name === 'Layout') topNav.value = reactive(v.children)
  })
}
geNavs(true)
const changeNav = (path:string)=>{
  //顶部导航改变时 改变左侧导航及左侧激活路由
  activePath.value = path
  geNavs()
  if(leftNav.value.length) nowPath.value = leftNav.value[0].path
}
</script>

<style lang="scss" scoped>
.layout_page {
  height: 100%;
  .logobox {
    height: 80px;
    background-color: $dfcolor;
    max-width: 10.4%;
    flex: 0 0 10.4%;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .navbox{
    max-width: 89.6%;
    flex: 0 0 89.6%;
    .user{
      padding-right: 50px;
      color:$color333;
      font-size: 14px;
      font-weight: 600;
      .sline{
        width: 1px;
        height: 32px;
        margin: 0 20px;
        background-color: $coloreee;
      }
      .username{
        margin-left: 12px;
      }
    }
  }
  .layout_container {
    height: calc(100% - 80px);
    .layout_nav {
      background-color: $color333;
      max-width: 10.4%;
      flex: 0 0 10.4%;
      padding-top: 30px;
      padding-left: 8px;
    }
    .layout_content{
      height: 100%;
      max-width: 89.6%;
      flex: 0 0 89.6%;
      padding: 30px 50px;
      background-color: $bgcolor;
      overflow-y: scroll;
    }
  }
}
</style>
