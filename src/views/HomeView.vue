<template>
  <main>
    <TheWelcome />
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import TheWelcome from '../components/TheWelcome.vue'
import { getOtp } from '@/service/api'
import { apiContract } from '@/service/api'

interface LoginForm {
  title: string
  form: {
    account: string
    password: string
    otp: number | string
  }
  currentOtp: number | string
  token: string
}

const state = ref<LoginForm>({
  title: 'Admin Login',
  form: {
    account: '',
    password: '',
    otp: ''
  },
  currentOtp: '',
  token: ''
})

const getOtpNumbers = async () => {
  try {
    const res = await getOtp({
      method: apiContract.getOtpResponse.method,
      url: apiContract.getOtpResponse.path
    })
    const validation = apiContract.getOtpResponse.responses[200]
    if (res.data.Code === 200 && validation.parse(res.data)) {
      state.value.currentOtp = res.data.Data.OTP
    }
  } catch (error: any) {
    throw new Error(error.toString())
  }
}

onMounted(async () => {
  await nextTick()
  console.log('### mounted: ', import.meta.env.VITE_BASE_API)
  await getOtpNumbers()
})
</script>
