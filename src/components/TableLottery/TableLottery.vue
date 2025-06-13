<template>
  <div class="flex max-w-full ">
    <table class="w-full  rounded-xl overflow-hidden">
      <thead>
        <tr class="bg-blue-600 border-1 border-blue-600 ">
          <th
            class="p-2  text-sm text-white"
            v-for="title in titles"
            :key="title"
          >{{title}}</th>
        </tr>
      </thead>

      <tbody>
        <RowLottery
          v-for="row in data"
          :key="row.id"
          :request="row"
        />
      </tbody>

    </table>

  </div>
</template>

<script setup>
import RowLottery from './RowLottery.vue'
defineProps({
  titles: Array,
  data: Array,
})
</script>

<style lang="scss" scoped>
</style>