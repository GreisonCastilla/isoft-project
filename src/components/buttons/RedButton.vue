<template>
  <button class=" transition-all duration-300 ease-in-out flex place-items-center cursor-pointer pl-4 pr-4 pt-2 pb-2 bg-red-600 w-fit rounded-lg text-white hover:bg-red-900 
  ">
    {{action}}
    <component
      v-if="comp!=null"
      class="h-5 ml-2 fill-white"
      :is="comp"
    />
  </button>
</template>

<script setup>
defineProps({
  action: String,
  comp: {
    type: Object,
    default: null,
  },
})
</script>

<style lang="scss" scoped>
</style>