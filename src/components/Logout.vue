<template>
  <div class="flex flex-col mt-5 rounded-xl p-6 shadow-[6px_6px_15px_rgba(0,0,0,0.3)]">
    <div class="flex items-center justify-between ">
      <p class="text-xl text-blue-600">
        <b v-if="auth.user!=null"> {{ auth.user.full_name }}</b>
      </p>
      <RedButton
        @click="showConfirmPopup=true"
        action="Cerrar sesión"
      />
    </div>
    <ConfirmPopup
      v-if="showConfirmPopup"
      @confirm="logout"
      @cancel="showConfirmPopup=false"
      message="¿Seguro que desea cerrar la sesión?"
    />
  </div>

</template>

<script setup>
import { useAuthStore } from '@/store/authStore'
import RedButton from '@/components/buttons/RedButton.vue'
import ConfirmPopup from './popups/ConfirmPopup.vue'
import { ref } from 'vue'

const auth = useAuthStore()
let showConfirmPopup = ref(false)

function logout() {
  showConfirmPopup = false
  auth.logout()
}
</script>

<style lang="scss" scoped>
</style>