<template>
  <div class="flex flex-col rounded-lg shadow-lg p-6">
    <p class="text-xl mb-3 text-blue-600 ">
      <b>Solicitudes</b>
    </p>

    <div class="flex space-y-3 md:space-x-3 space-x-0 flex-wrap mb-3 ">
      <BasicButton
        action="Realizar solicitud"
        :comp="RequestIcon"
      />
    </div>
    <p class="mb-2"><b>Estado de Solicitud</b></p>
    <div
      v-if="request == null"
      class="bg-gray-300 p-3 rounded-lg text-center"
    >
      <p>No se han realizado solicitudes</p>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import BasicButton from '../buttons/BasicButton.vue'
import RequestIcon from '../icons/RequestIcon.vue'

let request = ref(null)
</script>

<style lang="scss" scoped>
</style>