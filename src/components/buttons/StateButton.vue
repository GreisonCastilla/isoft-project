<template>
  <div
    @click.stop
    :class="{'scale-95':isActive}"
    @touchstart="activate()"
    @touchend="deactivate()"
  >
    <div
      v-if="state == true"
      class="transition-all duration-300 ease-in-out flex place-items-center cursor-pointer pl-4 pr-4 pt-2 pb-2 bg-green-600 w-fit rounded-lg text-white hover:bg-green-900 "
      :class="{'bg-green-900':isActive}"
    >
      Habilitar
    </div>
    <div
      v-else
      class="transition-all duration-300 ease-in-out flex place-items-center cursor-pointer pl-4 pr-4 pt-2 pb-2 bg-red-600 w-fit rounded-lg text-white hover:bg-red-900 "
      :class="{'bg-red-900':isActive}"
    >
      Inhabilitar
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  state: {
    type: Boolean,
    required: true,
  },
})
let isActive = ref(false)

function activate() {
  isActive.value = true
}

function deactivate() {
  isActive.value = false
}
</script>

<style lang="scss" scoped>
</style>