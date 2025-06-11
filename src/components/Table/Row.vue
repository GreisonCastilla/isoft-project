<template>
  <tr
    @click="showInfo()"
    class=" text-center text-sm border-b-1 hover:bg-blue-100 cursor-pointer transition-all duration-300"
  >

    <td class="p-2">{{ request.id }}</td>
    <td class="p-2">{{ request.type }}</td>
    <td class="p-2">{{ request.plate }}</td>
    <td class="p-2">{{ request.state }}</td>

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
defineProps({
  request: Object,
})

let showInfoRequestPopup = ref(false)

function showInfo() {
  showInfoRequestPopup.value = true
}
</script>

<style lang="scss" scoped>
</style>