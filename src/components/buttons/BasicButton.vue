<template>
  <button class=" transition-all duration-200 ease-in-out flex place-items-center cursor-pointer pl-4 pr-4 pt-2 pb-2 bg-blue-600 w-fit rounded-lg text-white hover:bg-blue-900 ">
    {{action}}
    <component
      class="h-5 ml-2"
      :is="comp"
    />
  </button>
</template>

<script setup>
defineProps({
  action: String,
  comp: {
    type: Object,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
</style>