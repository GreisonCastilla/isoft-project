<template>
  <div>
    <Hero />
    <div class="flex flex-col px-4 lg:px-80 space-y-5 ">
      <Options
        class="mt-5"
        @sendValue="getValue"
        :selected="selected"
        :options="options"
      />
      <Request v-if="selected=='Solicitudes'" />
      <Accounts v-if="selected=='Cuentas'" />
      <Sort v-if="selected=='Sorteo'" />
    </div>

  </div>
</template>

<script setup>
import Options from '@/components/sectionsAdmin/Options.vue'
import Accounts from '@/components/sectionsAdmin/Accounts.vue'
import Request from '@/components/sectionsAdmin/Request.vue'
import Sort from '@/components/sectionsAdmin/Lottery.vue'
import Hero from '@/components/Hero.vue'
import { ref } from 'vue'

let selected = ref('Solicitudes')
const options = ['Solicitudes', 'Cuentas', 'Sorteo']

function getValue(value) {
  selected.value = value
}
</script>

<style lang="scss" scoped>
</style>