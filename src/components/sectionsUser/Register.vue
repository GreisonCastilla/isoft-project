<template>
  <div class="flex flex-col border-gray-500 pt-3 border-t-2 ">

    <p class="text-xl mb-3 text-blue-600 ">
      <b>Registrar</b>
    </p>

    <div class="flex space-y-3 md:space-x-3 space-x-0 flex-wrap mb-3 place-content-center ">

      <BasicInput
        v-for="input in inputs"
        :key="input"
        :id="input.id"
        :type="input.type"
        :name="input.name"
      />

      <PasswordInput
        class="md:mr-3"
        id="password"
        name="Contraseña"
      />
      <PasswordInput
        class="md:mr-3"
        id="password2"
        name="Ingrese la contraseña nuevamente"
      />
    </div>
    <div class="flex space-x-3 mt-3">
      <BasicButton
        @click="verifyInputs"
        action='Registrar'
        :comp="Edit"
      />
    </div>

  </div>
</template>

<script setup>
import BasicButton from '../buttons/BasicButton.vue'
import BasicInput from '../input/BasicInput.vue'
import PasswordInput from '../input/PasswordInput.vue'
import Edit from '../icons/Edit.vue'
import { ref } from 'vue'
import { register } from '@/api/user'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

let inputs = ref([
  { id: 'full_name', name: 'Nombre', type: 'text' },
  { id: 'id', name: 'Identificación', type: 'number' },
  { id: 'email', name: 'Correo electrónico', type: 'email' },
  { id: 'phone', name: 'Número de teléfono', type: 'number' },
  { id: 'apartment', name: 'Apartamento', type: 'text' },
])

function verifyInputs() {
  let error = true

  if (
    full_name.value == '' ||
    id.value == '' ||
    email.value == '' ||
    phone.value == '' ||
    apartment.value == '' ||
    password.value == '' ||
    password2.value == ''
  ) {
    toast.error('Debe rellenar todos los campos')
  } else {
    if (id.value.length > 10 || id.value.length < 6) {
      toast.error('El tamaño de la identificación no debe ser mayor a 10 y menor que 6', {
        toastId: 'long-id',
      })
      error = false
    }
    if (phone.value.length != 10) {
      toast.error('El tamaño del número de telefono debe ser igual a 10', {
        toastId: 'long-cel',
      })
      error = false
    }
    if (validateEmail(email.value)) {
    } else {
      toast.error('El email debe seguir la estructura nombre@email.com', {
        toastId: 'email-structure',
      })
      error = false
    }
    if (password.value != password2.value) {
      toast.error('Las contraseñas son diferentes', {
        toastId: 'password-different',
      })
      error = false
    }
    if (error) {
      sendRegister()
    }
  }
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

async function sendRegister() {
  let data = {
    full_name: full_name.value,
    cc: id.value,
    email: email.value,
    phone_number: phone.value,
    apartment: apartment.value,
    password: password.value,
  }
  register(data)
    .then((res) => {
      clearInputs()
      toast.success(
        'Su cuenta ha sido registrada, por favor espere a que un administrador la habilite',
        {
          toastId: 'register-sucess',
        }
      )
    })
    .catch((err) => {
      toast.error('Ha habido un error al registrar', {
        toastId: 'register-error',
      })
    })
}

function clearInputs() {
  full_name.value = ''
  id.value = ''
  email.value = ''
  phone.value = ''
  apartment.value = ''
  password.value = ''
  password2.value = ''
}
</script>

<style lang="scss" scoped>
</style>