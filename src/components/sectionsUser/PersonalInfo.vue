<template>
  <div class="flex flex-col rounded-xl p-6 shadow-[6px_6px_15px_rgba(0,0,0,0.3)]">

    <p class="text-xl mb-3 text-blue-600 ">
      <b>Información personal</b>
    </p>

    <div class="flex space-y-3 md:space-x-3 space-x-0 flex-wrap mb-3 place-content-center ">
      <BasicInput
        v-for="input in inputs"
        :key="input"
        :text="input.text"
        :id="input.id"
        :name="input.name"
        :ro="input.ro"
      />

      <PasswordInput
        class="md:mr-3 "
        id="password"
        name="Cambiar contraseña"
      />
    </div>
    <div class="flex space-x-3 mt-3">
      <BasicButton
        @click="toggleEdit"
        action='Editar'
        :comp="Edit"
      />
      <BasicButton
        @click="update"
        action='Guardar'
        :comp="Save"
      />
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import BasicInput from '../input/BasicInput.vue'
import BasicButton from '../buttons/BasicButton.vue'
import PasswordInput from '../input/PasswordInput.vue'
import Save from '../icons/Save.vue'
import Edit from '../icons/Edit.vue'
import { userInfo } from '@/api/user'
import { useAuthStore } from '@/store/authStore'
import { updateUser } from '@/api/user'

const auth = useAuthStore()

let data = ref(null)
let inputs = ref(null)
async function getData() {
  data.value = await userInfo()
  inputs.value = [
    { text: data.value.full_name, id: 'fullName', name: 'Nombre', ro: edit },
    { text: data.value.cc, id: 'id', name: 'Identificación', ro: true },
    { text: data.value.email, id: 'email', name: 'Correo electrónico', ro: edit },
    { text: data.value.phone_number, id: 'phone', name: 'Número teléfonico', ro: edit },
    { text: data.value.apartment, id: 'apartment', name: 'Apartamento', ro: true },
  ]
}

getData()

let edit = ref(true)

function toggleEdit() {
  edit.value = !edit.value
}

async function update() {
  let data = null
  if (password.value == '') {
    data = { full_name: fullName.value, email: email.value, phone_number: phone.value }
  } else {
    data = {
      full_name: fullName.value,
      email: email.value,
      phone_number: phone.value,
      password: password.value,
    }
  }
  auth.updateUser(data)
  updateUser(data)
}
</script>

<style lang="scss" scoped>
</style>