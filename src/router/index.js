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
      meta: { requiresAuth: true, roles: ['admin'] },
    },
    {
      path: '/ControlParkNetUser',
      component: () => import('../views/User/UserView.vue'),
      meta: { requiresAuth: true, roles: ['user'] },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  const { user } = auth

  if (!user.isAuthenticated && to.meta.requiresAuth) {
    return next('/')
  }

  if (to.path === '/ControlParkNet') {
    if (user.role === 'admin') return next('/ControlParkNetAdmin')
    if (user.role === 'user') return next('/ControlParkNetUser')
    return next('/')
  }

  // Verificación de roles permitidos en meta
  if (to.meta.roles && !to.meta.roles.includes(user.role)) {
    return next('/') // o a una vista de "no autorizado"
  }

  next()
})

export default router
