<template>
  <section
    class="flex flex-col bg-charcoal-lightest p-pi-10 pb-pi-50 lg:pt-pi-100 lg:px-pi-20"
  >
    <div
      class="w-full border-b border-charcoal-bright pb-pi-5 mb-pi-5 lg:mb-pi-20"
    >
      <h2
        class="text-pi-body-5-bold lg:text-pi-body-3-bold text-charcoal-bright"
      >
        {{ title }}
      </h2>
    </div>

    <div
      class="flex flex-col lg:flex-row w-full lg:gap-x-pi-20 justify-between"
    >
      <div class="w-full lg:w-1/2 mb-pi-15 lg:mb-0">
        <slot name="leftColumn"></slot>
      </div>
      <div class="w-full lg:w-1/2 lg:gap-x-pi-20">
        <slot name="rightColumn"></slot>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
