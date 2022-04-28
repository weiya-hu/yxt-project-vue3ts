<template>
  <div class="layout_page">
    <el-row class="layout_top">
      <el-col class="logobox fcc">
        <img :src="logo_i" alt=""/>
      </el-col>
      <el-col class="navbox fsc">
        <div class="nav_title">管理后台</div>
        <div class="fcs">
          <!-- <el-button type="primary" @click="showLib" class="mr20">资源库</el-button> -->
          <el-link type="primary" target="_blank" :href="'//' + urlInfo.offical">官网</el-link>
          <div class="sline"></div>
          <div class="userbox fcs" v-if="userInfo.name">
            <el-avatar :size="36" :src="userInfo.head||df_avatar_i"></el-avatar>
            <div class="username">
              <el-dropdown>
                <div class="fcs">
                  <div style="font-size:16px">
                    {{userInfo.name}}
                    <span v-if="userInfo.dept_name">（{{userInfo.dept_name}}）</span>
                  </div>
                  <el-icon class="right_icon"><caret-bottom /></el-icon>
                </div>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item @click="loginout">退出</el-dropdown-item>
                    <el-dropdown-item @click="$router.push('/index/editpass')">修改密码</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
        </div>
        <KzTopNav v-model="topPath" :nav="topNav" v-if="$route.meta.isTopNav && isGetLv" ref="topNavRef"/>
      </el-col>
    </el-row>
    <el-row class="layout_container">
      <el-col class="layout_nav">
        <LeftNav v-model="nowPath" :nav="leftNav"/>
      </el-col>
      <el-col class="layout_content" :class="$route.meta.isTopNav?'layout_content_hasnav':''" v-if="isGetLv">
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-col>
    </el-row>

    <KzResourcePool/>

    <el-image-viewer @close="imgShow = false" v-if="imgShow" :url-list="showImgs" :initial-index="showImgIndex"/>

    <el-dialog v-model="lookShow" title="查看视频" width="60%" @close="lookVideo = ''" custom-class="view_videobox">
      <video :src="lookVideo" controls class="show_video"></video>
    </el-dialog>

  </div>
</template>

<script setup lang="ts">
import logo_i from '@/assets/images/logo.png'
import df_avatar_i from '@/assets/images/dfavatar.png'
import { ref, computed } from 'vue'
import LeftNav from '@/components/LeftNav.vue'
import KzTopNav from '@/components/KzTopNav.vue'
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router'
import { CaretBottom } from '@element-plus/icons-vue'
import { mainStore } from '@/store/index'
import { loginOut_api } from '@/api/login'
import { errMsg } from '@/utils/index'
import KzResourcePool from '@/components/KzResourcePool.vue'
import emiter from '@/utils/bus'
import { ElMessageBox } from 'element-plus'

const store = mainStore()
store.setTypeList()
store.setAddressList()

const route = useRoute()
const router = useRouter()
const routers = router.getRoutes()

//获取跳转地址
const urlInfo = ref<any>({})
store.getYxtUrl().then((url:any)=>{
  urlInfo.value = url
})

const LoginError = () => {
  store.setUserLv([])
  sessionStorage.removeItem('islogin')
  router.replace('/login')
  errMsg('获取用户权限失败，请重新登录或联系管理员')
}
const showLvMsg = () => {
  ElMessageBox.alert(
    '当前账户无此权限！',
    '温馨提示',
    {
      confirmButtonText: '返回首页',
      callback: () => {
        isGetLv.value = true
        router.replace('/index')
      },
    }
  )
}

const isGetLv = ref(false) // 是否加载路由出口layout_content
// 获取用户信息及权限
store.setUserinfo().then((res:any) => {
  if(res.login_passwd_type == 1){
    store.setUserLv().then((userLv:string[])=>{
      if(route.meta.lv && userLv.indexOf(route.meta.lv as string) == -1){
        // 这里就直接提示没权限了，没必要再根据isTopNav重定向到同父级路由下第一个有权限的路由了
        showLvMsg()
        return
      }
      isGetLv.value = true
    }).catch((err)=>{
      LoginError()
    })
  }else{
    ElMessageBox.alert(
      '修改默认密码后才能继续使用',
      '温馨提示',
      {
        confirmButtonText: '关闭',
        callback: () => {
        },
      }
    )
    router.replace('/index/editpass')
    store.setUserLv([])
    isGetLv.value = true
  }
}).catch((error: boolean) => {
  LoginError()
})
const userInfo = computed(()=>store.state.userInfo)

const leftNav = ref<any[]>([])
const nowPath = ref('')

const topNav = ref<any[]>([])
const topPath = ref('')
const topNavRef = ref()

const getPath = (path:string)=>{
  nowPath.value = path
}
getPath(route.meta.father ? route.meta.father as string: route.path)

topPath.value = route.path

const getNavs = (path?:string, first = false)=>{
  //从路由获取左侧导航 和 顶部导航
  routers.forEach(v=>{
    if(first && v.name == 'Layout') leftNav.value = v.children;
    if(path && v.meta.showTopNav && v.children.some(v => v.path == path)) topNav.value = v.children
  })
}
getNavs(route.path, true)

onBeforeRouteUpdate((to,from)=>{

  const userLvs = computed(()=>store.state.userLv)
  if(to.meta.lv && userLvs.value.indexOf(to.meta.lv as string) == -1){
    if(to.meta.isTopNav){
      const rlist = router.getRoutes()
      const fatherRouter = rlist.find(v => to.meta.father == v.path)
      if(to.path == fatherRouter?.redirect){
        // 假设满足if表示正在重定向，问题是如果直接写redirect进入还是会进入if不会提示无权限，或许把每个redirect写为函数判断可以解决
        // 解决重定向到三级topNav时没有权限的问题，循环路由寻找同父级路由下第一个有权限的路由
        const afterRoute = fatherRouter.children.find(v => userLvs.value.indexOf(v.meta!.lv as string) > -1)
        afterRoute ? router.replace(afterRoute.path) : router.back()
      }else{
        ElMessageBox.alert(
          '当前账户无此权限！',
          '温馨提示',
          {
            confirmButtonText: '关闭',
            callback: () => {
            },
          }
        )
      }
    }else{
      ElMessageBox.alert(
        '当前账户无此权限！',
        '温馨提示',
        {
          confirmButtonText: '返回',
          callback: () => {
            router.replace(from.fullPath)
          },
        }
      )
    }
    return false
  }else{
    window.document.title = to.meta.title ? (to.meta.title as string) : '康洲数智后台管理系统'
  }

  if(from.path !== to.meta.father){
    getPath(to.meta.father ? to.meta.father as string: to.path)
  }

  topPath.value = to.path
  if(to.meta.isTopNav && to.meta.father != from.meta.father) getNavs(to.path);
  if(to.meta.isTopNav && from.meta.isTopNav) topNavRef.value && topNavRef.value.changeLeft();
  
  if(from.meta.keepAlive && to.meta.father == from.path){
    // 从列表进入详情 缓存列表
    store.setKeepList([from.name as string])
  }else if(to.meta.keepAlive && from.meta.father == to.path){
    // 从详情返回上一级 什么都不做
  }else{
    // 兄弟列表切换 或者 详情进入非父级列表
    store.setKeepList([])
  }
  // next()
})

const loginout = ()=>{
  loginOut_api().then((res:res)=>{
    if(res.status == 1){
      sessionStorage.removeItem('islogin')
      router.replace('/login')
    }
  })
}

const showImgs = ref<string[]>([])//预览图片列表
const imgShow = ref(false)//预览是否显示
const showImgIndex = ref(0)//首张预览图片
emiter.on('lookImage', ({ imgs, index } : { imgs:string[], index:number }) => {
  imgShow.value = true
  showImgs.value = imgs
  showImgIndex.value = index
})

const lookShow = ref(false)
const lookVideo = ref('')
emiter.on('lookVideo',(video:string) => {
  lookVideo.value = video
  lookShow.value = true
})
</script>

<style lang="scss" scoped>
.layout_page {
  height: 100%;
  .logobox {
    height: 64px;
    width: 220px;
    flex: 0 0 220px;
    border-right: 1px solid $colorddd;
    img{
      width: 136px;
      height: 30px;
    }
  }
  .navbox{
    flex:1;
    // box-shadow: 0px 0px 2px 0px rgb(231, 231, 231);
    border-bottom: 1px solid $coloreee;
    position: relative;
    z-index: 30;
    padding: 0 32px 0 16px;
    .nav_title{
      font-size: 20px;
    }
    .sline{
      width: 1px;
      height: 32px;
      margin: 0 20px;
      background-color: $coloreee;
    }
    .username{
      margin-left: 8px;
    }
  }
  .layout_container {
    height: calc(100% - 64px);
    .layout_nav {
      background-color: #fff;
      width: 220px;
      flex: 0 0 220px;
      padding:30px 16px;
      border-right: 1px solid $colorddd;
    }
    .layout_content{
      height: 100%;
      flex:1;
      padding: 30px;
      background-color: $bgcolor;
      overflow-y: scroll;
    }
    .layout_content_hasnav{
      padding-top: 78px;
      position: relative;
    }
  }
}
:deep(.view_videobox){
  .el-dialog__body{
    padding: 0;
    .show_video{
      width: 100%;
      height: 600px;
    }
  }
}
</style>
