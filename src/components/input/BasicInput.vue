<template>
  <div class="flex flex-col w-full md:w-auto">
    <label
      class="ml-2 mb-1 text-sm "
      :for="id"
    ><b>{{ name }}</b></label>
    <input
      class="text-sm read-only border-2 outline-none w-full md:min-w-80 border-gray-300 rounded-xl p-1
      read-only:bg-gray-300 focus:border-blue-600 read-only:focus:outline-gray-300 read-only:cursor-pointer
      transition-all duration-300 ease-in-out"
      :id="id"
      v-model="text"
      :type="type"
      :readonly="ro"
      autocomplete="on"
    >
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  id: String,
  name: String,
  text: {
    type: String,
    default: '',
  },
  ro: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'text',
  },
})

let text = ref(props.text)
</script>

<style lang="scss" scoped>
</style>