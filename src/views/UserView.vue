<template>
  <div>
    <hero />
    <div class="flex flex-col sm:px-4 lg:px-80 space-y-5">

      <ParkingZone />
      <Request />
      <PersonalInfo class="mb-3" />
    </div>
  </div>

</template>

<script setup>
import ParkingZone from '@/components/sectionsUser/ParkingZone.vue'
import Request from '@/components/sectionsUser/Request.vue'
import PersonalInfo from '@/components/sectionsUser/PersonalInfo.vue'
import Hero from '@/components/Hero.vue'
</script>

<style lang="scss" scoped>
</style>