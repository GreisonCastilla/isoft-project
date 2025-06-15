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
          ref="radioInput"
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
        @click="request()"
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
import 'vue3-toastify/dist/index.css'
import { toast } from 'vue3-toastify'
import { ref } from 'vue'

const radioInput = ref(null)

const options = [
  {
    name: 'Motocicleta',
    id: 'motorcycle',
  },
  {
    name: 'Automóvil',
    id: 'car',
  },
]

const emit = defineEmits(['close'])

function request() {
  let auxType = ''

  if (radioInput.value) {
    auxType = radioInput.value.sendValue()
  }

  if (auxType == '' || plate.value == '' || description.value == '') {
    toast.error('Complete todos los campos para realizar una solicitud', {
      toastId: 'empty-input-request',
    })
  } else {
    toast.success(`tipo de vehiculo: ${auxType}!`, {
      toastId: 'sucess-request',
    })
  }
}
</script>

<style lang="scss" scoped>
</style>