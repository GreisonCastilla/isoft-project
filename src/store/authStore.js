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
    updateUser(data) {
      this.user.full_name = data.full_name
      this.user.phone_number = data.phone_number
      this.user.email = data.email
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
