<template>
  <div class="hl-input-container m-auto text-center">
    <input
      v-for="(index) in length"
      :id="generateInputId(index)"
      :ref="(el) => generateRef(index, el)"
      :key="index"
      v-model="inputValues[index]"
      type="password"
      maxlength="1"
      :style="{
        fontSize: hlFontSize,
        borderBottom: hlInputColor(index),
        color: fontColor,
        width: hlWidth
      }"
      contenteditable="true"
      @keydown="handleKeydown"
      @keyup="handleInputFocus(index)"
      @paste.prevent="handlePastedValues"
      @input="returnFullString()"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, ComponentPublicInstance, ComponentOptionsBase } from 'vue'

const emits = defineEmits(['otpCodeData'])
const props = defineProps({
  length: {
    type: Number,
    required: true,
    default: 6
  },
  fontSize: {
    type: Number,
    default: 22,
    required: false
  },
  inputColor: {
    type: String,
    default: '#063451',
    required: false
  },
  fontColor: {
    type: String,
    default: '#444444',
    required: false
  },
  allowPaste: {
    type: Boolean,
    default: true,
    required: false
  },
  onlyNumber: {
    type: Boolean,
    default: true,
    required: false
  },
  isRefresh: {
    type: Boolean,
    default: false
  }
})

watch(
  () => props.isRefresh,
  () => {
    inputValues.value = []
    inputRefs[0].focus()
  }
)

const inputRefs: any = {}

const inputValues = ref([])

const hlFontSize = computed(() => `${props.fontSize}px`)
const hlWidth = computed(() => `${props.fontSize + 8}px`)

const handleKeydown = (event: any) => {
  if (!props.onlyNumber) {
    return
  }
  const key = event.charCode || event.keyCode || 0
  if (
    !(
      key === 8 ||
      key === 46 ||
      key === 86 ||
      key === 91 ||
      (key >= 48 && key <= 57) ||
      (key >= 96 && key <= 105)
    )
  ) {
    event.preventDefault()
  }
}

const generateRef = (index: number, el: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null) => {
  inputRefs[index] = el
}

const generateInputId = (index: number) => {
  return `hl_${index + 1}`
}

const hlInputColor = (index: number) => {
  const color = inputValues.value[index] ? props.inputColor : '#eeeeee'

  return `3px solid ${color}`
}

const handleInputFocus = (index: number) => {
  if (inputValues.value[index] && inputValues.value[index] !== '' && index < props.length - 1) {
    inputRefs[index + 1].focus()
  } else if (index > 0 && (!inputValues.value[index] || inputValues.value[index] === '')) {
    inputRefs[index - 1].focus()
  }
}

const handlePastedValues = (event: ClipboardEvent) => {
  if (props.allowPaste) {
    const pastedValue = event?.clipboardData?.getData('text/plain') || ""
    const splitValues = pastedValue.split('')
    let canPaste = true

    if (props.onlyNumber) {
      const regex = new RegExp(`^\\d{${props.length}}$`)
      canPaste = regex.test(pastedValue)
    }

    if (canPaste) {
      for (let i = 0; i < props.length; i++) {
        updateInputValue(i, splitValues[i])
      }

      inputRefs[props.length].focus()

      returnFullString()
    }
  }
}

const updateInputValue = (index: number, value: any) => {
  inputValues.value[index] = value as never
}

const returnFullString = () => {
  const data = inputValues.value.join('')
  if (data.length === props.length) emits('otpCodeData', data)
}
</script>

<!-- <style lang="scss" scoped>
.hl-input-container input {
  border: none;
  margin-left: 10px;
  text-align: center;

  &:first-child {
    margin-left: 0;
  }
  &:focus {
    outline: none;
  }
}
</style> -->
