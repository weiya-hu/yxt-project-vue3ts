import { createRouter, createWebHistory } from 'vue-router'

import { ElMessageBox } from 'element-plus'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/layout.vue'),
    redirect: '/index',
    meta: { title: '康州数智后台管理系统' },
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('@/views/layout/index/index.vue'),
        meta: { title: '首页' },
      },
      {
        path: '/users',
        name: 'Users',
        redirect: '/users/user',
        component: () => import('@/views/layout/rview.vue'),
        meta: { title: '用户/企业管理', lv:'a,a1,a2,a3,a4', },
        children:[
          {
            path: '/users/user',
            name: 'User',
            component: () => import('@/views/layout/users/user.vue'),
            meta: { title: '用户管理', keepAlive:true, lv:'a1' },
          },
          {
            path: '/users/userinfo',
            name: 'Userinfo',
            component: () => import('@/views/layout/users/userInfo.vue'),
            meta: { title: '用户信息', father:'/users/user', leftHidden:true, lv:'a2' },
          },
          {
            path: '/users/company',
            name: 'Company',
            component: () => import('@/views/layout/users/company.vue'),
            meta: { title: '企业管理', keepAlive:true, lv:'a3' },
          },
          {
            path: '/users/companydetails',
            name: 'Companydetails',
            component: () => import('@/views/layout/users/companyDetails.vue'),
            meta: { title: '企业详情', father:'/users/company', leftHidden:true, lv:'a4' },
          },
        ]
      },
      {
        path: '/website',
        name: 'Website',
        redirect: '/website/banner',
        component: () => import('@/views/layout/rview.vue'),
        meta: { title: '官网管理', lv:'b,b1,b2,b3,b4' },
        children:[
          {
            path: '/website/banner',
            name: 'Banner',
            component: () => import('@/views/layout/website/banner.vue'),
            meta: { title: 'banner管理', lv:'b1' },
          },
          {
            path: '/website/notice',
            name: 'Notice',
            component: () => import('@/views/layout/website/notice.vue'),
            meta: { title: '动态与公告', lv:'b2' },
          },
          {
            path: '/website/news',
            name: 'News',
            component: () => import('@/views/layout/website/news.vue'),
            meta: { title: '资讯中心', lv:'b3' },
          },
          {
            path: '/website/service',
            name: 'Service',
            component: () => import('@/views/layout/website/service.vue'),
            meta: { title: '客服管理', lv:'b4' },
          },
        ]
      },
      {
        path: '/dmp',
        name: 'Dmp',
        redirect: '/dmp/findb',
        component: () => import('@/views/layout/rview.vue'),
        meta: { title: 'DMP系统管理', lv:'c' },
        children:[
          {
            path: '/dmp/findb',
            name: 'FindB',
            redirect: '/dmp/findb/specificdata',
            component: () => import('@/views/layout/dmp/dmpView.vue'),
            meta: { title: '找B端客户', lv:'c1' },
            children:[
              {
                path: '/dmp/findb/specificdata',
                name: 'SpecificData',
                component: () => import('@/views/layout/dmp/findb/specificData.vue'),
                meta: { title: '个性化数据', keepAlive:true, lv:'c11' },
              },
            ]
          },
        ]
      },
      {
        path: '/cms',
        name: 'Cms',
        redirect: '/cms/cms',
        component: () => import('@/views/layout/rview.vue'),
        meta: { title: 'CMS系统管理', lv:'d' },
        children:[
          {
            path: '/cms/cms',
            name: 'Cms1',
            component: () => import('@/views/layout/cms/cms.vue'),
            meta: { title: 'cms', keepAlive:true, lv:'d1' },
          },
        ]
      },
      {
        path: '/system',
        name: 'System',
        redirect: '/system/staff',
        component: () => import('@/views/layout/rview.vue'),
        meta: { title: '系统管理', lv:'e' },
        children:[
          {
            path: '/system/staff',
            name: 'Staff',
            component: () => import('@/views/layout/system/staff.vue'),
            meta: { title: '管理员设置', keepAlive:true, lv:'e1' },
          },
        ]
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
      //  ElMessageBox.confirm(
      //   to.meta.lv == 2 ?'此功能模块需要完善企业信息才能使用，是否完善？':'此功能模块需要购买付费套餐才能使用，是否购买？',
      //   '温馨提示',
      //   {
      //     confirmButtonText: to.meta.lv == 2 ?'去完善':'去购买',
      //     cancelButtonText: '取消',
      //     type: 'warning',
      //   }
      // )
      // .then(() => {
      //   window.open(to.meta.lv == 2?`//${url.domain_user}/app/user?navActiveIndex=4&asideActive=0`:`//${url.domain_user}/benefits.html`)
      // })
      // .catch(() => {
      //   router.replace(from.fullPath)
      // })
      // return false
    }else{
      window.document.title = to.meta.title ? (to.meta.title as string) : '康州数智后台管理系统'
    }
  })
}

export default router