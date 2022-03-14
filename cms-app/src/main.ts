import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
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
  .use(router)
  .use(createPinia())
  .use(ElementPlus, {
    locale: zhCn,
  })
  .directive('error', ErrorDirective)

const store = mainStore()
store.setUserinfo().then((res: boolean) => {
  if (res) {
    app.mount('#app')
  } else {
    errMsg('请登录后在使用')
    setTimeout(() => {
      window.location.href = '//dev.yxtong.com/app/login'
    }, 2000);
  }
})