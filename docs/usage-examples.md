# Getting Started

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) version 16 or higher.
- Text Editor.
  - [VSCode](https://code.visualstudio.com/) is recommended, along with the [official Vue extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar).

To get started, you can install it with:

::: code-group

```sh [npm]
$ npm i @healerlab/vue3-simple-otp-input
```

```sh [pnpm]
$ pnpm add @healerlab/vue3-simple-otp-input
```

```sh [yarn]
$ yarn add @healerlab/vue3-simple-otp-input
```

:::


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
  separator="-"
  separatorType="middle"
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

In next section, you can explore more about props, event within this component