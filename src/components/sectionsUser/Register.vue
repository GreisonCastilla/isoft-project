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

let inputs = ref([
  { id: 'name', name: 'Nombre' },
  { id: 'id', name: 'Identificación' },
  { id: 'email', name: 'Correo electrónico' },
  { id: 'phone', name: 'Número de teléfono' },
  { id: 'apartment', name: 'Apartamento' },
])
</script>

<style lang="scss" scoped>
</style>