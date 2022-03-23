import { createRouter, createWebHistory } from 'vue-router'

import rw_i from '@/assets/images/rw.png'
import rw_a_i from '@/assets/images/rw_a.png'
import tp_i from '@/assets/images/tp.png'
import tp_a_i from '@/assets/images/tp_a.png'
import hb_i from '@/assets/images/hb.png'
import hb_a_i from '@/assets/images/hb_a.png'
import sp_i from '@/assets/images/sp.png'
import sp_a_i from '@/assets/images/sp_a.png'
import h5_i from '@/assets/images/h5.png'
import h5_a_i from '@/assets/images/h5_a.png'

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
      {
        path: '/myWork',
        name: '我的作品库',
        redirect: '/myWork/article',
        component: () => import('@/views/layout/myWork/myWork.vue'),
        meta: { title: '我的作品库',lv:1 },
        children:[
          {
            path: '/myWork/article',
            name: '我的作品库-软文',
            component: () => import('@/views/layout/myWork/article.vue'),
            meta: { title: '软文',icon:rw_i,icon_a:rw_a_i,keepAlive:true,lv:1 },
          },
          {
            path: '/myWork/articleAdd',
            name: '我的作品库-软文编辑/新增',
            component: () => import('@/views/layout/myWork/articleAdd.vue'),
            meta: { title: '软文编辑/新增',leftHidden:true,father:'/myWork/article',lv:1 },
          },
          {
            path: '/myWork/articleDetails',
            name: '我的作品库-软文详情',
            component: () => import('@/views/layout/myWork/articleDetails.vue'),
            meta: { title: '软文详情',leftHidden:true,father:'/myWork/article',lv:1 },
          },
          {
            path: '/myWork/images',
            name: '我的作品库-图片库',
            component: () => import('@/views/layout/myWork/images.vue'),
            meta: { title: '图片库',icon:tp_i,icon_a:tp_a_i,lv:1 },
          },
          {
            path: '/myWork/poster',
            name: '我的作品库-海报库',
            component: () => import('@/views/layout/myWork/poster.vue'),
            meta: { title: '海报库',icon:hb_i,icon_a:hb_a_i,lv:1 },
          },
          {
            path: '/myWork/video',
            name: '我的作品库-视频库',
            component: () => import('@/views/layout/myWork/video.vue'),
            meta: { title: '视频库',icon:sp_i,icon_a:sp_a_i,lv:1 },
          },
        ]
      },
      {
        path: '/custom',
        name: '个性化内容库',
        redirect: '/custom/article',
        component: () => import('@/views/layout/custom/custom.vue'),
        meta: { title: '个性化内容库',lv:1 },
        children:[
          {
            path: '/custom/article',
            name: '个性化内容库-软文',
            component: () => import('@/views/layout/custom/article.vue'),
            meta: { title: '软文',icon:rw_i,icon_a:rw_a_i,keepAlive:true,lv:1 },
          },
          {
            path: '/custom/articleDetails',
            name: '个性化内容库-软文详情',
            component: () => import('@/views/layout/myWork/articleDetails.vue'),
            meta: { title: '软文详情',leftHidden:true,father:'/custom/article',lv:1 },
          },
          {
            path: '/custom/images',
            name: '个性化内容库-图片库',
            component: () => import('@/views/layout/custom/images.vue'),
            meta: { title: '图片库',icon:tp_i,icon_a:tp_a_i,keepAlive:true,lv:1 },
          },
          {
            path: '/custom/imagesDetails',
            name: '个性化内容库-图片详情',
            component: () => import('@/views/layout/custom/imagesDetails.vue'),
            meta: { title: '图片详情',leftHidden:true,father:'/custom/images',lv:1 },
          },
          {
            path: '/custom/poster',
            name: '个性化内容库-海报库',
            component: () => import('@/views/layout/custom/poster.vue'),
            meta: { title: '海报库',icon:hb_i,icon_a:hb_a_i,keepAlive:true,lv:1 },
          },
          {
            path: '/custom/posterDetails',
            name: '个性化内容库-海报详情',
            component: () => import('@/views/layout/custom/posterDetails.vue'),
            meta: { title: '海报详情',leftHidden:true,father:'/custom/poster',lv:1 },
          },
          {
            path: '/custom/video',
            name: '个性化内容库-视频库',
            component: () => import('@/views/layout/custom/video.vue'),
            meta: { title: '视频库',icon:sp_i,icon_a:sp_a_i,keepAlive:true,lv:1 },
          },
          {
            path: '/custom/videoDetails',
            name: '个性化内容库-视频详情',
            component: () => import('@/views/layout/custom/videoDetails.vue'),
            meta: { title: '视频详情',leftHidden:true,father:'/custom/video',lv:1 },
          },
        ]
      },
      {
        path: '/formwork',
        name: '模板内容库',
        redirect: '/formwork/images',
        component: () => import('@/views/layout/formwork/formwork.vue'),
        meta: { title: '模板内容库',lv:1 },
        children:[
          {
            path: '/formwork/images',
            name: '模板内容库-图片库',
            component: () => import('@/views/layout/formwork/images.vue'),
            meta: { title: '图片库',icon:tp_i,icon_a:tp_a_i,lv:1 },
          },
          {
            path: '/formwork/poster',
            name: '模板内容库-海报库',
            component: () => import('@/views/layout/formwork/poster.vue'),
            meta: { title: '海报库',icon:hb_i,icon_a:hb_a_i,lv:1 },
          },
          {
            path: '/formwork/video',
            name: '模板内容库-视频库',
            component: () => import('@/views/layout/formwork/video.vue'),
            meta: { title: '视频库',icon:sp_i,icon_a:sp_a_i,lv:1 },
          },
          {
            path: '/formwork/H5',
            name: '模板内容库-H5模板',
            component: () => import('@/views/layout/formwork/H5.vue'),
            meta: { title: 'H5模板',icon:h5_i,icon_a:h5_a_i,lv:1 },
          },
        ]
      },
      {
        path: '/resource',
        name: '资源内容库',
        redirect: '/resource/article',
        component: () => import('@/views/layout/resource/resource.vue'),
        meta: { title: '资源内容库',lv:2 },
        children:[
          {
            path: '/resource/article',
            name: '资源内容库-软文库',
            component: () => import('@/views/layout/resource/article.vue'),
            meta: { title: '软文库',icon:rw_i,icon_a:rw_a_i,lv:2 },
          },
          {
            path: '/resource/PDF',
            name: '资源内容库-PDF库',
            component: () => import('@/views/layout/resource/PDF.vue'),
            meta: { title: 'PDF库',lv:2 },
          },
          {
            path: '/resource/video',
            name: '资源内容库-视频库',
            component: () => import('@/views/layout/resource/video.vue'),
            meta: { title: '视频库',icon:sp_i,icon_a:sp_a_i,lv:2 },
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