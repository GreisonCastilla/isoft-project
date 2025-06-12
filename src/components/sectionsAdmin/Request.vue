<template>
  <div class="flex flex-col max-h-[80vh] rounded-xl p-6 shadow-[6px_6px_15px_rgba(0,0,0,0.3)] ">
    <p class="text-xl mb-3 text-blue-600 ">
      <b>Solicitudes</b>
    </p>
    <info message="Puede clicar cada solicitud para ver en detalle o eliminar la solicitud." />
    <div class="rounded-lg overflow-hidden ">
      <TableRequest
        class="mt-3"
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
let titles = ['Id', 'Tipo de vehículo', 'Placa', 'Discapacidad', 'Mes pasado', 'Estado']

let data = ref([
  {
    id: 1,
    plate: 'AAA-123',
    type: 'Automobil',
    state: 'Pendiente',
    date: '02/03/2020',
    description: 'una descripcion convincente',
    lastMonth: 'Si',
    disability: 'Si',
  },
  {
    id: 2,
    plate: 'AAA-123',
    type: 'Automobil',
    state: 'Pendiente',
    date: '02/03/2020',
    description: 'una descripcion convincente',
    lastMonth: 'Si',
    disability: 'Si',
  },
  {
    id: 3,
    plate: 'AAA-123',
    type: 'Automobil',
    state: 'Pendiente',
    date: '02/03/2020',
    description: 'una descripcion convincente',
    lastMonth: 'Si',
    disability: 'Si',
  },
  {
    id: 4,
    plate: 'AAA-123',
    type: 'Automobil',
    state: 'Pendiente',
    date: '02/03/2020',
    description: 'una descripcion convincente',
    lastMonth: 'Si',
    disability: 'Si',
  },
  {
    id: 5,
    plate: 'AAA-123',
    type: 'Automobil',
    state: 'Pendiente',
    date: '02/03/2020',
    description: 'una descripcion convincente',
    lastMonth: 'Si',
    disability: 'Si',
  },
  {
    id: 6,
    plate: 'AAA-123',
    type: 'Automobil',
    state: 'Pendiente',
    date: '02/03/2020',
    description: 'una descripcion convincente',
    lastMonth: 'Si',
    disability: 'Si',
  },

  {
    id: 7,
    plate: 'AAA-123',
    type: 'Automobil',
    state: 'Pendiente',
    date: '02/03/2020',
    description: 'una descripcion convincente',
    lastMonth: 'Si',
    disability: 'Si',
  },
  {
    id: 8,
    plate: 'AAA-123',
    type: 'Automobil',
    state: 'Pendiente',
    date: '02/03/2020',
    description: 'una descripcion convincente',
    lastMonth: 'Si',
    disability: 'Si',
  },
  {
    id: 9,
    plate: 'AAA-123',
    type: 'Automobil',
    state: 'Pendiente',
    date: '02/03/2020',
    description: 'una descripcion convincente',
    lastMonth: 'Si',
    disability: 'Si',
  },
  {
    id: 10,
    plate: 'AAA-123',
    type: 'Automobil',
    state: 'Pendiente',
    date: '02/03/2020',
    description: 'una descripcion convincente',
    lastMonth: 'Si',
    disability: 'Si',
  },
  {
    id: 10,
    plate: 'AAA-123',
    type: 'Automobil',
    state: 'Pendiente',
    date: '02/03/2020',
    description: 'una descripcion convincente',
    lastMonth: 'Si',
    disability: 'Si',
  },
  {
    id: 10,
    plate: 'AAA-123',
    type: 'Automobil',
    state: 'Pendiente',
    date: '02/03/2020',
    description: 'una descripcion convincente',
    lastMonth: 'Si',
    disability: 'Si',
  },
  {
    id: 10,
    plate: 'AAA-123',
    type: 'Automobil',
    state: 'Pendiente',
    date: '02/03/2020',
    description: 'una descripcion convincente',
    lastMonth: 'Si',
    disability: 'Si',
  },
  {
    id: 10,
    plate: 'AAA-123',
    type: 'Automobil',
    state: 'Pendiente',
    date: '02/03/2020',
    description: 'una descripcion convincente',
    lastMonth: 'Si',
    disability: 'Si',
  },
])
</script>

<style lang="scss" scoped>
</style>