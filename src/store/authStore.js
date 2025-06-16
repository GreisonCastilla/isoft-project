import router from '@/router'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
  }),

  actions: {
    saveToken(token, user) {
      this.token = token

      this.user = user
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
