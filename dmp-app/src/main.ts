import { createApp } from 'vue'
import App from './App.vue'
import router , { routerGuard } from '@/router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import 'element-plus/theme-chalk/src/index.scss'
// import '@/assets/css/element-variables.scss'
import '@/assets/css/base.scss'
import ErrorDirective from '@/directive/error.js'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import { mainStore } from '@/store/index'
import { errMsg } from '@/utils/index'

const app = createApp(App)

app
  .use(createPinia())
  .use(ElementPlus, {
    locale: zhCn,
  })
  .directive('error', ErrorDirective)
  app.use(router)
    app.mount('#app')
const store = mainStore()
// store.setUserinfo().then((res: boolean) => {

//   store.setUserLv().then((userlv:number)=>{
//     // 要在路由守卫创建之后再挂载路由
//     // routerGuard(userlv)
//     routerGuard(3)
//     app.use(router)
//     app.mount('#app')
//   }).catch((err)=>{
//     routerGuard(1)
//     app.use(router)
//     app.mount('#app')
//     errMsg('获取企业认证信息失败')
//   })

// }).catch((error: boolean) => {
//   errMsg('请登录后在使用')
//   setTimeout(() => {
//     window.location.href = 'https://dev.yxtong.com/app/login?url=https://dmp.yxtong.com/index'
//   }, 2000);
// })