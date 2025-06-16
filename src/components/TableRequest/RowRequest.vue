<template>
  <tr
    @click="showInfo()"
    class=" text-center text-sm border-b-1 hover:bg-blue-100 cursor-pointer transition-all duration-300"
  >
    <td
      v-for="cell in data"
      :key="cell"
      class="p-2"
    >{{ cell }}</td>
  </tr>
  <InfoRequestAdmin
    :request="request"
    @close="showInfoRequestPopup = false"
    v-show="showInfoRequestPopup"
  />
</template>

<script setup>
import { ref } from 'vue'
import InfoRequestAdmin from '../popups/InfoRequestAdmin.vue'
const props = defineProps({
  request: Object,
})

let showInfoRequestPopup = ref(false)
let data = [
  parseInt(props.request.id.slice(-6), 16),
  props.request.vehicle_type,
  props.request.license_plate,
  showDisability(),
  showStatus(),
]

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

function showInfo() {
  showInfoRequestPopup.value = true
}
</script>

<style lang="scss" scoped>
</style>