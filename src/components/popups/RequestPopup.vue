<template>
  <div
    @click="$emit('close')"
    class="fixed grid place-content-center top-0 left-0  h-full w-full bg-gray-600/50 "
  >
    <div
      @click.stop
      class=" flex flex-col rounded-lg bg-white relative space-y-1 w-[90vw] md:w-lg p-5 shadow-2xl opacity-100 "
    >
      <div class=" flex w-full place-content-between align-middle">
        <p class="text-xl mb-2 text-blue-600 ">
          <b>Solicitar zona de parqueo</b>
        </p>
        <X
          class="text-red-600 "
          @click="$emit('close')"
        />
      </div>

      <div class="flex flex-col space-y-3 mt-3 mb-3">
        <RadioInput
          label="Tipo de vehículo"
          name="type"
          :options="options"
        />
        <BasicInput
          name="Placa del vehículo"
          id="plate"
        />
        <BasicTextArea
          name="Descripción"
          id="description"
        />
      </div>
      <BasicButton
        class="mt-2"
        action="Solicitar"
        :comp="RequestIcon"
      />
    </div>

  </div>
</template>

<script setup>
import X from '../icons/X.vue'
import BasicInput from '../input/BasicInput.vue'
import BasicTextArea from '../input/BasicTextArea.vue'
import RadioInput from '../input/RadioInput.vue'
import BasicButton from '../buttons/BasicButton.vue'
import RequestIcon from '../icons/RequestIcon.vue'

const options = [
  {
    name: 'Motocicleta',
    id: 'motorcycle',
  },
  {
    name: 'Automobil',
    id: 'car',
  },
]

const emit = defineEmits(['close'])
</script>

<style lang="scss" scoped>
</style>