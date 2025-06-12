<template>
  <div class="flex space-x-2 items-center">
    <div>
      <InfoIcon class="h-6  fill-blue-600" />
    </div>

    <div>
      <p>{{ message }}</p>
    </div>

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