<template>
  <div>
    Vue 3 OTP input
    <HOtpInput
      :length="6" 
      type="text" 
      @on-finish="handleComplete"
      @on-change="handleChange" 
      wrapperClassName="otp-input"
      :outlined="true"
      ref="otpInput"
      :only-number="true"
    />
  </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
const otpInput = ref<any>(null)
import { HOtpInput } from '@healerlab/vue3-simple-otp-input'
const handleComplete = (otpCode: string) => {
  console.log(111, otpCode);
}

const handleChange = (otpCode: string) => {
  console.log(222, otpCode);
}
</script>
<style lang="scss" scoped>
.otp-input {
  :deep(input) {
    outline: none;
    width: 30px;
    padding: 12px;
    font-size: 22px;
    border: none;
    margin-left: 10px;
    text-align: center;
    &:first-child {
      margin-left: 0;
    }
    &:focus {
      outline: none
    }
  }
}
</style>