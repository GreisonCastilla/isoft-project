<template>
  <tr class=" text-center text-sm border-b-1 hover:bg-blue-100 cursor-pointer transition-all duration-300">

    <td
      v-for="cell in data"
      :key="cell"
      class="p-2"
    >{{ cell }}</td>

  </tr>

</template>

<script setup>
const props = defineProps({
  request: Object,
})

let data = [props.request.cc, props.request.full_name, props.request.apartment, props.request.spot]
</script>

<style lang="scss" scoped>
</style>