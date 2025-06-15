<template>
  <div class="fixed grid place-content-center top-0 left-0 z-11  h-full w-full bg-gray-600/50 ">
    <div
      @click.stop
      class=" flex flex-col rounded-xl bg-white relative space-y-1 w-[90vw] md:w-lg p-6 shadow-2xl opacity-100 "
    >
      <p class="text-xl"><b>{{ message }}</b></p>
      <div class="flex space-x-3 place-content-end  mt-3">

        <BasicButton
          @click="$emit('confirm')"
          action="Aceptar"
          :comp="AceptIcon"
        />
        <RedButton
          @click="$emit('cancel')"
          action="Cancelar"
          :comp="X"
        />
      </div>

    </div>
  </div>
</template>

<script setup>
import X from '../icons/X.vue'
import AceptIcon from '../icons/AceptIcon.vue'
import BasicButton from '../buttons/BasicButton.vue'
import RedButton from '../buttons/RedButton.vue'

defineProps({
  message: {
    type: String,
    required: true,
  },
})

defineEmits(['cancel', 'confirm'])
</script>

<style lang="scss" scoped>
</style>