import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store/authStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/ControlParkNet',
      redirect: '',
    },
    {
      path: '/ControlParkNetAdmin',
      component: () => import('../views/Admin/AdminView.vue'),
      meta: { requiresAuth: true, roles: ['administrador'] },
    },
    {
      path: '/ControlParkNetUser',
      component: () => import('../views/User/UserView.vue'),
      meta: { requiresAuth: true, roles: ['residente'] },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()

  if (auth.token == null && to.meta.requiresAuth) {
    return next('/')
  }

  if (to.path === '/ControlParkNet' || (auth.token && to.path == '/')) {
    if (auth.user.role == 'administrador') return next('/ControlParkNetAdmin')
    if (auth.user.role == 'residente') return next('/ControlParkNetUser')
    return next('/')
  }

  if (to.meta.roles && !to.meta.roles.includes(auth.user.role)) {
    return next('/') // o a una vista de "no autorizado"
  }

  next()
})

export default router
