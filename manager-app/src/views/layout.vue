<template>
  <div class="layout_page">
    <el-row class="layout_top">
      <el-col class="logobox">
        <img :src="logo_i" alt=""/>
      </el-col>
      <el-col class="navbox fsc">
        <div class="nav_title">管理后台</div>
        <div class="fcs">
          <el-button type="primary" @click="showLib" class="mr20">资源库</el-button>
          <el-link type="primary" target="_blank" :href="'//' + urlInfo.domain_index">官网</el-link>
          <div class="sline"></div>
          <div class="userbox fcs" v-if="userInfo.id">
            <el-avatar :size="48" :src="userInfo.head||df_avatar_i"></el-avatar>
            <div class="username">
              <el-dropdown>
                <div class="fcs">
                  <div class="els" style="max-width:70px;line-height: 1.1;">{{userInfo.name}}</div>
                  <el-icon class="right_icon"><caret-bottom /></el-icon>
                </div>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item @click="loginout">退出</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="layout_container">
      <el-col class="layout_nav">
        <LeftNav v-model="nowPath" :nav="leftNav"/>
      </el-col>
      <el-col class="layout_content">
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-col>
    </el-row>
    <ResourcePool/>
  </div>
</template>

<script setup lang="ts">
import logo_i from '@/assets/images/logo.png'
import df_avatar_i from '@/assets/images/dfavatar.png'
import { ref, computed } from 'vue'
import LeftNav from '@/components/LeftNav.vue'
import {useRouter, useRoute,onBeforeRouteUpdate} from 'vue-router'
import { CaretBottom } from '@element-plus/icons-vue'
import { mainStore } from '@/store/index'
import {loginOut_api} from '@/api/login'
import { routerGuard } from '@/router'
import { errMsg } from '@/utils/index'
import ResourcePool from '@/components/ResourcePool.vue'
import emiter from '@/utils/bus'

const store = mainStore()

store.setTypeList()
store.setAddressList()

//获取跳转地址
const urlInfo = ref<any>({})
store.getYxtUrl().then((url:any)=>{
  urlInfo.value = url
})

// 获取用户信息及权限
store.setUserinfo().then((res:boolean) => {
  store.setUserLv().then((userLv:(number | string)[])=>{
    routerGuard(userLv)
  }).catch((err)=>{
    routerGuard([])
    router.replace('/login')
    errMsg('获取用户权限失败，请重新登录或联系管理员')
  })
}).catch((error: boolean) => {
  routerGuard([])
  router.replace('/login')
  errMsg('获取用户信息失败，请重新登录或联系管理员')
})

const route = useRoute()
const router = useRouter()

const routers = router.getRoutes()
const leftNav = ref<any[]>([])
const nowPath = ref('')
const getPath = (path:string)=>{
  nowPath.value = path
}
getPath((route.meta.leftHidden && route.meta.father) ? route.meta.father as string:route.path)
const getNavs = ()=>{
  //从路由获取左侧导航
  routers.forEach(v=>{
    if(v.name == 'Layout') leftNav.value = v.children
  })
}
getNavs()

onBeforeRouteUpdate((to,from,next)=>{
  getPath((to.meta.leftHidden && to.meta.father) ? to.meta.father as string:to.path)
  if(from.meta.keepAlive && to.meta.father == from.path){
    // 从列表进入详情 缓存列表
    store.setKeepList([from.name as string])
  }else if(to.meta.keepAlive && from.meta.father == to.path){
    // 从详情返回上一级 什么都不做
  }else{
    // 兄弟列表切换 或者 详情进入非父级列表
    store.setKeepList([])
  }
  next()
})

const userInfo = computed(()=>store.state.userInfo)

const loginout = ()=>{
  loginOut_api().then((res:res)=>{
    if(res.status == 1){
      router.replace('/login')
    }
  })
}

const showLib = ()=>{
  emiter.emit('poolShow', '')
}

</script>

<style lang="scss" scoped>
.layout_page {
  height: 100%;
  .logobox {
    height: 80px;
    background-color: $dfcolor;
    max-width: 200px;
    flex: 0 0 200px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .navbox{
    flex:1;
    box-shadow: 0px 0px 2px 0px rgb(231, 231, 231);
    z-index: 30;
    padding: 0 50px;
    .nav_title{
      font-size: 20px;
    }
    .sline{
      width: 1px;
      height: 32px;
      margin: 0 20px;
      background-color: $coloreee;
    }
  }
  .layout_container {
    height: calc(100% - 80px);
    .layout_nav {
      background-color: $color333;
      max-width: 200px;
      flex: 0 0 200px;
      padding-top: 30px;
      padding-left: 8px;
    }
    .layout_content{
      height: 100%;
      flex:1;
      padding: 30px;
      background-color: $bgcolor;
      overflow-y: scroll;
    }
  }
}
</style>
