const BASE_URL = 'https://park-net-api.onrender.com/'
import { useAuthStore } from '@/store/authStore'

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export const login = async (data) => {
  const response = await fetch(BASE_URL + 'auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(data),
  })

  if (!response.ok) {
    return toast.error(
      'Esta cuenta no esta registrada o no se encuentra activa o la contraseña es incorrecta',
      {
        toastId: 'login-reject',
      },
    )
  }

  const res = await response.json()
  await authenticate(res.access_token)
  console.log('Token:', res.access_token)
}

export const register = async (data) => {
  const res = await fetch(BASE_URL + 'auth/register', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    throw new Error()
  }
  return res
}

const authenticate = async (token) => {
  fetch(BASE_URL + 'auth/me', {
    method: 'GET', // or POST, PUT, etc.
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return response.json()
    })
    .then((data) => {
      const auth = useAuthStore()
      console.log(data)
      auth.saveToken(token, data)
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}

const getRecuest = async (token) => {
  fetch(BASE_URL + 'request/me', {
    method: 'GET', // or POST, PUT, etc.
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return response.json()
    })
    .then((data) => {
      console.log(data)
      return data
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}
