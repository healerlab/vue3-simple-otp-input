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
      autocomplete="off"
      separator="-"
      separatorType="middle"
    />
  </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
const otpInput = ref<any>(null)
import HOtpInput from './components/HOtpInput.vue'
const handleComplete = (otpCode: string) => {
  console.log(111, otpCode);
  // getInputWithSeparator()
}

const handleChange = (otpCode: string) => {
  console.log(222, otpCode);
}

// const getInputWithSeparator = () => {
// console.log(otpInput?.value?.genResultWithSeparator());
// }
</script>
<style lang="scss" scoped>
.otp-input {
  display: flex;
  align-items: center;
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

  :deep(span) {
    padding: 0 0px 0 10px;
    font-size: 30px;
  }
}
</style>