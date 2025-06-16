<template>
  <div class="flex flex-col max-h-[80vh] rounded-xl p-6 shadow-[6px_6px_15px_rgba(0,0,0,0.3)] ">
    <p class="text-xl mb-3 text-blue-600 ">
      <b>Solicitudes</b>
    </p>
    <info
      class="mb-3"
      message="Puede clicar cada solicitud para ver en detalle o eliminar la solicitud."
    />
    <div class="rounded-xl overflow-hidden ">
      <TableRequest
        :titles="titles"
        :data="data"
      />
    </div>

  </div>
</template>

<script setup>
import Info from '../info/Info.vue'
import TableRequest from '../TableRequest/TableRequest.vue'
import { ref } from 'vue'
import { getRequests } from '@/api/admin'

let titles = ['Id', 'Tipo de vehículo', 'Placa', 'Discapacidad', 'Estado']

let data = ref([])

async function getData() {
  const date = new Date()

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0') // Enero = 0

  const format = `${year}-${month}`
  console.log(format)
  data.value = await getRequests({ format })
}

getData()
</script>

<style lang="scss" scoped>
</style>