<template>
  <div class="flex flex-col max-h-[80vh] rounded-xl p-6 shadow-[6px_6px_15px_rgba(0,0,0,0.3)]">
    <p class="text-xl mb-3 text-blue-600 ">
      <b>Cuentas</b>
    </p>
    <info
      class="mb-3"
      message="Puede clicar cada cuenta para ver en detalle o eliminarla."
    />
    <div class="rounded-xl overflow-hidden ">
      <TableAccount
        v-if="data!=null"
        :titles="titles"
        :data="data"
      />
      <div
        v-else
        class="p-4 bg-gray-300 text-center"
      >
        <p>No hay cuentas disponibles</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Info from '../info/Info.vue'
import TableAccount from '../TableAccount/TableAccount.vue'

let titles = ['Nombre', 'Identificación', 'Correo', 'Número de teléfono', 'Apartamento', 'Estado']

let data = ref([
  {
    name: 'Greison Rey Castilla Carmona',
    id: Math.random(),
    email: 'gcastillac@gmail.com',
    tel: 3207152725,
    apart: 'p2-17',
    state: true,
  },
])
</script>

<style lang="scss" scoped>
</style>