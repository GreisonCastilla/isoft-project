<template>
  <div class=" max-h-full  overflow-y-auto">
    <table class="w-full">
      <thead class="sticky -top-1 z-10">
        <tr class=" bg-blue-600 border-1 border-blue-600 ">
          <th
            class="p-2 text-sm text-white "
            v-for="title in titles"
            :key="title"
          >{{title}}</th>
        </tr>
      </thead>

      <tbody>
        <Row
          v-for="row in data"
          :key="row"
          :request="row"
        />
      </tbody>

    </table>

  </div>
</template>

<script setup>
import Row from './Row.vue'
defineProps({
  titles: Array,
  data: Array,
})
</script>

<style lang="scss" scoped>
</style>