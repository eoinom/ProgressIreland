<template>
  <textarea
    v-bind="$attrs"
    v-model="inputValue"
    :placeholder="props.placeholder"
    :rows="props.rows"
    @input="
      $emit(
        'update:modelValue',
        ($event.target as HTMLTextAreaElement)?.value ?? '',
      )
    "
    class="w-full bg-transparent border-b border-charcoal-bright focus:outline-none placeholder-charcoal-bright placeholder:text-pi-body-3-bold placeholder:pt-pi-45 text-charcoal-bright text-pi-body-3-bold text-left text resize-none"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  rows: {
    type: Number,
    default: 3,
  },
});

const inputValue = ref(props.modelValue);
</script>
