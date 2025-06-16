<template>
  <div class="flex flex-col w-full md:w-auto">
    <label
      class="ml-2 mb-1 text-sm "
      :for="id"
    ><b>{{ name }}</b></label>

    <div class="flex text-sm md:min-w-80 w-full rounded-xl
      ">
      <input
        class="grow read-only:bg-gray-300 border-l-2 border-y-2 border-gray-300 outline-none focus:border-blue-600 p-1 read-only:focus:outline-gray-300 rounded-l-xl"
        :id="id"
        :type="showPassword?'text':'password'"
        v-model="text"
        :readonly="ro"
      >
      <div class="pr-2 pl-2 rounded-r-xl bg-blue-600 border-2 border-blue-600 place-content-center
      hover:bg-blue-900 hover:border-blue-900 transition-all duration-200 ease-in-out">
        <EyeOff
          class="h-6 flex text-white cursor-pointer"
          @click="changeShowPassword()"
          v-if="showPassword"
        />
        <EyeIcon
          class="h-6 flex text-white cursor-pointer"
          @click="changeShowPassword()"
          v-else
        />
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import EyeIcon from '../icons/EyeIcon.vue'
import EyeOff from '../icons/EyeOff.vue'

const props = defineProps({
  id: String,
  name: String,
  text: {
    type: String,
    default: '',
  },
  ro: {
    type: Boolean,
    default: false,
  },
})

let text = ref(props.text)
let showPassword = ref(false)

function changeShowPassword() {
  showPassword.value = !showPassword.value
}
</script>

<style lang="scss" scoped>
</style>