<template>
  <div class="layout_page">
    <el-row class="layout_top">
      <el-col class="logobox">
        <img :src="logo_i" alt=""/>
      </el-col>
      <el-col class="navbox fsc">
        <TopNav :nav="topNav" v-model="activePath" ref="topNavRef"/>
        <div class="top_right fcs">
          <div class="top_rt_nav fcs">
            <div class="top_rt_nav_item fcs" v-for="(v,i) in topRightNav" :key="i" @click="goOther(v.href)">
              <img :src="v.img" alt="">
              <div>{{v.name}}</div>
            </div>
          </div>
          <div class="user fcs">
            <div class="kf_btn fcs" @click="kfShow=true ">
              <img :src="znkf_i" alt="">
              <div>客服</div>
            </div>
            <div class="is_company fcc" v-if="companyInfo.status == 3">
              <img :src="company_i" alt="">
              <el-tooltip effect="dark" placement="bottom">
                <template #content>
                  <div style="width:100px">{{companyInfo.name}}</div>
                </template>
                <div class="els">{{companyInfo.name}}</div>
              </el-tooltip>
            </div>
            <el-button color="#2D68EB" class="l_btn" plain v-if="companyInfo.status != 3 && userInfo.id" @click="goCompany">完善资料</el-button>
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
                      <el-dropdown-item @click="loginout">
                        退出
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
            </div>
            <div class="loginbtn fcc" v-else>
              <el-link type="primary" href="//dev.yxtong.com/app/login">登录</el-link>
              &ensp;/&ensp;
              <el-link type="primary" href="//dev.yxtong.com/app/register/register">注册</el-link>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="layout_container">
      <el-col class="layout_nav" v-if="activePath!='/index'">
        <LeftNav v-model="nowPath" :nav="leftNav"/>
      </el-col>
      <el-col :class="activePath=='/index'?'':'layout_content'">
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-col>
    </el-row>

    <MyDialog v-model="kfShow" type="kf"/>

  </div>
</template>

<script setup lang="ts">
import logo_i from '@/assets/images/logo.png'
import znkf_i from '@/assets/images/znkf.png'
import company_i from '@/assets/images/company_tag.png'
import df_avatar_i from '@/assets/images/dfavatar.png'
import jqr_i from '@/assets/images/t_jqr.png'
import scrm_i from '@/assets/images/t_scrm.png'
import dsp_i from '@/assets/images/t_dsp.png'
import cms_i from '@/assets/images/t_cms.png'
import {reactive, ref, computed } from 'vue'
import LeftNav from '@/components/LeftNav.vue'
import TopNav from '@/components/TopNav.vue'
import {useRouter, useRoute,onBeforeRouteUpdate} from 'vue-router'
import { CaretBottom } from '@element-plus/icons-vue'
import MyDialog from "@/components/MyDialog.vue";
import { mainStore } from '@/store/index'
import {loginOut_api,getCompanyInfo} from '@/api/login'

const topRightNav = ref([
  {img:jqr_i,name:'智能机器人',href:''},
  {img:scrm_i,name:'SCRM系统',href:''},
  {img:dsp_i,name:'DSP系统',href:''},
  {img:cms_i,name:'CMS系统',href:''},
])
const goOther = (href:string)=>{
  href && window.open(href)
}

const goCompany = ()=>{
  window.open("//dev.yxtong.com/app/user?navActiveIndex=4&asideActive=0")
}

const store = mainStore()

const route = useRoute()
const router = useRouter()

const routers = router.getRoutes()
const leftNav:any = ref([])
const topNav:any = ref([])
const activePath = ref('')
const nowPath = ref('')
const topNavRef = ref()

const getPath = (path:string)=>{
  let s = path.split('/')
  activePath.value = (s.length-1)>1?'/' + s[1]:path // 有两个'/' 则是子页面 取父页面路由为顶部导航激活路由

  nowPath.value = path
}
getPath((route.meta.leftHidden && route.meta.father) ? route.meta.father as string:route.path)

const getNavs = (first:boolean = false)=>{
  //从路由获取顶部和左侧导航
  routers.forEach(v=>{
    if(first && v.name === 'Layout') topNav.value = reactive(v.children)
    if(v.path === activePath.value && v.children.length) leftNav.value = v.children
  })
}
getNavs(true)

onBeforeRouteUpdate((to,from,next)=>{
  getPath((to.meta.leftHidden && to.meta.father)?to.meta.father as string:to.path)
  let tos = to.path.split('/')[1]
  let froms = from.path.split('/')[1]
  if(tos != froms){
    //判断是否需要改变左侧导航
    getNavs()
    topNavRef.value.changeLeft()
  }

  // router.options.routes.forEach((item1: any) => {
  //   if (item1.name === 'Layout') {
  //     item1.children.forEach((item2: any) => {
  //       if (item2.path !== '/index') {
  //         item2.children.forEach((item3: any) => {
  //           if (item3.path === from.path) {
  //             item3.meta.keepAlive = to.meta.father ? true :false
  //           }
  //         })
  //       }
  //     })
  //   }
  // })
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

const kfShow = ref(false)

const userInfo = computed(()=>store.state.userInfo)
const companyInfo = ref<any>({})
const getUser = ()=>{
  getCompanyInfo().then((res:res)=>{
    if(res.status == 1){
      companyInfo.value = res.body
    }
  })
}
getUser()
const loginout = ()=>{
  loginOut_api().then((res:res)=>{
    if(res.status == 1){
      companyInfo.value = {}
      window.location.href = '//dev.yxtong.com/app/login?url=https://dmp.yxtong.com/index'
    }
  })
  
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
    box-shadow: 0px 0px 2px 0px rgb(231, 231, 231);
    z-index: 30;
    .kf_btn{
      font-size: 14px;
      color: $dfcolor;
      img{
        width: 32px;
        height: 32px;
        margin-right: 4px;
      }
      &:hover{
        cursor: pointer;
      }
    }
    .top_rt_nav{
      .top_rt_nav_item{
        margin-right: 32px;
        color: $color333;
        div{
          font-size: 14px;
        }
        img{
          width: 32px;
          height: 32px;
          margin-right: 8px;
        }
        &:hover{
          cursor: pointer;
          div{
            color:$dfcolor
          }
        }
      }
    }
    .is_company{
      font-size: 12px;
      color: $color333;
      font-weight: 400;
      img{
        width: 14px;
        height: 14px;
        margin-right: 6px;
      }
      >div{
        width: 96px;
      }
    }
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
      .l_btn{
        border-color:rgba(178,202,249,1);
        margin-left: 20px;
        &:hover,&:active,&:focus{
          border-color:$dfcolor;
        }
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
