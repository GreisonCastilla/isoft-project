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
      v-if="data == null || data == []"
      class="bg-gray-300 p-3 rounded-lg text-center"
    >
      <p>No se han realizado solicitudes</p>
    </div>

    <div
      v-else
      class="rounded-xl overflow-hidden "
    >
      <TableUser
        :titles="titles"
        :data="data"
      />
    </div>
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

import { getRecuest } from '@/api/user'

let showRequestPopup = ref(false)
let titles = ref(['id', 'Tipo de vehículo', 'Placa', 'Estado'])
let data = ref(null)
async function recuests() {
  data.value = await getRecuest()
}

recuests()
</script>

<style lang="scss" scoped>
</style>