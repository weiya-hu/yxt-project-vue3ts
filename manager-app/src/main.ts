import { createApp } from 'vue'
import App from './App.vue'
import routes, { setBaseURL } from '@/router'
import { createPinia } from 'pinia'
import ElementPlus, { ElMessageBox } from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/base.scss'
import ErrorDirective from '@/directive/error.js'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import { mainStore } from '@/store/index'
import { createRouter, createWebHistory, Router } from 'vue-router'

const app = createApp(App)

app
  .use(createPinia())
  .use(ElementPlus, {
    locale: zhCn,
    // size:'small'
  })
  .directive('error', ErrorDirective)

const store = mainStore()
let router:Router
const setAppRouter = (url:string) => {
  setBaseURL(url)
  router = createRouter({
    history: createWebHistory(),
    routes,
  })
  app.use(router).mount('#app')
}
store.setUserinfo().then((res:any) => {
  localStorage.setItem('islogin', '1')
  setAppRouter('/index')
}).catch(()=>{
  localStorage.removeItem('islogin')
  setAppRouter('/login')
})

let userLvs:string[] = [] // 用户权限id数组
export const routerGuard = (userLv:string[], isSet = false)=>{
  userLvs = userLv;
  isSet && guardFn()
}
const guardFn = () => {
  router.beforeEach((to, from) => {
    //路由守卫
    if(to.meta.lv && userLvs.indexOf(to.meta.lv as string) == -1){
      if(to.meta.isTopNav){
        const rlist = router.getRoutes()
        // 解决重定向到三级topNav时没有权限的问题，循环路由寻找同父级路由下第一个有权限的路由
        rlist.forEach(v => {
          if(to.meta.father == v.path){
            const afterRoute = v.children.find(v => userLvs.indexOf(v.meta!.lv as string) > -1)
            afterRoute ? router.replace(afterRoute.path) : router.back()
          }
        })
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
        return false
      }
    }else{
      window.document.title = to.meta.title ? (to.meta.title as string) : '康洲数智后台管理系统'
    }
  })
}