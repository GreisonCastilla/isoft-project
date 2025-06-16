const BASE_URL = 'https://park-net-api.onrender.com/'
import { useAuthStore } from '@/store/authStore'

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export const changeState = async (id) => {
  const res = await fetch(BASE_URL + 'users/' + id, {
    method: 'POST',
    headers: { 'Content-type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({
      status: 'active',
    }),
  })
  if (!res.ok) throw new Error('Error al iniciar')
  return await res.json()
}
