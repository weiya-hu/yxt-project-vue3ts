import { createRouter, createWebHistory } from 'vue-router'

import nav1_i from '@/assets/images/nav1.png'
import nav1_a_i from '@/assets/images/nav1_a.png'
import nav2_i from '@/assets/images/nav2.png'
import nav2_a_i from '@/assets/images/nav2_a.png'
import nav3_i from '@/assets/images/nav3.png'
import nav3_a_i from '@/assets/images/nav3_a.png'
import nav4_i from '@/assets/images/nav4.png'
import nav4_a_i from '@/assets/images/nav4_a.png'
import nav5_i from '@/assets/images/nav5.png'
import nav5_a_i from '@/assets/images/nav5_a.png'
import nav6_i from '@/assets/images/nav6.png'
import nav6_a_i from '@/assets/images/nav6_a.png'
import nav7_i from '@/assets/images/nav7.png'
import nav7_a_i from '@/assets/images/nav7_a.png'
import nav8_i from '@/assets/images/nav8.png'
import nav8_a_i from '@/assets/images/nav8_a.png'
import nav9_i from '@/assets/images/nav9.png'
import nav9_a_i from '@/assets/images/nav9_a.png'
import nav10_i from '@/assets/images/nav10.png'
import nav10_a_i from '@/assets/images/nav10_a.png'
import nav11_i from '@/assets/images/nav11.png'
import nav11_a_i from '@/assets/images/nav11_a.png'


import myData2b_a from '@/assets/images/myData2b_a.png'
import myData2c_a from '@/assets/images/myData2c_a.png'
import myData2b from '@/assets/images/myData2b.png'
import myData2c from '@/assets/images/myData2c.png'

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
        meta: { title: '找B端客户',lv:1 },
        component: () => import('@/views/layout/findB/findB.vue'),
        children:[
          {
            path: '/findB/kzData',
            name: '康州数据源',
            component: () => import('@/views/layout/findB/kzData.vue'),
            meta: { title: '康州数据源',icon:nav1_i,icon_a:nav1_a_i,lv:1 },
          },
          {
            path: '/findB/otherData',
            name: '第三方数据',
            component: () => import('@/views/layout/findB/otherData.vue'),
            meta: { title: '第三方数据',icon:nav2_i,icon_a:nav2_a_i,lv:2 },
          },
          {
            path: '/findB/specificData',
            name: '个性化数据',
            component: () => import('@/views/layout/findB/specificData.vue'),
            meta: { title: '个性化数据',icon:nav3_i,icon_a:nav3_a_i,keepAlive:true,lv:3 },
          },
          {
            path: '/findB/specificDataDetails',
            name: '个性化数据详情',
            component: () => import('@/views/layout/findB/specificDataDetails.vue'),
            meta: { title: '个性化数据详情',leftHidden:true,father:'/findB/specificData',lv:3 },
          },
        ]
      },
      {
        path: '/findC',
        name: '找C端客户',
        redirect: '/findC/kzData',
        meta: { title: '找C端客户',lv:2 },
        component: () => import('@/views/layout/findC/findC.vue'),
        children:[
          {
            path: '/findC/kzData',
            name: '康州数据源C',
            component: () => import('@/views/layout/findC/kzData.vue'),
            meta: { title: '康州数据源',icon:nav1_i,icon_a:nav1_a_i,lv:2 },
          },
          {
            path: '/findC/otherData',
            name: '第三方数据C',
            component: () => import('@/views/layout/findC/otherData.vue'),
            meta: { title: '第三方数据',icon:nav2_i,icon_a:nav2_a_i,lv:3 },
          },
          {
            path: '/findC/telData',
            name: '号码段获客C',
            component: () => import('@/views/layout/findC/telData.vue'),
            meta: { title: '号码段获客',icon:nav4_i,icon_a:nav4_a_i,keepAlive:true,lv:2 },
          },
          {
            path: '/findC/telDataDetails',
            name: '号码段获客C详情',
            component: () => import('@/views/layout/findC/telDataDetails.vue'),
            meta: { title: '号码段获客详情',leftHidden:true,father:'/findC/telData',lv:2 },
          },
          {
            path: '/findC/adData',
            name: '广告投放C',
            component: () => import('@/views/layout/findC/adData.vue'),
            meta: { title: '广告投放',icon:nav5_i,icon_a:nav5_a_i,keepAlive:true,lv:3 },
          },
          {
            path: '/findC/adDataDetails',
            name: '广告投放C详情',
            component: () => import('@/views/layout/findC/adDataDetails.vue'),
            meta: { title: '广告投放详情',leftHidden:true,father:'/findC/adData',lv:3 },
          },
          {
            path: '/findC/wxData',
            name: '微信获客C',
            component: () => import('@/views/layout/findC/wxData.vue'),
            meta: { title: '微信获客',icon:nav6_i,icon_a:nav6_a_i,keepAlive:true,lv:3 },
          },
          {
            path: '/findC/wxDataDetails',
            name: '微信获客C详情',
            component: () => import('@/views/layout/findC/wxDataDetails.vue'),
            meta: { title: '微信获客详情',leftHidden:true,father:'/findC/wxData',lv:3 },
          },
          {
            path: '/findC/baiduData',
            name: '百度关键词获客C',
            component: () => import('@/views/layout/findC/baiduData.vue'),
            meta: { title: '百度关键词获客',icon:nav7_i,icon_a:nav7_a_i,keepAlive:true,lv:3 },
          },
          {
            path: '/findC/baiduDataDetails',
            name: '百度关键词获客C详情',
            component: () => import('@/views/layout/findC/baiduDataDetails.vue'),
            meta: { title: '百度关键词获客详情',leftHidden:true,father:'/findC/baiduData',lv:3 },
          },
          {
            path: '/findC/bigData',
            name: '大数据获客C',
            component: () => import('@/views/layout/findC/bigData.vue'),
            meta: { title: '大数据获客',icon:nav8_i,icon_a:nav8_a_i,keepAlive:true,lv:3 },
          },
          {
            path: '/findC/bigDataDetails',
            name: '大数据获客C详情',
            component: () => import('@/views/layout/findC/bigDataDetails.vue'),
            meta: { title: '大数据获客详情',leftHidden:true,father:'/findC/bigData',lv:3 },
          },
          {
            path: '/findC/fourData',
            name: '400获客C',
            component: () => import('@/views/layout/findC/fourData.vue'),
            meta: { title: '400获客',icon:nav9_i,icon_a:nav9_a_i,keepAlive:true,lv:3 },
          },
          {
            path: '/findC/fourDataDetails',
            name: '400获客C详情',
            component: () => import('@/views/layout/findC/fourDataDetails.vue'),
            meta: { title: '400获客详情',leftHidden:true,father:'/findC/fourData',lv:3 },
          },
          {
            path: '/findC/biddingData',
            name: '竞价获客C',
            component: () => import('@/views/layout/findC/biddingData.vue'),
            meta: { title: '竞价获客',icon:nav10_i,icon_a:nav10_a_i,keepAlive:true,lv:3 },
          },
          {
            path: '/findC/biddingDataDetails',
            name: '竞价获客C详情',
            component: () => import('@/views/layout/findC/biddingDataDetails.vue'),
            meta: { title: '竞价获客详情',leftHidden:true,father:'/findC/biddingData',lv:3 },
          },
          {
            path: '/findC/msgData',
            name: '短信获客C',
            component: () => import('@/views/layout/findC/msgData.vue'),
            meta: { title: '短信获客',icon:nav11_i,icon_a:nav11_a_i,keepAlive:true,lv:3 },
          },
          {
            path: '/findC/msgDataDetails',
            name: '短信获客C详情',
            component: () => import('@/views/layout/findC/msgDataDetails.vue'),
            meta: { title: '短信获客详情',leftHidden:true,father:'/findC/msgData',lv:3 },
          },
        ]
      },
      {
        path: '/myData',
        name: '我的数据源',
        redirect: '/myData/up2b',
        meta: { title: '我的数据源',lv:2 },
        component: () => import('@/views/layout/myData/myData.vue'),
        children:[
          {
            path: '/myData/up2b',
            name: '上传2B数据',
            component: () => import('@/views/layout/myData/up2b.vue'),
            meta: { title: '上传2B数据' ,icon:myData2b ,icon_a:myData2b_a,lv:2 },
          },
          {
            path: '/myData/up2bDetails',
            name: '上传2B数据详情',
            component: () => import('@/views/layout/myData/up2bDetails.vue'),
            meta: { title: '上传2B数据详情',leftHidden:true ,father: '/myData/up2b',lv:2},
          },
          {
            path: '/myData/up2c',
            name: '上传2C数据',
            component: () => import('@/views/layout/myData/up2c.vue'),
            meta: { title: '上传2C数据', icon:myData2c ,icon_a:myData2c_a,lv:2 },
          },
          {
            path: '/myData/up2cDetails',
            name: '上传2C数据详情',
            component: () => import('@/views/layout/myData/up2cDetails.vue'),
            meta: { title: '上传2B数据详情',leftHidden:true, father:'/myData/up2c',lv:2 },
          },
        ]
      },
      {
        path: '/seekPathPro',
        name: '找渠道/项目',
        redirect: '/seekPathPro/seekPath',
        meta: { title: '找渠道/项目',lv:2 },
        component: () => import('@/views/layout/seekPathPro/seekPathPro.vue'),
        children:[
          {
            path: '/seekPathPro/seekPath',
            name: '找渠道',
            component: () => import('@/views/layout/seekPathPro/seekPath.vue'),
            meta: { title: '找渠道' ,icon:myData2b ,icon_a:myData2b_a,lv:1 },
          },
          {
            path: '/seekPathPro/seekPathDetail',
            name: '找渠道详情',
            component: () => import('@/views/layout/seekPathPro/seekPathDetail.vue'),
            meta: { title: '找渠道详情',leftHidden:true ,father: '/seekPathPro/seekPath',lv:1},
          },
          {
            path: '/seekPathPro/seekProject',
            name: '找项目',
            component: () => import('@/views/layout/seekPathPro/seekProject.vue'),
            meta: { title: '找项目', icon:myData2c ,icon_a:myData2c_a,lv:1 },
          },
          {
            path: '/seekPathPro/seekProjectDetail',
            name: '找项目详情',
            component: () => import('@/views/layout/seekPathPro/seekProjectDetail.vue'),
            meta: { title: '找项目详情',leftHidden:true, father:'/seekPathPro/seekProject',lv:1 },
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

export default router