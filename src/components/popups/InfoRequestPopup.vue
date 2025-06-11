<template>
  <div
    @click="$emit('close')"
    class="fixed grid place-content-center top-0 left-0  h-full w-full bg-gray-600/50 "
  >
    <div
      @click.stop
      class=" flex flex-col rounded-xl bg-white relative space-y-1 w-[90vw] md:w-lg p-5 shadow-2xl opacity-100 "
    >
      <div class=" flex w-full place-content-between align-middle">
        <p class="text-xl mb-2 text-blue-600 ">
          <b>Solicitud {{ request.id }}</b>
        </p>
        <X
          class="text-red-600 "
          @click="$emit('close')"
        />
      </div>

      <div class="flex flex-col space-y-3 mt-3 mb-3">
        <ShowInfo
          name="Estado"
          :description="request.state"
        />

        <ShowInfo
          name="Fecha"
          :description="request.date"
        />

        <ShowInfo
          name="Tipo de vehículo"
          :description="request.type"
        />

        <ShowInfo
          name="Placa del vehículo"
          :description="request.plate"
        />

        <ShowInfo
          name="Descripción"
          :description="request.description"
        />
      </div>

    </div>
  </div>
</template>

<script setup>
import ShowInfo from '../input/ShowInfo.vue'
import X from '../icons/X.vue'

defineProps({
  request: Object,
})

defineEmits(['close'])
</script>

<style lang="scss" scoped>
</style>