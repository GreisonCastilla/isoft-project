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

export const authenticate = async (token) => {
  const auth = useAuthStore()
  try {
    const response = await fetch(BASE_URL + 'auth/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    auth.saveToken(token, data)
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export const userInfo = async () => {
  const auth = useAuthStore()
  try {
    const response = await fetch(BASE_URL + `users/${auth.user.cc}`, {
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

export const postRequest = async (data) => {
  const auth = useAuthStore()
  const res = await fetch(BASE_URL + 'requests/', {
    method: 'POST',
    headers: { 'Content-type': 'application/json', Authorization: `Bearer ${auth.token}` },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    return toast.error(
      'No se pudo registrar la solicitud, solo se puede realizar una solicitud por cuenta',
      {
        toastId: 'request-reject',
      },
    )
  }
  return toast.success('Se registro la solicitud correctamente', {
    toastId: 'request-reject',
  })
}

export const getRecuest = async () => {
  const auth = useAuthStore()
  try {
    const response = await fetch(BASE_URL + `requests/me`, {
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

export const getParkingZone = async (period) => {
  const auth = useAuthStore()

  try {
    const response = await fetch(BASE_URL + `lottery/my-assignment/${period}`, {
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

export const updateUser = async (data) => {
  const auth = useAuthStore()
  const res = await fetch(BASE_URL + 'users/me', {
    method: 'PUT',
    headers: { 'Content-type': 'application/json', Authorization: `Bearer ${auth.token}` },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    toast.error('Hubo un problema al actualizar sus datos', {
      toastId: 'update-user',
    })
    throw new Error()
  }
  return toast.success('Se actualizaron correctamente sus datos', {
    toastId: 'update-user',
  })
}
