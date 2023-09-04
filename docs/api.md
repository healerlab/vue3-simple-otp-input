---
outline: deep
---

# Props and Demo Examples

This page demonstrates usage of props and events provided by HOtpInput.

## Props & Events

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| length | `Number` | `6` | Number of OTP inputs to be rendered. |
| defaultColor | `String` | `#eeeeee` | Default outline and border color of each OTP input |
| mainColor | `String` | `#00dc82` | Main color for outlined and border when input is focused. |
| fontColor | `String` | `black` | Color for input text. |
| allowPaste | `Boolean` | `true` | If true, this will allow you paste content from clipboard to OTP input. |
| onlyNumber | `Boolean` | `true` | If true, you can only input number to OPT input. |
| type | `String` | `"password", "text"` | Specific type of OTP input. |
| autoFocus | `Boolean` | `true` | Whether or not to auto focus on first element on mount. |
| disabled | `Boolean` | `false` |  Whether or not to disable the input. |
| outlined | `Boolean` | `false` | Whether or not to switch to outlined input. |
| readonly | `Boolean` | `false` | Whether or not to switch to readonly input. |
| wrapperClassName | `String` | `null` | The class name to use for the wrapper element. |
| inputClassName | `String` | `null` | The class name to use for each input element. |
| onChange | `Function` | `null` | Callback event that return OTP code when we made a change in inputs. `(otpCode: string)` |
| onFinish | `Function` | `null` | Callback event that return OTP code when we fully typed all inputs. `(otpCode: string)` |

See the [Vue3 Simple OTP Input](https://www.npmjs.com/package/@healerlab/vue3-simple-otp-input) package for more information.


## Demo Examples

Here we display a list of settings that could be applied within an application.

<script setup lang="ts">
import { ref } from 'vue'
import { HOtpInput } from "@healerlab/vue3-simple-otp-input";
const otpInput = ref(null)
const otpCode = ref()
const otpCodeChange = ref()

const handleFinish = (code: string) => {
  otpCode.value = code
}

const handleChange = (code: string) => {
  otpCodeChange.value = code
  if (!code) otpCode.value = ''
}

const clearOtp = () => {
  otpInput.value.clear()
}

const isOutlined = ref(true)
const isAutoFocus = ref(true)
const isOnlyNumber = ref(true)
const isDisabled = ref(false)
const isReadonly = ref(false)
const isAllowPaste = ref(false)
const otpLength = ref(6)
const currentOtpType = ref('text')

const changeOnlyNumber = () => {
  otpInput.value.clear()
  isOnlyNumber.value = !isOnlyNumber.value
}

const changeOTPLength = (isInCrease: boolean) => {
  otpLength.value = isInCrease ? 6 : 4
}

const changeOtpType = () => {
  currentOtpType.value = currentOtpType.value === "password" ? "text" : "password"
}
</script>
<label>Current OTP Length is: `{{ otpLength }}`</label> <br />
<label><input type="checkbox" :checked="isOutlined" @change="isOutlined = !isOutlined"> Outlined</label>
<label><input type="checkbox" :checked="isAutoFocus" @change="isAutoFocus = !isAutoFocus"> AutoFocus</label> <br />
<label><input type="checkbox" :checked="isOnlyNumber" @change="changeOnlyNumber"> OnlyNumber</label> 
<label><input type="checkbox" :checked="isDisabled" @change="isDisabled = !isDisabled"> Disabled</label> <br>
<label><input type="checkbox" :checked="isReadonly" @change="isReadonly = !isReadonly"> Readonly</label>
<label><input type="checkbox" :checked="isAllowPaste" @change="isAllowPaste = !isAllowPaste"> AllowPaste</label> <br />
<label><input type="checkbox" @change="changeOtpType"> OTP type: `{{ currentOtpType }}`</label> <br />


<a @click="changeOTPLength(false)" href="javascript:void(0)">Change OTP Length to 4</a>
<span> or </span>
<a @click="changeOTPLength(true)" href="javascript:void(0)">Change OTP Length to 6</a>

<HOtpInput
  fontColor="#00dc82"
  :length="otpLength"
  :type="currentOtpType" 
  @on-finish="handleFinish"
  @on-change="handleChange" 
  wrapperClassName="otp-input"
  :outlined="isOutlined"
  ref="otpInput"
  :only-number="isOnlyNumber"
  :autoFocus="isAutoFocus"
  :disabled="isDisabled"
  :readonly="isReadonly"
  :allowPaste="isAllowPaste"
/>
<!-- Using
<button @click="clearOtp">Clear OTP</button> -->

<span>The final OTP code is: `{{ otpCode }}`</span>
<br />
<span>The OTP changed to:  `{{ otpCodeChange }}`</span>