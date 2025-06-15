<template>
  <div>
    <hero />

    <div class="flex flex-col px-4 xl:px-80 space-y-5 ">
      <Logout />
      <ParkingZone />
      <Request />
      <PersonalInfo class="mb-5" />
    </div>
  </div>

</template>

<script setup>
import ParkingZone from '@/components/sectionsUser/ParkingZone.vue'
import Request from '@/components/sectionsUser/Request.vue'
import PersonalInfo from '@/components/sectionsUser/PersonalInfo.vue'
import Hero from '@/components/Hero.vue'
import Logout from '@/components/Logout.vue'
</script>
