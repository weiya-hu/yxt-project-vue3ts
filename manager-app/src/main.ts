import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/base.scss'
import ErrorDirective from '@/directive/error.js'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)

app
  .use(router)
  .use(createPinia())
  .use(ElementPlus, {
    locale: zhCn,
    // size:'small'
  })
  .directive('error', ErrorDirective)
  .mount('#app')