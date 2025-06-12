<template>
  <div class="flex flex-col rounded-xl p-6 shadow-[6px_6px_15px_rgba(0,0,0,0.3)]">
    <p class="text-xl mb-3 text-blue-600 ">
      <b>Solicitudes</b>
    </p>

    <div class="flex space-y-3 md:space-x-3 space-x-0 flex-wrap mb-4 ">
      <BasicButton
        @click="showRequestPopup = true"
        action="Realizar solicitud"
        :comp="RequestIcon"
      />
    </div>
    <p class="mb-2"><b>Estado de Solicitud</b></p>
    <div
      v-if="titles == null"
      class="bg-gray-300 p-3 rounded-lg text-center"
    >
      <p>No se han realizado solicitudes</p>
    </div>
    <TableUser
      v-else
      :titles="titles"
      :data="data"
    />
    <RequestPopup
      v-show="showRequestPopup"
      @close="showRequestPopup=false"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BasicButton from '../buttons/BasicButton.vue'
import RequestIcon from '../icons/RequestIcon.vue'
import RequestPopup from '../popups/RequestPopup.vue'
import TableUser from '../TableUser/TableUser.vue'

let showRequestPopup = ref(false)
let titles = ref(['id', 'Tipo de vehículo', 'Placa', 'Estado'])
let data = ref([
  {
    id: 1234,
    plate: 'AAA-123',
    type: 'Automobil',
    state: 'Pendiente',
    date: '02/03/2020',
    description: 'una descripcion convincente',
  },
  {
    id: 12345,
    plate: 'BBB-123',
    type: 'Motocicleta',
    state: 'Pendiente',
    date: '02/03/2020',
    description: 'me tropece mientras subia la escalera por lo que me encuentro incapacitado',
  },
])
</script>

<style lang="scss" scoped>
</style>