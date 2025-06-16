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
  <InfoAccount
    ref="infoAccount"
    :request="props.request"
    @close="showInfoRequestPopup = false"
    v-if="showInfoRequestPopup"
  />
</template>

<script setup>
import { ref } from 'vue'
import InfoAccount from '../popups/InfoAccount.vue'
const props = defineProps({
  request: Object,
})
const infoAccount = ref(null)

let showInfoRequestPopup = ref(false)
let data = ref([
  props.request.full_name,
  props.request.cc,
  props.request.email,
  props.request.phone_number,
  props.request.apartment,
])

function showInfo() {
  showInfoRequestPopup.value = true
}
</script>

<style lang="scss" scoped>
</style>