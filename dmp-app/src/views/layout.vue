<template>
  <div class="layout_page">
    <el-row class="layout_top" v-if="insid">
      <el-col class="logobox">
        <img :src="logo_i" alt=""/>
      </el-col>
      <el-col class="navbox fsc">
        <TopNav :nav="topNav" v-model="activePath" ref="topNavRef"/>
        <div class="top_right fcs">
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
                <div class="els company_name">{{companyInfo.name}}</div>
              </el-tooltip>
              <div class="ssline" v-if="insList && insList.length"></div>
              <el-dropdown @command="changeEdition" v-if="insList && insList.length">
                <div class="fcs">
                  <div class="now_edition els">{{insList.find(v => v.insid === Number($route.query.insid))?.name}}</div>
                  <el-icon size="14px"><arrow-down /></el-icon>
                </div>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item :command="v" v-for="v in insList" :key="v.insid"><div class="edition_dot" :class="Number($route.query.insid) === v.insid && 'active'"></div>{{v.name}}</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
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
              <el-link type="primary" :href="'//' + urlInfo.user + '/app/login'">登录</el-link>
              &ensp;/&ensp;
              <el-link type="primary" :href="'//' + urlInfo.user + '/app/register/register'">注册</el-link>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="layout_container" v-if="insid">
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
    <MyDialog v-model="editionChangeShow" title="切换企业版本数据" :msg="'切换后页面会重新加载，是否切换至“ ' + editionChangeItme.name + ' ”'" @sure="sureChangeEdition"/>

    <el-dialog
      v-model="switchShow"
      title="选择版本"
      width="30%"
      :show-close="false"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
    >
      <el-radio-group v-model="changeInsid">
        <el-radio :label="v.insid" v-for="v in insList" :key="v.insid">{{v.name}}</el-radio>
      </el-radio-group>
      <template #footer>
        <el-button type="primary" @click="selectIns">确定</el-button>
      </template>
    </el-dialog>

  </div>
</template>

<script setup lang="ts">
import logo_i from '@/assets/images/logo.png'
import znkf_i from '@/assets/images/znkf.png'
import company_i from '@/assets/images/company_tag.png'
import df_avatar_i from '@/assets/images/dfavatar.png'
import {reactive, ref, computed } from 'vue'
import LeftNav from '@/components/LeftNav.vue'
import TopNav from '@/components/TopNav.vue'
import {useRouter, useRoute,onBeforeRouteUpdate} from 'vue-router'
import { CaretBottom, ArrowDown } from '@element-plus/icons-vue'
import MyDialog from "@/components/MyDialog.vue";
import { mainStore } from '@/store/index'
import { loginOut_api } from '@/api/login'
import { ElMessageBox } from 'element-plus'

const route = useRoute()
const router = useRouter()
const store = mainStore()

const insid = computed(() => store.state.insid)
const changeIns = () => {
  const setIns = () => {
    if(insList.value.length > 1){
      switchShow.value = true
    }else{
      window.location.href = window.location.origin + '/index?insid=' + insList.value[0].insid
    }
  }
  const noIns = () => {
    ElMessageBox.alert('请购买DMP系统后再使用', '温馨提示', {
      confirmButtonText: '去购买',
      type: 'error',
      callback: () => {
        window.location.href = '//sys-dev.kzszh.com/'
      },
    })
  }
  if(!route.query.insid){
    if(!insList.value || !insList.value.length){
      // 没有实例的情况
      noIns()
      return
    }
    setIns()
    return
  }else{
    store.setInsid(Number(route.query.insid))
    if(!insList.value || !insList.value.length){
      // 没有实例的情况
      noIns()
      return
    }
    if(insList.value && insList.value.findIndex(v => v.insid === Number(route.query.insid)) === -1){
      // 地址栏有insid但是insid错误的情况
      setIns()
      return
    }
  }
}
const switchShow = ref(false)
const changeInsid = ref(0)
const insList = computed(() => store.state.insListInfo.dmp)
changeIns()

const selectIns = () => {
  if(changeInsid.value){
    window.location.href = window.location.origin + '/index?insid=' + changeInsid.value
  }
}

const editionChangeShow = ref(false)
const editionChangeItme = ref<Record<string, string | number>>({})
// 切换版本
const changeEdition = (value:any) => {
  if(editionChangeItme.value.insid === value.insid){
    return
  }
  editionChangeItme.value = value
  editionChangeShow.value = true
}
const sureChangeEdition = () => {
  window.location.href = window.location.origin + '/index?insid=' + editionChangeItme.value.insid
}

const goCompany = ()=>{
  window.open("//" +  urlInfo.value.user + "/app/user?componentId=611")
}

const urlInfo = computed(()=>store.state.yxtUrl)

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
const companyInfo = computed(()=>store.state.companyInfo)

const loginout = ()=>{
  loginOut_api().then((res:res)=>{
    if(res.status == 1){
      window.location.href = `//${urlInfo.value.user}/app/login?url=${encodeURIComponent('//' + urlInfo.value.dmp + '/index')}`
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
    // max-width: 10.4%;
    // flex: 0 0 10.4%;
    max-width: 200px;
    flex: 0 0 200px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .navbox{
    // max-width: 89.6%;
    // flex: 0 0 89.6%;
    flex:1;
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
      margin-left: 10px;
      img{
        width: 14px;
        height: 14px;
        margin-right: 6px;
      }
      .company_name{
        width: 96px;
      }
      .ssline{
        width: 1px;
        height: 20px;
        margin: 0 10px;
        background-color: $coloreee;
      }
      .now_edition{
        max-width: 70px;
        color: $dfcolor;
      }
    }
    .user{
      padding-right: 10px;
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
      // max-width: 10.4%;
      // flex: 0 0 10.4%;
      max-width: 200px;
      flex: 0 0 200px;
      padding-top: 30px;
      padding-left: 8px;
    }
    .layout_content{
      height: 100%;
      // max-width: 89.6%;
      // flex: 0 0 89.6%;
      flex:1;
      padding: 30px 50px;
      background-color: $bgcolor;
      overflow-y: scroll;
    }
  }
}

.edition_dot{
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 8px;
  background: #FFFFFF;
  border: 1px solid #ddd;
  &.active{
    background-color: $dfcolor;
    border-color: $dfcolor;
    position: relative;
    &::after{
      content: '';
      background-color: #fff;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      position: absolute;
      left: 5px;
      top: 5px;
    }
  }
}
</style>
