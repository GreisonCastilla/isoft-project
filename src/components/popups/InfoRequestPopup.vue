<template>
  <div
    @click="$emit('close')"
    class="fixed grid place-content-center top-0 left-0 z-11  h-full w-full bg-gray-600/50 "
  >
    <div
      @click.stop
      class=" flex flex-col rounded-xl bg-white relative space-y-1 w-[90vw] md:w-lg p-5 shadow-2xl opacity-100 "
    >
      <div class=" flex w-full place-content-between align-middle">
        <p class="text-xl mb-2 text-blue-600 ">
          <b>Solicitud {{ legible }}</b>
        </p>
        <X
          class="text-red-600 "
          @click="$emit('close')"
        />
      </div>

      <div class="flex flex-col space-y-3 mt-3 mb-3">
        <ShowInfo
          v-for="info in data"
          :key="info"
          :name="info.name"
          :description="info.description"
        />
      </div>

    </div>
  </div>
</template>

<script setup>
import ShowInfo from '../info/ShowInfo.vue'
import X from '../icons/X.vue'

const props = defineProps({
  request: Object,
})

defineEmits(['close'])
const date = new Date(props.request.updated_at)
const formated = new Intl.DateTimeFormat('es-CO').format(date)
const legible = parseInt(props.request.id.slice(-6), 16)
let data = [
  { name: 'Estado', description: props.request.status },
  { name: 'Fecha', description: formated },
  { name: 'Tipo de vehículo', description: props.request.vehicle_type },
  { name: 'Placa de vehículo', description: props.request.license_plate },
  { name: 'Descripción', description: props.request.description },
]
</script>

<style lang="scss" scoped>
</style>