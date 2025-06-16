<template>
  <div class="w-full place-items-center rounded-xl p-6 shadow-[6px_6px_15px_rgba(0,0,0,0.3)]">

    <div class="place-items-center p-4">
      <p>Tu zona de parqueo este mes es</p>
      <div
        v-if="parkingZone.length != 0"
        class="w-full text-center mt-2 text-white bg-blue-600 p-4 rounded-xl text-4xl"
      >
        <b>{{ parkingZone[0].spot }}</b>
      </div>
      <div
        v-else
        class="w-full text-center mt-2 text-white bg-gray-300 p-4 rounded-xl text-4xl"
      >
        No se han realizado sorteos
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getParkingZone } from '@/api/user'

let parkingZone = ref([])

async function get() {
  const fecha = new Date()

  const anio = fecha.getFullYear()
  const mes = String(fecha.getMonth() + 1).padStart(2, '0') // Enero = 0

  const formato = `${anio}-${mes}`

  let aux = await getParkingZone(formato)
  parkingZone.value = aux
}

get()
</script>

<style lang="scss" scoped>
</style>