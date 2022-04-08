import { createRouter, createWebHistory } from 'vue-router'

import { ElMessageBox } from 'element-plus'

import nav2_i from '@/assets/images/nav/nav2.png'
import nav2_a_i from '@/assets/images/nav/nav2_a.png'

import nav2_1_i from '@/assets/images/nav/nav2_1.png'
import nav2_1_a_i from '@/assets/images/nav/nav2_1_a.png'

import nav2_2_i from '@/assets/images/nav/nav2_2.png'
import nav2_2_a_i from '@/assets/images/nav/nav2_2_a.png'

import nav3_i from '@/assets/images/nav/nav3.png'
import nav3_a_i from '@/assets/images/nav/nav3_a.png'

import nav3_1_i from '@/assets/images/nav/nav3_1.png'
import nav3_1_a_i from '@/assets/images/nav/nav3_1_a.png'

import nav3_2_i from '@/assets/images/nav/nav3_2.png'
import nav3_2_a_i from '@/assets/images/nav/nav3_2_a.png'

import nav3_3_i from '@/assets/images/nav/nav3_3.png'
import nav3_3_a_i from '@/assets/images/nav/nav3_3_a.png'

import nav3_4_i from '@/assets/images/nav/nav3_4.png'
import nav3_4_a_i from '@/assets/images/nav/nav3_4_a.png'

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
        component: () => import('@/views/layout/rview.vue'),
        meta: { title: '首页' },
        children:[
          {
            path: '/index',
            name: 'Index1',
            component: () => import('@/views/layout/index/index.vue'),
            meta: { title: '首页' },
          },
          {
            path: '/index/editpass',
            name: 'EditPass',
            component: () => import('@/views/layout/index/editPass.vue'),
            meta: { title: '修改登录密码', father:'/index' },
          }
        ]
      },
      {
        path: '/users',
        name: 'Users',
        redirect: '/users/user',
        component: () => import('@/views/layout/rview.vue'),
        meta: { title: '用户/企业管理', icon:nav2_i, icon_a:nav2_a_i, lv:'1', clv:'25,26' },
        children:[
          {
            path: '/users/user',
            name: 'User',
            component: () => import('@/views/layout/users/user.vue'),
            meta: { title: '用户管理', icon:nav2_1_i, icon_a:nav2_1_a_i, keepAlive:true, lv:'25' },
          },
          {
            path: '/users/userinfo',
            name: 'Userinfo',
            component: () => import('@/views/layout/users/userInfo.vue'),
            meta: { title: '用户信息', father:'/users/user' },
          },
          {
            path: '/users/company',
            name: 'Company',
            component: () => import('@/views/layout/users/company.vue'),
            meta: { title: '企业管理', icon:nav2_2_i, icon_a:nav2_2_a_i, keepAlive:true, lv:'26' },
          },
          {
            path: '/users/companydetails',
            name: 'Companydetails',
            component: () => import('@/views/layout/users/companyDetails.vue'),
            meta: { title: '企业详情', father:'/users/company' },
          },
        ]
      },
      {
        path: '/website',
        name: 'Website',
        redirect: '/website/banner',
        component: () => import('@/views/layout/rview.vue'),
        meta: { title: '官网管理', icon:nav3_i, icon_a:nav3_a_i, lv:'2', clv:'6,7,18,19' },
        children:[
          {
            path: '/website/banner',
            name: 'Banner',
            component: () => import('@/views/layout/website/banner.vue'),
            meta: { title: 'banner管理', icon:nav3_1_i, icon_a:nav3_1_a_i, lv:'6' },
          },
          {
            path: '/website/notice',
            name: 'Notice',
            component: () => import('@/views/layout/website/notice.vue'),
            meta: { title: '动态与公告', icon:nav3_2_i, icon_a:nav3_2_a_i, lv:'7' },
          },
          {
            path: '/website/news',
            name: 'News',
            component: () => import('@/views/layout/website/news.vue'),
            meta: { title: '资讯中心', icon:nav3_3_i, icon_a:nav3_3_a_i, lv:'18' },
          },
          {
            path: '/website/service',
            name: 'Service',
            component: () => import('@/views/layout/website/service.vue'),
            meta: { title: '客服管理', icon:nav3_4_i, icon_a:nav3_4_a_i, lv:'19' },
          },
        ]
      },
      {
        path: '/dmp',
        name: 'Dmp',
        redirect: '/dmp/findb',
        component: () => import('@/views/layout/rview.vue'),
        meta: { title: 'DMP系统管理', lv:'3', clv:'3' },
        children:[
          {
            path: '/dmp/findb',
            name: 'FindB',
            redirect: '/dmp/findb/specificdata',
            component: () => import('@/views/layout/rview.vue'),
            meta: { title: '找B端客户', },
            children:[
              {
                path: '/dmp/findb/specificdata',
                name: 'SpecificData',
                component: () => import('@/views/layout/dmp/findb/specificData.vue'),
                meta: { title: '个性化数据', keepAlive:true, },
              },
              {
                path: '/dmp/findb/specificdatadetails',
                name: 'SpecificDataDetails',
                component: () => import('@/views/layout/dmp/findb/specificDataDetails.vue'),
                meta: { title: '个性化数据详情', father:'/dmp/findb/specificdata' },
              },
            ]
          },
          {
            path: '/dmp/findc',
            name: 'FindC',
            redirect: '/dmp/findc/wxdata',
            component: () => import('@/views/layout/rview.vue'),
            meta: { title: '找C端客户', },
            children:[
              {
                path: '/dmp/findc/wxdata',
                name: 'WxData',
                component: () => import('@/views/layout/dmp/findc/wxData.vue'),
                meta: { title: '微信获客', keepAlive:true, },
              },
              {
                path: '/dmp/findc/teldata',
                name: 'TelData',
                component: () => import('@/views/layout/dmp/findc/telData.vue'),
                meta: { title: '号码段获客', keepAlive:true, },
              },
            ]
          },
        ]
      },
      {
        path: '/cms',
        name: 'Cms',
        redirect: '/cms/myWork',
        component: () => import('@/views/layout/rview.vue'),
        meta: { title: 'CMS系统管理', lv:'4', clv:'27,32,37' },
        children:[
          {
            path: '/cms/mywork',
            name: 'Mywork',
            // redirect: '/cms/myWork/article',
            component: () => import('@/views/layout/cms/myWork/article.vue'),
            meta: { title: '我的作品库', lv:'27' },
            
          },
          {
            path: '/cms/myworkdet',
            name: 'Myworkdet',
            component: () => import('@/views/layout/cms/myWork/articleDetails.vue'),
            meta: { title: '软文详情', father:'/cms/mywork' },
          },
          {
            path: '/cms/custom',
            name: 'Custom',
            // redirect: '/cms/custom/article.vue',
            component: () => import('@/views/layout/cms/custom/article.vue'),
            meta: { title: '个性化内容库', lv:'32' },
           
          },
          {
            path: '/cms/resource',
            name: 'Resource',
            // redirect: '/cms/resource/article.vue',
            component: () => import('@/views/layout/cms/resource/article.vue'),
            meta: { title: '资源内容库', lv:'37'},
            
          },
        ]
      },
      {
        path: '/system',
        name: 'System',
        redirect: '/system/staff',
        component: () => import('@/views/layout/rview.vue'),
        meta: { title: '系统管理', lv:'5', clv:'24' },
        children:[
          {
            path: '/system/staff',
            name: 'Staff',
            component: () => import('@/views/layout/system/staff.vue'),
            meta: { title: '管理员设置', keepAlive:true, lv:'24' },
          },
          {
            path: '/system/addstaff',
            name: 'AddStaff',
            component: () => import('@/views/layout/system/addStaff.vue'),
            meta: { title: '添加人员', father:'/system/staff' },
          },
          {
            path: '/system/editstaff',
            name: 'EditStaff',
            component: () => import('@/views/layout/system/editStaff.vue'),
            meta: { title: '权限修改', father:'/system/staff' },
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