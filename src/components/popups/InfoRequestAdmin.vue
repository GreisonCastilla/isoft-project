<template>
  <div
    @click="$emit('close')"
    class="fixed grid place-content-center top-0 left-0 z-11  h-full w-full bg-gray-600/50 "
  >
    <div
      @click.stop
      class=" flex flex-col rounded-xl bg-white relative space-y-1 w-[90vw] md:w-lg p-6 shadow-2xl opacity-100 "
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
          v-for="info in data"
          :key="info"
          :name="info.name"
          :description="info.description"
        />
      </div>
      <div class="flex space-x-3 mt-3">
        <BasicButton
          action="Aceptar"
          :comp="AceptIcon"
        />
        <RedButton
          @click="showConfirmPopup=true"
          action="Eliminar"
          :comp="DeleteIcon"
        />
      </div>

    </div>
    <ConfirmPopup
      v-if="showConfirmPopup"
      @confirm="deleteRequest()"
      @cancel="showConfirmPopup=false"
      message="¿Seguro que desea eliminar esta solicitud?"
    />
  </div>
</template>

<script setup>
import AceptIcon from '../icons/AceptIcon.vue'
import ShowInfo from '../info/ShowInfo.vue'
import DeleteIcon from '../icons/DeleteIcon.vue'
import X from '../icons/X.vue'
import RedButton from '../buttons/RedButton.vue'
import BasicButton from '../buttons/BasicButton.vue'
import ConfirmPopup from './ConfirmPopup.vue'
import { ref } from 'vue'

const props = defineProps({
  request: Object,
})

const emit = defineEmits(['close'])

let showConfirmPopup = ref(false)

let data = [
  { name: 'Estado', description: props.request.state },
  { name: 'Pago el mes pasado', description: props.request.lastMonth },
  { name: 'Discapacidad', description: props.request.disability },
  { name: 'Fecha', description: props.request.date },
  { name: 'Tipo de vehículo', description: props.request.type },
  { name: 'Placa de vehículo', description: props.request.plate },
  { name: 'Descripción', description: props.request.description },
]

function deleteRequest() {
  alert('Solicitud eliminada')
  emit('close')
  showConfirmPopup.value = false
}
</script>