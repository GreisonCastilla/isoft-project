<template>
  <div class="flex space-x-3">
    <label
      class="ml-2 mb-1 text-sm "
      :for="id"
    ><b>{{ name }}</b></label>
    <input
      type="checkbox"
      :id="id"
    >
  </div>
</template>

<script setup>
defineProps({
  id: String,
  name: String,
})
</script>
