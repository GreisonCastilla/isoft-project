<template>
  <div class="w-full place-items-center rounded-xl p-6 shadow-[6px_6px_15px_rgba(0,0,0,0.3)]">

    <div class="place-items-center p-4">
      <p>Tu zona de parqueo este mes es</p>
      <div class="w-full text-center mt-2 text-white bg-blue-600 p-4 rounded-xl text-4xl">
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