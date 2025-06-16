const BASE_URL = 'https://park-net-api.onrender.com/'
import { useAuthStore } from '@/store/authStore'

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export const changeState = async (id, status) => {
  const auth = useAuthStore()
  const res = await fetch(BASE_URL + `requests/${id}/status`, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json', Authorization: `Bearer ${auth.token}` },
    body: JSON.stringify({
      status: status,
    }),
  })
  if (!res.ok) throw new Error('Error al iniciar')
  return await res.json()
}

export const getRequests = async (period) => {
  const auth = useAuthStore()
  try {
    const response = await fetch(BASE_URL + `requests/`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.token}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export const getUsers = async () => {
  const auth = useAuthStore()
  try {
    const response = await fetch(BASE_URL + `users/?role_filter=residente&skip=0&limit=100`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.token}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export const getLottery = async (period) => {
  const auth = useAuthStore()
  try {
    const response = await fetch(BASE_URL + `lottery/${period}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.token}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export const changeStateUser = async (id, status) => {
  const auth = useAuthStore()
  const res = await fetch(BASE_URL + `users/${id}`, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json', Authorization: `Bearer ${auth.token}` },
    body: JSON.stringify({
      status: status,
    }),
  })
  if (!res.ok) throw new Error('Error al iniciar')
  return await res.json()
}

export const executeLottery = async (period) => {
  const auth = useAuthStore()
  const res = await fetch(BASE_URL + `lottery/execute`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json', Authorization: `Bearer ${auth.token}` },
    body: JSON.stringify({
      num_car_spots: 10,
      num_moto_spots: 10,
      period: period,
    }),
  })
  if (!res.ok) {
    toast.error('No se pudo ejecutar el sorteo')
  } else {
    toast.success('se ejecuto el sorteo correctamente')
  }

  return
}

export const deleteUser = async (id) => {
  const auth = useAuthStore()
  const res = await fetch(BASE_URL + `users/${id}`, {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json', Authorization: `Bearer ${auth.token}` },
  })
  if (!res.ok) {
    toast.error('No se pudo eliminar la cuenta correctamente')
  } else {
    toast.success('Se elimino la cuenta correctamente')
  }
  return await res.json()
}

export const deleteRequest = async (id) => {
  const auth = useAuthStore()
  const res = await fetch(BASE_URL + `requests/${id}`, {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json', Authorization: `Bearer ${auth.token}` },
  })
  if (!res.ok) {
    toast.error('No se pudo eliminar la solicitud correctamente')
  } else {
    toast.success('Se elimino la solicitud correctamente')
  }
  return await res.json()
}
