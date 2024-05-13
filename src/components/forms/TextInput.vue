<template>
  <input
    type="text"
    v-model="inputValue"
    @input="
      $emit(
        'update:modelValue',
        ($event.target as HTMLInputElement)?.value ?? '',
      )
    "
    class="w-full bg-transparent border-b border-charcoal-bright focus:outline-none placeholder-charcoal-bright placeholder:text-pi-body-3-bold text-charcoal-bright text-pi-body-3-bold"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
});

const inputValue = ref(props.modelValue);
</script>
