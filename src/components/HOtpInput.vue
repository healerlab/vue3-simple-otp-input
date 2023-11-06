<template>
  <div class="hl-input-container m-auto text-center" :class="wrapperClassName">
    <template v-for="(input, index) in length" :key="index">
      <input
        :element-num="input"
        :id="generateInputId(index)"
        :ref="(el) => generateRef(index, el)"
        v-model="inputValues[index]"
        :type="type"
        maxlength="1"
        :style="{
          borderBottom: hlBorderColor(index),
          color: fontColor,
          ...conditionClass(index)
        }"
        :class="inputClassName"
        :disabled="disabled"
        :readonly="readonly"
        contenteditable="true"
        @keydown="(e: KeyboardEvent) => handleKeydown(e)"
        @keyup="handleInputFocus(index)"
        @paste.prevent="handlePastedValues"
        @input="returnFullString()"
        @focus="handleFocus(index)"
        :autocomplete="autocomplete"
      />
      <div v-if="separator && checkSeparatorType(index)" class="hl-separator"><span>{{ separator }}</span></div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, ComponentPublicInstance, ComponentOptionsBase, PropType, CSSProperties } from 'vue'

const emits = defineEmits(['onFinish', 'onChange'])
const props = defineProps({
  length: {
    type: Number,
    required: true,
    default: 6
  },
  defaultColor:{
    type: String,
    default: '#eeeeee'
  },
  mainColor: {
    type: String,
    default: '#00dc82',
    required: false
  },
  fontColor: {
    type: String,
    default: 'black',
    required: false
  },
  allowPaste: {
    type: Boolean,
    default: true,
    required: false
  },
  onlyNumber: {
    type: Boolean,
    default: false
  },
  isRefresh: {
    type: Boolean,
    default: false
  },
  type: {
    type: String as PropType<"password" | "text">,
    default: "password",
    validator: (value: string) =>
        ["password", "text"].includes(value),
  },
  autoFocus: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  outlined: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  wrapperClassName: {
    type: String,
    default: ""
  },
  inputClassName: {
    type: String,
    default: ""
  },
  autocomplete: {
    type: [String],
    default: 'off'
  },
  separator: {
    type: String,
    default: ''
  },
  separatorType: {
    type: String as PropType<"middle" | "all">,
    default: "middle",
    validator: (value: string) =>
        ["middle", "all"].includes(value),
  }
})

watch(
  () => props.isRefresh,
  () => {
    inputValues.value = []
    inputRefs[0].focus()
    currentActiveIndex.value = -1
  }
)

const checkSeparatorType = (index: number) => {
  if (props.separatorType === 'middle') {
    return index === props.length / 2 -1
  } else {
    return index < props.length - 1
  }
}

const inputRefs: any = {}
const inputValues = ref([])
const currentActiveIndex = ref(-1)


const clear = () => {
  inputValues.value = []
  inputRefs[0].focus()
  currentActiveIndex.value = -1
}

const handleKeydown = (event: KeyboardEvent) => {
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
  return `hl-${index + 1}`
}

const hlBorderColor = (index: number) => {
  const color = inputValues.value[index] ? props.mainColor : props.defaultColor

  return `3px solid ${color}`
}

const handleInputFocus = (index: number) => {  
  if (inputValues.value[index] && inputValues.value[index] !== '' && index < props.length) {
    currentActiveIndex.value = index + 1
    inputRefs[index + 1] && inputRefs[index + 1].focus()
  } else if (index > 0 && (!inputValues.value[index] || inputValues.value[index] === '')) {
    if (inputRefs[index - 1]) {
      inputRefs[index - 1].focus()
      currentActiveIndex.value = index - 1
    }
  }
}

const handleFocus = (index: number) => {
  inputRefs[index].select()
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

      inputRefs[props.length-1].focus()

      returnFullString()
    }
  }
}

const updateInputValue = (index: number, value: any) => {
  inputValues.value[index] = value as never  
}

const returnFullString = () => {  
  const data = inputValues.value.join('')
  emits('onChange', data)
  if (data.length === props.length) {
    emits('onFinish', data)
    currentActiveIndex.value = -1
  }
}

const genResultWithSeparator = () => {
  const data = inputValues.value.join('')
  if (!props.separator) return data
  if (props.separatorType === 'middle') {             
    const newArr =  data.split('')
    newArr.splice(props.length / 2, 0, props.separator)
    return newArr.join('')
  } else {    
    return data.split('').join(props.separator)
  }
}

onMounted(() => {
  if (props.autoFocus) {
    inputRefs && inputRefs[0].focus()
  }
})

const conditionClass = (index: number): CSSProperties => {
  if (props.outlined) {
    return {
      outline: outlineFocusClass(currentActiveIndex.value === index),
      borderBottom: 'none',
      borderRadius: '2px',
    }
  }
  return {
    borderBottom: hlBorderColor(index)
  }
}

const outlineFocusClass = (isFocus:  boolean) => {
  const color = isFocus ? props.mainColor : props.defaultColor
  if (props.outlined) {
    return `2px solid ${color}`
  }
  return 'none'
}

defineExpose({
  clear,
  genResultWithSeparator
});
</script>
