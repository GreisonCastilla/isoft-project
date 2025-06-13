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
    <td class="p-2">
      <StateButton
        @click="changeState"
        :state="aux.state"
      />
    </td>
  </tr>
  <InfoAccount
    ref="infoAccount"
    :request="aux"
    :state="aux.state"
    @changeState="changeState"
    @close="showInfoRequestPopup = false"
    v-if="showInfoRequestPopup"
  />
</template>

<script setup>
import { ref } from 'vue'
import StateButton from '../buttons/StateButton.vue'
import InfoAccount from '../popups/InfoAccount.vue'
const props = defineProps({
  request: Object,
})
const infoAccount = ref(null)
let aux = ref(props.request)

let showInfoRequestPopup = ref(false)
let data = ref([
  props.request.name,
  props.request.id,
  props.request.email,
  props.request.tel,
  props.request.apart,
])

function showInfo() {
  showInfoRequestPopup.value = true
}

function changeState() {
  if (infoAccount.value) {
    infoAccount.value.changeState()
  }
  aux.value.state = !aux.value.state
}
</script>

<style lang="scss" scoped>
</style>