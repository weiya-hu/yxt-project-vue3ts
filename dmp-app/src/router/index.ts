import { createRouter, createWebHistory } from 'vue-router'

import nav1_i from '@/assets/images/nav1.png'
import nav1_a_i from '@/assets/images/nav1_a.png'

const routes = [
  {
    path: '/login',
    name: '登录',
    component: () => import('@/views/login.vue'),
    meta: { title: '登录' },
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/layout.vue'),
    redirect: '/index',
    children: [
      // {
      //   path: '/test',
      //   name: 'Test',
      //   component: () => import('@/views/layout/test/test.vue'),
      //   meta: { title: '测试' },
      // },
      {
        path: '/index',
        name: '首页',
        component: () => import('@/views/layout/index/index.vue'),
        meta: { title: '首页' },
      },
      {
        path: '/findB',
        name: '找B端客户',
        redirect: '/findB/kzData',
        meta: { title: '找B端客户' },
        component: () => import('@/views/layout/findB/findB.vue'),
        children:[
          {
            path: '/findB/kzData',
            name: '康州数据源',
            component: () => import('@/views/layout/findB/kzData.vue'),
            meta: { title: '康州数据源',icon:nav1_i,icon_a:nav1_a_i },
          },
          {
            path: '/findB/otherData',
            name: '第三方数据',
            component: () => import('@/views/layout/findB/otherData.vue'),
            meta: { title: '第三方数据',icon:nav1_i,icon_a:nav1_a_i },
          },
          {
            path: '/findB/specificData',
            name: '个性化数据',
            component: () => import('@/views/layout/findB/specificData.vue'),
            meta: { title: '个性化数据',icon:nav1_i,icon_a:nav1_a_i },
          },
          {
            path: '/findB/specificDataDetails',
            name: '个性化数据详情',
            component: () => import('@/views/layout/findB/specificDataDetails.vue'),
            meta: { title: '个性化数据详情',leftHidden:true },
          },
        ]
      },
      {
        path: '/findC',
        name: '找C端客户',
        redirect: '/findC/kzData',
        meta: { title: '找C端客户' },
        component: () => import('@/views/layout/findC/findC.vue'),
        children:[
          {
            path: '/findC/kzData',
            name: '康州数据源C',
            component: () => import('@/views/layout/findC/kzData.vue'),
            meta: { title: '康州数据源' },
          },
          {
            path: '/findC/otherData',
            name: '第三方数据C',
            component: () => import('@/views/layout/findC/otherData.vue'),
            meta: { title: '第三方数据' },
          },
        ]
      },
      {
        path: '/myData',
        name: '我的数据源',
        redirect: '/myData/up2b',
        meta: { title: '我的数据源' },
        component: () => import('@/views/layout/myData/myData.vue'),
        children:[
          {
            path: '/myData/up2b',
            name: '上传2B数据',
            component: () => import('@/views/layout/myData/up2b.vue'),
            meta: { title: '上传2B数据' },
          },
          {
            path: '/findC/up2bDetails',
            name: '上传2B数据详情',
            component: () => import('@/views/layout/myData/up2bDetails.vue'),
            meta: { title: '上传2B数据详情',leftHidden:true  },
          },
          {
            path: '/myData/up2c',
            name: '上传2c数据',
            component: () => import('@/views/layout/myData/up2c.vue'),
            meta: { title: '上传2c数据' },
          },
          {
            path: '/findC/up2cDetails',
            name: '上传2B数据详情',
            component: () => import('@/views/layout/myData/up2cDetails.vue'),
            meta: { title: '上传2B数据详情',leftHidden:true  },
          },
        ]
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title ? (to.meta.title as string) : '数智营销通'
  next()
})

export default router
