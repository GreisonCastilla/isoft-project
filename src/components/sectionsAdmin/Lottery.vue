<template>
  <div class="flex flex-col rounded-xl p-6 shadow-[6px_6px_15px_rgba(0,0,0,0.3)]">

    <p class="text-xl mb-3 text-blue-600 ">
      <b>Sorteo</b>
    </p>
    <div class="flex space-y-3  flex-wrap md:flex-nowrap md:space-y-0 md:space-x-3 mb-3">
      <BasicButton action="Sortear zonas de parqueo" />
      <Info message="El sorteo solo se puede realizar una vez al mes" />
    </div>

    <p class="text-xl mb-3 text-blue-600 ">
      <b>Resultado de {{ month }}</b>
    </p>
    <div class="rounded-xl overflow-hidden ">
      <TableLottery
        :titles="titles"
        :data="data"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Info from '../info/Info.vue'
import TableLottery from '../TableLottery/TableLottery.vue'
import BasicButton from '../buttons/BasicButton.vue'
let titles = ['Identificación', 'Nombre', 'Apartamento', 'Zona de Parqueo']

const date = new Date()
const month = date.toLocaleDateString('es-ES', { month: 'long' })

let data = ref([
  {
    id: 1123,
    name: 'Greison Rey Castilla Carmona',
    apart: '#17-2',
    parkingZone: 'p2-12',
  },
])
</script>

<style lang="scss" scoped>
</style>