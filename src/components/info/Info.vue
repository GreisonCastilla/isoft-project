<template>
  <div>
    <InfoIcon />
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import InfoIcon from '../icons/InfoIcon.vue'

defineProps({
  message: {
    typo: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
</style>