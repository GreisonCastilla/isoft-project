<template>
  <button
    class=" transition-all duration-300 ease-in-out flex place-items-center cursor-pointer pl-4 pr-4 pt-2 pb-2 bg-red-600 w-fit h-fit rounded-lg text-white hover:bg-red-900 
  "
    :class="{'bg-red-900  scale-95':isActive}"
    @touchstart="activate()"
    @touchend="deactivate()"
  >
    {{action}}
    <component
      v-if="comp!=null"
      class="h-5 ml-2 fill-white"
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