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
        class="md:mr-3"
        :text="password"
        id="password"
        name="Contraseña"
        :ro="edit"
      />
    </div>
    <div class="flex space-x-3 mt-3">
      <BasicButton
        @click="toggleEdit"
        action='Editar'
        :comp="Edit"
      />
      <BasicButton
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

let edit = ref(true)
let name = 'Greison Rey Castilla Carmona'
let id = '1043634932'
let email = 'grisoncastilla@gmail.com'
let phone = '3014649618'
let apart = 'p2 - #2'
let password = 'UnaContraseñaSegura'

function toggleEdit() {
  edit.value = !edit.value
}

let inputs = ref([
  { text: name, id: 'name', name: 'Nombre', ro: edit },
  { text: id, id: 'id', name: 'Identificación', ro: true },
  { text: email, id: 'email', name: 'Correo electrónico', ro: edit },
  { text: phone, id: 'phone', name: 'Número teléfonico', ro: edit },
  { text: apart, id: 'apartment', name: 'Apartamento', ro: true },
])
</script>

<style lang="scss" scoped>
</style>