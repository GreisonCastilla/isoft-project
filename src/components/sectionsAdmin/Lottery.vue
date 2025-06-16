<template>
  <div class="flex flex-col rounded-xl p-6 shadow-[6px_6px_15px_rgba(0,0,0,0.3)]">

    <p class="text-xl mb-3 text-blue-600 ">
      <b>Sorteo</b>
    </p>
    <div class="flex space-y-3  flex-wrap md:flex-nowrap md:space-y-0 md:space-x-3 mb-3">
      <BasicButton
        @click="lottery"
        action="Sortear zonas de parqueo"
      />
      <Info message="El sorteo solo se puede realizar una vez al mes" />
    </div>

    <p class="text-xl mb-3 text-blue-600 ">
      <b>Resultado de {{ month }}</b>
    </p>
    <div class="rounded-xl overflow-hidden ">
      <TableLottery
        :titles="titles"
        :data="data.winners"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Info from '../info/Info.vue'
import TableLottery from '../TableLottery/TableLottery.vue'
import BasicButton from '../buttons/BasicButton.vue'
import { executeLottery } from '@/api/admin'
import { getLottery } from '@/api/admin'
let titles = ['Identificación', 'Nombre', 'Apartamento', 'Zona de Parqueo']

const date = new Date()
const month = date.toLocaleDateString('es-ES', { month: 'long' })

async function lottery() {
  const fecha = new Date()

  const anio = fecha.getFullYear()
  const mes = String(fecha.getMonth() + 1).padStart(2, '0') // Enero = 0

  const formato = `${anio}-${mes}`
  executeLottery(formato)
}

let data = ref([])

async function getData() {
  const fecha = new Date()

  const anio = fecha.getFullYear()
  const mes = String(fecha.getMonth() + 1).padStart(2, '0') // Enero = 0

  const formato = `${anio}-${mes}`
  data.value = await getLottery(formato)
  console.log(data.value.winners)
}

getData()
</script>

<style lang="scss" scoped>
</style>