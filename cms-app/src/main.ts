import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/base.scss'
import ErrorDirective from '@/directive/error.js'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import { mainStore } from '@/store/index'
import { errMsg } from '@/utils/index'
import { ElMessageBox } from 'element-plus'

const app = createApp(App)

app
  .use(router)
  .use(createPinia())
  .use(ElementPlus, {
    locale: zhCn,
  })
  .directive('error', ErrorDirective)
  .mount('#app')

const store = mainStore()
store.setUserinfo().then((res: boolean) => {
  // app.mount('#app')
}).catch((error: boolean) => {
  errMsg('请登录后在使用')
  setTimeout(() => {
    window.location.href = 'https://dev.yxtong.com/app/login?url=https://dmp.yxtong.com/index'
  }, 2000);
})

store.setUserLv().then((userlv:number)=>{
  console.log(userlv);
  router.beforeEach((to, from, next) => {
    if(to.meta.lv && (userlv < Number(to.meta.lv))){
      ElMessageBox.confirm(
        to.meta.lv == 2 ?'此功能模块需要完善企业信息才能使用，是否完善？':'此功能模块需要购买付费套餐才能使用，是否购买？',
        '温馨提示',
        {
          confirmButtonText: to.meta.lv == 2 ?'去完善':'去购买',
          cancelButtonText: '取消',
          type: 'warning',
        }
      )
      .then(() => {
        window.open(to.meta.lv == 2?"//dev.yxtong.com/app/user?navActiveIndex=4&asideActive=0":'//dev.yxtong.com/benefits.html')
      })
      .catch(() => {
        router.replace(from.fullPath)
      })
    }else{
      window.document.title = to.meta.title ? (to.meta.title as string) : '数智营销通'
      next()
    }
  })
})