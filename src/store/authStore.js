import router from '@/router'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
  }),

  actions: {
    login(token, user) {
      this.token = token

      if (user === 'admin') {
        this.user = { name: user, role: 'admin', isAuthenticated: true }
      } else {
        this.user = { name: user, role: 'user', isAuthenticated: true }
      }
      router.replace('/ControlParkNet')
    },
    logout() {
      this.token = null
      this.user = null
      router.replace('/')
    },
  },

  persist: {
    storage: localStorage,
    paths: ['token', 'user'],
  },
})
