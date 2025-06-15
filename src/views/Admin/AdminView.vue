<template>
  <div class="flex flex-col h-screen">
    <Hero />

    <div class="flex flex-col grow px-4 xl:px-80 space-y-5 ">

      <Logout />

      <Options
        @sendValue="setValue"
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
import Logout from '@/components/Logout.vue'

let selected = ref(sessionStorage.getItem('selected') || 'Solicitudes')
const options = ['Solicitudes', 'Cuentas', 'Sorteo']

function setValue(value) {
  selected.value = value
  sessionStorage.setItem('selected', value)
}
</script>

<style lang="scss" scoped>
</style>