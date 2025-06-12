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
  <InfoRequestPopup
    :request="request"
    @close="showInfoRequestPopup = false"
    v-show="showInfoRequestPopup"
  />
</template>

<script setup>
import { ref } from 'vue'
import InfoRequestPopup from '../popups/InfoRequestPopup.vue'
const props = defineProps({
  request: Object,
})

let showInfoRequestPopup = ref(false)
let data = [props.request.id, props.request.type, props.request.plate, props.request.state]

function showInfo() {
  showInfoRequestPopup.value = true
}
</script>

<style lang="scss" scoped>
</style>