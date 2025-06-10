<template>
  <div class="w-full place-items-center rounded-lg shadow-lg p-6">

    <div class="place-items-center p-4">
      <p>Tu zona de parqueo este mes es</p>
      <div class="w-full text-center mt-2 text-white bg-blue-600 p-4 rounded-lg text-4xl">
        <b>{{ parkingZone }}</b>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let parkingZone = ref('P2 - 14')
</script>

<style lang="scss" scoped>
</style>