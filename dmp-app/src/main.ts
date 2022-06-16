import { createApp, computed } from 'vue'
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
import { ElMessageBox } from 'element-plus'

const app = createApp(App)

app
  .use(createPinia())
  .use(ElementPlus, {
    locale: zhCn,
  })
  .directive('error', ErrorDirective)

const store = mainStore()
store.getYxtUrl().then((url:any)=>{
  localStorage.setItem('yxtUrl',JSON.stringify(url))
  store.setUserinfo().then(() => {
    store.setUserPower().catch(()=>{
      errMsg('获取企业认证信息失败')
    }).finally(() => {
      // 要在路由守卫创建之后再挂载路由
      routerGuard()
      app.use(router)
      app.mount('#app')
    })
  }).catch(() => {
    errMsg('请登录后在使用')
    setTimeout(() => {
      // window.location.href = `//${url.user}/app/login?url=${encodeURIComponent('//' + url.dmp + '/index')}`
    }, 2000);
  })
})

const routerGuard = ()=>{
  //路由守卫
  const insid = computed(() => store.state.insid)
  const powerList = computed(() => store.state.powerListInfo[insid.value])
  router.beforeEach((to, from) => {
    if(insid.value && !to.query.insid){
      router.replace({
        path: to.path,
        query: {
          ...to.query,
          insid: insid.value
        }
      })
      return false
    }
    if(to.meta.insPower && to.query.insid){
      const nowPowerList = powerList.value ? powerList : computed(() => store.state.powerListInfo[to.query.insid as string])
      if(!nowPowerList.value){
        // 错误insid的情况
        return
      }
      if(!nowPowerList.value.includes(to.meta.insPower)){
        ElMessageBox.alert('当前身份/版本无此权限。', '温馨提示', {
          confirmButtonText: '关闭',
          type: 'error',
          callback: () => {
            router.replace(from.fullPath)
          },
        })
        return false
      }
    }
    window.document.title = to.meta.title ? (to.meta.title as string) : '康洲数智DMP'
  })
}