<template>
  <div>
    <p class="ml-2 mb-1 text-sm "><b>{{ label }}</b></p>

    <div class="flex flex-wrap space-x-3 ml-2">
      <div
        class="space-x-1"
        v-for="option in options"
        :key="option"
      >
        <input
          @change="onChange"
          type="radio"
          :name="name"
          :id="option.id"
          :value="option.id"
        >
        <label :for="option.id">{{option.name}}</label>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  label: String,
  name: String,
  options: Array,
})

let value = ref(null)

defineExpose({
  sendValue,
})

function sendValue() {
  return value.value
}

function onChange(event) {
  value.value = event.target.value
}
</script>

<style lang="scss" scoped>
</style>