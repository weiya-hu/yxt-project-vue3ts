import { createRouter, createWebHistory } from 'vue-router'

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
            meta: { title: '康州数据源' },
          },
          {
            path: '/findB/otherData',
            name: '第三方数据',
            component: () => import('@/views/layout/findB/otherData.vue'),
            meta: { title: '第三方数据' },
          },
          {
            path: '/findB/specificData',
            name: '个性化数据',
            component: () => import('@/views/layout/findB/specificData.vue'),
            meta: { title: '个性化数据' },
          },
          {
            path: '/findB/specificDataDetails',
            name: '个性化数据详情',
            component: () => import('@/views/layout/findB/specificDataDetails.vue'),
            meta: { title: '个性化数据详情',leftHidden:true },
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
