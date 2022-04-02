import { createRouter, createWebHistory } from 'vue-router'

import { ElMessageBox } from 'element-plus'

// lv 当前路由权限id，clv 子路由权限id集合(不包括孙子)
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue'),
    meta: { title: '登录' },
  },
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
        meta: { title: '首页' , },
      },
      {
        path: '/users',
        name: 'Users',
        redirect: '/users/user',
        component: () => import('@/views/layout/rview.vue'),
        meta: { title: '用户/企业管理', lv:'a', clv:'a1,a2,a3,a4' },
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
        meta: { title: '官网管理', lv:'b', clv:'b1,b2,b3,b4' },
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
        meta: { title: 'DMP系统管理', lv:'c', clv:'c1,c2' },
        children:[
          {
            path: '/dmp/findb',
            name: 'FindB',
            redirect: '/dmp/findb/specificdata',
            component: () => import('@/views/layout/rview.vue'),
            meta: { title: '找B端客户', lv:'c1', clv:'c11,c12' },
            children:[
              {
                path: '/dmp/findb/specificdata',
                name: 'SpecificData',
                component: () => import('@/views/layout/dmp/findb/specificData.vue'),
                meta: { title: '个性化数据', keepAlive:true, lv:'c11' },
              },
              {
                path: '/dmp/findb/specificdatadetails',
                name: 'SpecificDataDetails',
                component: () => import('@/views/layout/dmp/findb/specificDataDetails.vue'),
                meta: { title: '个性化数据详情', father:'/dmp/findb/specificdata', leftHidden:true, lv:'c12' },
              },
            ]
          },
          {
            path: '/dmp/findc',
            name: 'FindC',
            redirect: '/dmp/findc/wxdata',
            component: () => import('@/views/layout/rview.vue'),
            meta: { title: '找C端客户', lv:'c2', clv:'c21,c22' },
            children:[
              {
                path: '/dmp/findc/wxdata',
                name: 'WxData',
                component: () => import('@/views/layout/dmp/findc/wxData.vue'),
                meta: { title: '微信获客', keepAlive:true, lv:'c21' },
              },
              {
                path: '/dmp/findc/teldata',
                name: 'TelData',
                component: () => import('@/views/layout/dmp/findc/telData.vue'),
                meta: { title: '号码段获客', keepAlive:true, lv:'c22' },
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
        meta: { title: 'CMS系统管理', lv:'d', clv:'d1' },
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
        meta: { title: '系统管理', lv:'e', clv:'e1' },
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

export const routerGuard = (userLv:(number | string)[])=>{ // 用户权限id数组
  //路由守卫
  router.beforeEach((to, from) => {
    if(to.meta.lv && userLv.indexOf(to.meta.lv as string|number) == -1){
      ElMessageBox.alert(
        '当前账户无此权限！',
        '温馨提示',
        {
          confirmButtonText: '关闭',
          callback: () => {
            router.replace(from.fullPath)
          },
        }
      )
      return false
    }else{
      window.document.title = to.meta.title ? (to.meta.title as string) : '康州数智后台管理系统'
    }
  })
}

export default router