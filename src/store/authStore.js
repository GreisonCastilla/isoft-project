import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref({
    name: 'Juan',
    role: 'user', // puede ser 'admin' o 'user'
    isAuthenticated: true,
  })

  const logout = () => {
    user.value = { name: '', role: '', isAuthenticated: false }
  }

  return { user, logout }
})
