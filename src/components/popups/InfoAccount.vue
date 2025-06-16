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
          <b>Cuenta {{ parseInt(request.id.slice(-6), 16)}}</b>
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
        <StateButton
          @click="changeStatus()"
          :status="request.status"
        />
        <RedButton
          @click="showConfirmPopup = true"
          action="Eliminar"
          :comp="DeleteIcon"
        />
      </div>

    </div>
    <ConfirmPopup
      @confirm="deleteAccount"
      @cancel="showConfirmPopup=false"
      v-if="showConfirmPopup"
      message="¿Seguro desea eliminar esta cuenta?"
    />
  </div>

</template>

<script setup>
import ShowInfo from '../info/ShowInfo.vue'
import DeleteIcon from '../icons/DeleteIcon.vue'
import X from '../icons/X.vue'
import RedButton from '../buttons/RedButton.vue'
import StateButton from '../buttons/StateButton.vue'
import ConfirmPopup from './ConfirmPopup.vue'
import { ref } from 'vue'
import { deleteUser } from '@/api/admin'
import { changeStateUser } from '@/api/admin'
const emit = defineEmits(['close'])

const props = defineProps({
  request: Object,
})

let showConfirmPopup = ref(false)

async function deleteAccount() {
  await deleteUser(props.request.cc)
  showConfirmPopup.value = false
  emit('close')
  location.reload()
}

async function changeStatus() {
  if (props.request.status === 'pending_approval') {
    await changeStateUser(props.request.id, 'active')
  } else {
    await changeStateUser(props.request.id, 'pending_approval')
  }
  location.reload()
}

let data = [
  { name: 'Nombre', description: props.request.full_name },
  { name: 'Identificación', description: props.request.cc + '' },
  { name: 'Correo electrónico', description: props.request.email },
  { name: 'Número de teléfono', description: props.request.phone_number + '' },
  { name: 'Apartamento', description: props.request.apartment },
]
</script>