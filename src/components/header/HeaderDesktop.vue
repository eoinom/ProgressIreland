<template>
  <header class="bg-charcoal-lightest p-pi-20">
    <div class="flex items-center justify-between">
      <img
        src="/progress-ireland-logo.svg"
        alt="Progress Ireland Logo"
        class="h-[41px]"
      />

      <nav>
        <ul class="flex">
          <li v-for="link in props.links" :key="link.text">
            <span
              @click="onLinkClick(link.url)"
              class="text-pi-body-5-bold cursor-pointer px-2 py-1"
            >
              {{ link.text }}
            </span>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { type PropType } from 'vue';
import type { HeaderLink } from './headerLinks';

const props = defineProps({
  links: {
    type: Array as PropType<HeaderLink[]>,
    required: true,
  },
});

const onLinkClick = (url: string) => {
  const target = document.querySelector(url);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>
