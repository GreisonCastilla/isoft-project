<template>
  <div>
    <p class="mb-1 text-sm "><b>{{ name }}</b></p>
    <p class="ml-1">{{ description }}</p>

  </div>
</template>

<script setup>
defineProps({
  name: String,
  description: String,
})
</script>

<style lang="scss" scoped>
</style>