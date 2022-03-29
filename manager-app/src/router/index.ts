import { createRouter, createWebHistory } from 'vue-router'

import { ElMessageBox } from 'element-plus'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/layout.vue'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: '首页',
        component: () => import('@/views/layout/index/index.vue'),
        meta: { title: '首页' },
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@/views/404.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export const routerGuard = (userlv:number,url:any)=>{
  //路由守卫
  router.beforeEach((to, from) => {
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
        window.open(to.meta.lv == 2?`//${url.domain_user}/app/user?navActiveIndex=4&asideActive=0`:`//${url.domain_user}/benefits.html`)
      })
      .catch(() => {
        router.replace(from.fullPath)
      })
      return false
    }else{
      window.document.title = to.meta.title ? (to.meta.title as string) : '康州数智CMS'
    }
  })
}

export default router