<template>
  <div class="bg-blue-600 w-full p-4 h-full flex grow place-items-center place-content-center">

    <div class="bg-white w-xl h-fit md:p-10 p-4 rounded-xl shadow-[6px_6px_15px_rgba(0,0,0,0.3)] space-y-4 transition-all duration-300 ease-in-out">

      <div class="place-self-center place-items-center  ">
        <ParkingIcon class="h-25  fill-blue-600" />
        <p><b>ControlParkNet</b></p>
      </div>

      <div class="space-y-3 flex flex-col">
        <p class="text-xl mb-3 text-blue-600 ">
          <b>Inicio de sesión</b>
        </p>
        <BasicInput
          name="Usuario"
          id="user"
        />
        <PasswordInput
          name="Contraseña"
          id="pass"
        />
      </div>

      <div class="flex space-x-3">
        <BasicButton
          @click="login"
          action="Iniciar sesión"
          :comp="LoginIcon"
        />
        <BasicButton
          v-if="showRegister==false"
          @click="showRegister=true"
          action="Registrarse"
          :comp="WriteIcon"
        />
        <RedButton
          @click="showRegister=false"
          v-else
          action="Ocultar registrar"
          :comp="HideIcon"
        />
      </div>

      <Register
        class="mt-2"
        v-if="showRegister"
      />

    </div>
  </div>
</template>

<script setup>
import BasicInput from '@/components/input/BasicInput.vue'
import PasswordInput from '@/components/input/PasswordInput.vue'
import ParkingIcon from '@/components/icons/ParkingIcon.vue'
import BasicButton from '@/components/buttons/BasicButton.vue'
import Register from '@/components/sectionsUser/Register.vue'
import RedButton from '@/components/buttons/RedButton.vue'
import WriteIcon from '@/components/icons/WriteIcon.vue'
import LoginIcon from '@/components/icons/LoginIcon.vue'
import HideIcon from '@/components/icons/HideIcon.vue'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import router from '@/router'

let showRegister = ref(false)

function login() {
  if (user.value == '' || pass.value == '') {
    toast.error('Complete todos los campos para iniciar sesión', {
      toastId: 'empty-input',
    })
  } else {
    router.replace('/ControlParkNet')
  }
}
</script>
