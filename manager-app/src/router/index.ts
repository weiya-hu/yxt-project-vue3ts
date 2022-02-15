import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '',
    name: '',
    redirect: '/login',
  },
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
    redirect: '/test',
    children: [
      {
        path: '/test',
        name: 'Test',
        component: () => import('@/views/layout/test/test.vue'),
        meta: { title: '测试' },
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
