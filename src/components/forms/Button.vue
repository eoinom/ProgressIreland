<template>
  <button
    type="button"
    @click="onClick"
    class="bg-transparent text-pi-body-3-bold text-charcoal-bright hover:text-charcoal-lighter transition"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();

const onClick = () => {
  emit('click', 1);
  console.log('button clicked');
};
</script>
