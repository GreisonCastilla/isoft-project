<template>
  <div class="flex flex-col space-x-3">

    <div class="flex space-x-2">
      <div
        class="p-2 cursor-pointer rounded-xl border-blue-600 hover:bg-blue-200 "
        :class="{'bg-blue-600 text-white hover:bg-blue-800':selected==option}"
        @click="sendValue(option)"
        v-for="option in options"
        :key="option"
      >
        <p><b>{{ option }}</b></p>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { defineEmits } from 'vue'

const emit = defineEmits(['sendValue'])

function sendValue(option) {
  value = option
  emit('sendValue', value)
}

const props = defineProps({
  selected: {
    type: String,
    default: '',
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
})

let value = ref(props.selected)
</script>

<style lang="scss" scoped>
</style>