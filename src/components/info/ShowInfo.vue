<template>
  <div>
    <p class="mb-1 text-sm "><b>{{ name }}</b></p>
    <p class="ml-1">{{ description }}</p>

  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
</style>