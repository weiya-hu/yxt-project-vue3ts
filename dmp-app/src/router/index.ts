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
import seekpath from '@/assets/images/seekpath.png'
import seekpath_a from '@/assets/images/seekpath_a.png'
import seekpro from '@/assets/images/seekpro.png'
import seekpro_a from '@/assets/images/seekpro_a.png'
import buyer from '@/assets/images/buyer.png'
import buyer_a from '@/assets/images/buyer_a.png'
import supplier from '@/assets/images/supplier.png'
import supplier_a from '@/assets/images/supplier_a.png'

import insPowerHash from "@/utils/power";

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
        meta: { title: '找B端客户', insPower: insPowerHash['dmp_b'] },
        component: () => import('@/views/layout/findB/findB.vue'),
        children:[
          {
            path: '/findB/kzData',
            name: '康洲数据源',
            component: () => import('@/views/layout/findB/kzData.vue'),
            meta: { title: '康洲数据源',icon:nav1_i,icon_a:nav1_a_i, insPower: insPowerHash['dmp_b_kz'] },
          },
          {
            path: '/findB/otherData',
            name: '第三方数据',
            component: () => import('@/views/layout/findB/otherData.vue'),
            meta: { title: '第三方数据',icon:nav2_i,icon_a:nav2_a_i, insPower: insPowerHash['dmp_b_dsf'] },
          },
          {
            path: '/findB/specificData',
            name: '个性化数据',
            component: () => import('@/views/layout/findB/specificData.vue'),
            meta: { title: '个性化数据',icon:nav3_i,icon_a:nav3_a_i,keepAlive:true, insPower: insPowerHash['dmp_b_diy'] },
          },
          {
            path: '/findB/specificDataDetails',
            name: '个性化数据详情',
            component: () => import('@/views/layout/findB/specificDataDetails.vue'),
            meta: { title: '个性化数据详情',leftHidden:true,father:'/findB/specificData', insPower: insPowerHash['dmp_b_diy'] },
          },
        ]
      },
      {
        path: '/findC',
        name: '找C端客户',
        redirect: '/findC/kzData',
        meta: { title: '找C端客户', insPower: insPowerHash['dmp_c'] },
        component: () => import('@/views/layout/findC/findC.vue'),
        children:[
          {
            path: '/findC/kzData',
            name: '康洲数据源C',
            component: () => import('@/views/layout/findC/kzData.vue'),
            meta: { title: '康洲数据源',icon:nav1_i,icon_a:nav1_a_i, insPower: insPowerHash['dmp_c_kz'] },
          },
          {
            path: '/findC/otherData',
            name: '第三方数据C',
            component: () => import('@/views/layout/findC/otherData.vue'),
            meta: { title: '第三方数据',icon:nav2_i,icon_a:nav2_a_i, insPower: insPowerHash['dmp_c_dsf'] },
          },
          {
            path: '/findC/telData',
            name: '号码段获客C',
            component: () => import('@/views/layout/findC/telData.vue'),
            meta: { title: '号码段获客',icon:nav4_i,icon_a:nav4_a_i,keepAlive:true, insPower: insPowerHash['dmp_c_number'] },
          },
          {
            path: '/findC/telDataDetails',
            name: '号码段获客C详情',
            component: () => import('@/views/layout/findC/telDataDetails.vue'),
            meta: { title: '号码段获客详情',leftHidden:true,father:'/findC/telData', insPower: insPowerHash['dmp_c_number'] },
          },
          {
            path: '/findC/adData',
            name: '广告投放C',
            component: () => import('@/views/layout/findC/adData.vue'),
            meta: { title: '广告投放',icon:nav5_i,icon_a:nav5_a_i,keepAlive:true, insPower: insPowerHash['dmp_c_advert'] },
          },
          {
            path: '/findC/adDataDetails',
            name: '广告投放C详情',
            component: () => import('@/views/layout/findC/adDataDetails.vue'),
            meta: { title: '广告投放详情',leftHidden:true,father:'/findC/adData', insPower: insPowerHash['dmp_c_advert'] },
          },
          {
            path: '/findC/wxData',
            name: '微信获客C',
            component: () => import('@/views/layout/findC/wxData.vue'),
            meta: { title: '微信获客',icon:nav6_i,icon_a:nav6_a_i,keepAlive:true, insPower: insPowerHash['dmp_c_wx'] },
          },
          {
            path: '/findC/wxDataDetails',
            name: '微信获客C详情',
            component: () => import('@/views/layout/findC/wxDataDetails.vue'),
            meta: { title: '微信获客详情',leftHidden:true,father:'/findC/wxData', insPower: insPowerHash['dmp_c_wx'] },
          },
          {
            path: '/findC/baiduData',
            name: '百度关键词获客C',
            component: () => import('@/views/layout/findC/baiduData.vue'),
            meta: { title: '百度关键词获客',icon:nav7_i,icon_a:nav7_a_i,keepAlive:true, insPower: insPowerHash['dmp_c_baidu'] },
          },
          {
            path: '/findC/baiduDataDetails',
            name: '百度关键词获客C详情',
            component: () => import('@/views/layout/findC/baiduDataDetails.vue'),
            meta: { title: '百度关键词获客详情',leftHidden:true,father:'/findC/baiduData', insPower: insPowerHash['dmp_c_baidu'] },
          },
          {
            path: '/findC/bigData',
            name: '大数据获客C',
            component: () => import('@/views/layout/findC/bigData.vue'),
            meta: { title: '大数据获客',icon:nav8_i,icon_a:nav8_a_i,keepAlive:true, insPower: insPowerHash['dmp_c_bigdata'] },
          },
          {
            path: '/findC/bigDataDetails',
            name: '大数据获客C详情',
            component: () => import('@/views/layout/findC/bigDataDetails.vue'),
            meta: { title: '大数据获客详情',leftHidden:true,father:'/findC/bigData', insPower: insPowerHash['dmp_c_bigdata'] },
          },
          {
            path: '/findC/fourData',
            name: '400获客C',
            component: () => import('@/views/layout/findC/fourData.vue'),
            meta: { title: '400获客',icon:nav9_i,icon_a:nav9_a_i,keepAlive:true, insPower: insPowerHash['dmp_c_400'] },
          },
          {
            path: '/findC/fourDataDetails',
            name: '400获客C详情',
            component: () => import('@/views/layout/findC/fourDataDetails.vue'),
            meta: { title: '400获客详情',leftHidden:true,father:'/findC/fourData', insPower: insPowerHash['dmp_c_400'] },
          },
          {
            path: '/findC/biddingData',
            name: '竞价获客C',
            component: () => import('@/views/layout/findC/biddingData.vue'),
            meta: { title: '竞价获客',icon:nav10_i,icon_a:nav10_a_i,keepAlive:true, insPower: insPowerHash['dmp_c_bidding'] },
          },
          {
            path: '/findC/biddingDataDetails',
            name: '竞价获客C详情',
            component: () => import('@/views/layout/findC/biddingDataDetails.vue'),
            meta: { title: '竞价获客详情',leftHidden:true,father:'/findC/biddingData', insPower: insPowerHash['dmp_c_bidding'] },
          },
          {
            path: '/findC/msgData',
            name: '短信获客C',
            component: () => import('@/views/layout/findC/msgData.vue'),
            meta: { title: '短信获客',icon:nav11_i,icon_a:nav11_a_i,keepAlive:true, insPower: insPowerHash['dmp_c_sms'] },
          },
          {
            path: '/findC/msgDataDetails',
            name: '短信获客C详情',
            component: () => import('@/views/layout/findC/msgDataDetails.vue'),
            meta: { title: '短信获客详情',leftHidden:true,father:'/findC/msgData', insPower: insPowerHash['dmp_c_sms'] },
          },
        ]
      },
      {
        path: '/myData',
        name: '我的数据源',
        redirect: '/myData/up2b',
        meta: { title: '我的数据源', insPower: insPowerHash['dmp_data'] },
        component: () => import('@/views/layout/myData/myData.vue'),
        children:[
          {
            path: '/myData/up2b',
            name: '上传2B数据',
            component: () => import('@/views/layout/myData/up2b.vue'),
            meta: { title: '上传2B数据' ,icon:myData2b ,icon_a:myData2b_a, insPower: insPowerHash['dmp_data_b'] },
          },
          {
            path: '/myData/up2bDetails',
            name: '上传2B数据详情',
            component: () => import('@/views/layout/myData/up2bDetails.vue'),
            meta: { title: '上传2B数据详情',leftHidden:true ,father: '/myData/up2b', insPower: insPowerHash['dmp_data_b'] },
          },
          {
            path: '/myData/up2c',
            name: '上传2C数据',
            component: () => import('@/views/layout/myData/up2c.vue'),
            meta: { title: '上传2C数据', icon:myData2c ,icon_a:myData2c_a, insPower: insPowerHash['dmp_data_c'] },
          },
          {
            path: '/myData/up2cDetails',
            name: '上传2C数据详情',
            component: () => import('@/views/layout/myData/up2cDetails.vue'),
            meta: { title: '上传2B数据详情',leftHidden:true, father:'/myData/up2c', insPower: insPowerHash['dmp_data_c'] },
          },
        ]
      },
      {
        path: '/seekPathPro',
        name: '找渠道/项目',
        redirect: '/seekPathPro/seekPath',
        meta: { title: '找渠道/项目', insPower: insPowerHash['dmp_find'] },
        component: () => import('@/views/layout/seekPathPro/seekPathPro.vue'),
        children:[
          {
            path: '/seekPathPro/seekPath',
            name: '找渠道',
            component: () => import('@/views/layout/seekPathPro/seekPath.vue'),
            meta: { title: '找渠道' ,icon:seekpath ,icon_a:seekpath_a, insPower: insPowerHash['dmp_find_channel'] },
          },
          {
            path: '/seekPathPro/seekPathDetail',
            name: '找渠道详情',
            component: () => import('@/views/layout/seekPathPro/seekPathDetail.vue'),
            meta: { title: '找渠道详情',leftHidden:true ,father: '/seekPathPro/seekPath', insPower: insPowerHash['dmp_find_channel'] },
          },
          {
            path: '/seekPathPro/seekProject',
            name: '找项目',
            component: () => import('@/views/layout/seekPathPro/seekProject.vue'),
            meta: { title: '找项目', icon:seekpro ,icon_a:seekpro_a, insPower: insPowerHash['dmp_find_project'] },
          },
          {
            path: '/seekPathPro/seekProjectDetail',
            name: '找项目详情',
            component: () => import('@/views/layout/seekPathPro/seekProjectDetail.vue'),
            meta: { title: '找项目详情',leftHidden:true, father:'/seekPathPro/seekProject', insPower: insPowerHash['dmp_find_project'] },
          },
        ]
      },
      {
        path: '/seekAbroad',
        name: '找海外',
        redirect: '/seekAbroad/buyer',
        meta: { title: '找海外', insPower: insPowerHash['dmp_overseas'] },
        component: () => import('@/views/layout/seekAbroad/seekAbroad.vue'),
        children:[
          {
            path: '/seekAbroad/buyer',
            name: '采购商',
            component: () => import('@/views/layout/seekAbroad/buyer.vue'),
            meta: { title: '采购商' ,icon:buyer ,icon_a:buyer_a, insPower: insPowerHash['dmp_overseas_purchase'] },
          },
          {
            path: '/seekAbroad/buyerDetail',
            name: '采购商详情',
            component: () => import('@/views/layout/seekAbroad/buyerDetail.vue'),
            meta: { title: '采购商详情',leftHidden:true ,father: '/seekAbroad/buyer', insPower: insPowerHash['dmp_overseas_purchase']},
          },
          {
            path: '/seekAbroad/supplier',
            name: '供应商',
            component: () => import('@/views/layout/seekAbroad/supplier.vue'),
            meta: { title: '供应商', icon:supplier ,icon_a:supplier_a, insPower: insPowerHash['dmp_overseas_supplier'] },
          },
          {
            path: '/seekAbroad/supplierDetail',
            name: '供应商详情',
            component: () => import('@/views/layout/seekAbroad/supplierDetail.vue'),
            meta: { title: '供应商详情',leftHidden:true, father:'/seekAbroad/supplier', insPower: insPowerHash['dmp_overseas_supplier'] },
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