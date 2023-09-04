# Vue 3 simple OTP input

[![npm](https://img.shields.io/npm/v/@healerlab/vue3-simple-otp-input?style=flat-square)](https://www.npmjs.com/package/@healerlab/vue3-simple-otp-input)
[![npm](https://img.shields.io/npm/dw/@healerlab/vue3-simple-otp-input?style=flat-square)](https://www.npmjs.com/package/@healerlab/vue3-simple-otp-input)
[![GitHub](https://img.shields.io/github/license/healerlab/vue3-simple-otp-input?style=flat-square)](https://github.com/healerlab/vue3-simple-otp-input/blob/main/LICENSE)

## Demo
[Demo and docs](https://healerlab.github.io/vue3-simple-otp-input)

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) version 16 or higher.
- Text Editor.
  - [VSCode](https://code.visualstudio.com/) is recommended, along with the [official Vue extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar).

To get started, you can install `vue3-simple-otp-input` with:

```bash
npm i @healerlab/vue3-simple-otp-input
```

with pnpm:

```bash
pnpm add @healerlab/vue3-simple-otp-input
```

with yarn:

```bash
yarn add @healerlab/vue3-simple-otp-input
```



## Usage
Import the component and register it locally in your Vue component:

```vue
<script setup lang="ts">
import { HOtpInput } from "@healerlab/vue3-simple-otp-input";

const handleFinish = (otpCode: string) => {
  // write logic with received code
}

const handleChange = (otpCode: string) => {
  // write logic with changed code
}
</script>
```

Use the component in your template:

```vue
<HOtpInput
  :length="6" 
  type="text" 
  @on-finish="handleFinish"
  @on-change="handleChange" 
  wrapperClassName="otp-input"
  :outlined="true"
  ref="otpInput"
  :only-number="true"
/>
```

This is minimal style for your input, you can change it to match your use-case:


```scss
<style scoped lang="scss">
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
```

See the [Vue3 Simple OTP Input](https://healerlab.github.io/vue3-simple-otp-input) page for more information.
