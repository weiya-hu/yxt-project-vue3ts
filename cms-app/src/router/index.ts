import { createRouter, createWebHistory } from 'vue-router'


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
        meta: { title: '我的作品库' },
        children:[
          {
            path: '/myWork/article',
            name: '我的作品库-软文',
            component: () => import('@/views/layout/myWork/article.vue'),
            meta: { title: '软文' },
          },
          {
            path: '/myWork/images',
            name: '我的作品库-图片库',
            component: () => import('@/views/layout/myWork/images.vue'),
            meta: { title: '图片库' },
          },
          {
            path: '/myWork/poster',
            name: '我的作品库-海报库',
            component: () => import('@/views/layout/myWork/poster.vue'),
            meta: { title: '海报库' },
          },
          {
            path: '/myWork/video',
            name: '我的作品库-视频库',
            component: () => import('@/views/layout/myWork/video.vue'),
            meta: { title: '视频库' },
          },
        ]
      },
      {
        path: '/custom',
        name: '个性化内容库',
        redirect: '/custom/article',
        component: () => import('@/views/layout/custom/custom.vue'),
        meta: { title: '个性化内容库' },
        children:[
          {
            path: '/custom/article',
            name: '个性化内容库-软文',
            component: () => import('@/views/layout/custom/article.vue'),
            meta: { title: '软文' },
          },
          {
            path: '/custom/images',
            name: '个性化内容库-图片库',
            component: () => import('@/views/layout/custom/images.vue'),
            meta: { title: '图片库' },
          },
          {
            path: '/custom/poster',
            name: '个性化内容库-海报库',
            component: () => import('@/views/layout/custom/poster.vue'),
            meta: { title: '海报库' },
          },
          {
            path: '/custom/video',
            name: '个性化内容库-视频库',
            component: () => import('@/views/layout/custom/video.vue'),
            meta: { title: '视频库' },
          },
        ]
      },
      {
        path: '/formwork',
        name: '模板内容库',
        redirect: '/formwork/images',
        component: () => import('@/views/layout/formwork/formwork.vue'),
        meta: { title: '模板内容库' },
        children:[
          {
            path: '/formwork/images',
            name: '模板内容库-图片库',
            component: () => import('@/views/layout/formwork/images.vue'),
            meta: { title: '图片库' },
          },
          {
            path: '/formwork/poster',
            name: '模板内容库-海报库',
            component: () => import('@/views/layout/formwork/poster.vue'),
            meta: { title: '海报库' },
          },
          {
            path: '/formwork/video',
            name: '模板内容库-视频库',
            component: () => import('@/views/layout/formwork/video.vue'),
            meta: { title: '视频库' },
          },
          {
            path: '/formwork/H5',
            name: '模板内容库-H5模板',
            component: () => import('@/views/layout/formwork/H5.vue'),
            meta: { title: 'H5模板' },
          },
        ]
      },
      {
        path: '/resource',
        name: '资源内容库',
        redirect: '/resource/article',
        component: () => import('@/views/layout/resource/resource.vue'),
        meta: { title: '资源内容库' },
        children:[
          {
            path: '/resource/article',
            name: '资源内容库-软文库',
            component: () => import('@/views/layout/resource/article.vue'),
            meta: { title: '软文库' },
          },
          {
            path: '/resource/PDF',
            name: '资源内容库-PDF库',
            component: () => import('@/views/layout/resource/PDF.vue'),
            meta: { title: 'PDF库' },
          },
          {
            path: '/resource/video',
            name: '资源内容库-视频库',
            component: () => import('@/views/layout/resource/video.vue'),
            meta: { title: '视频库' },
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

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title ? (to.meta.title as string) : '数智营销通'
  next()
})

export default router
