<template>
  <button
    class=" transition-all duration-300 ease-in-out flex place-items-center cursor-pointer pl-4 pr-4 pt-2 pb-2 bg-blue-600 w-fit rounded-lg text-white hover:bg-blue-700 
  "
    :class="{'bg-blue-900  scale-95':isActive}"
    @touchstart="activate()"
    @touchend="deactivate()"
  >
    {{action}}
    <component
      v-if="comp!=null"
      class="h-5 ml-2  "
      :is="comp"
    />
  </button>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  action: String,
  comp: {
    type: Object,
    default: null,
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