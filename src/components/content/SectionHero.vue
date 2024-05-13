<template>
  <section
    class="w-full border-b border-charcoal-bright bg-charcoal-lightest px-pi-10 lg:px-pi-20"
  >
    <img
      src="/hero-triangles-mbl.svg"
      alt="Graphic with multiple coloured triangles"
      class="sm:hidden w-full"
    />
    <img
      src="/hero-triangles-tablet.svg"
      alt="Graphic with multiple coloured triangles"
      class="hidden sm:block lg:hidden w-full"
    />
    <img
      src="/hero-triangles-desktop.svg"
      alt="Graphic with multiple coloured triangles"
      class="hidden lg:block w-full"
    />
    <h1
      class="font-headings text-pi-heading-4-large sm:text-pi-heading-3 md:text-pi-heading-2 lg:text-pi-heading-1 text-charcoal-bright max-w-[380px] sm:max-w-[520px] md:max-w-[610px] lg:max-w-[940px] pt-pi-40 pb-pi-15 lg:pt-pi-100 lg:pb-pi-50"
    >
      {{ title }}
    </h1>
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
