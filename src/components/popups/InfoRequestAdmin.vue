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
          v-if="verifyPending()"
          @click="aceptRequest()"
          action="Aceptar"
          :comp="AceptIcon"
        />
        <BasicButton
          v-else
          @click="pendingRequest"
          action="Colocar pendiente"
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
      @confirm="deleteR()"
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
import { changeState } from '@/api/admin'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { deleteRequest } from '@/api/admin'
const props = defineProps({
  request: Object,
})

const emit = defineEmits(['close'])

let showConfirmPopup = ref(false)

const date = new Date(props.request.updated_at)
const formated = new Intl.DateTimeFormat('es-CO').format(date)

let data = [
  { name: 'Estado', description: showStatus() },
  { name: 'Discapacidad', description: showDisability() },
  { name: 'Fecha', description: formated },
  { name: 'Tipo de vehículo', description: props.request.vehicle_type },
  { name: 'Placa de vehículo', description: props.request.license_plate },
  { name: 'Descripción', description: props.request.description },
]

function verifyPending() {
  return props.request.status === 'pending'
}

async function aceptRequest() {
  await changeState(props.request.id, 'accepted')
  toast.success('Se cambio el estado correctamente')
  location.reload()
}

async function pendingRequest() {
  await changeState(props.request.id, 'pending')
  toast.success('Se cambio el estado correctamente')
  location.reload()
}

function showDisability() {
  if (props.request.disability) {
    return 'Si'
  }
  return 'No'
}

function showStatus() {
  let status = props.request.status
  if (status === 'pending') {
    return 'Pendiente'
  } else if (status === 'accepted') {
    return 'Aceptado'
  }
  return 'Rechazado'
}

async function deleteR() {
  await deleteRequest(props.request.id)
  emit('close')
  location.reload()
}
</script>