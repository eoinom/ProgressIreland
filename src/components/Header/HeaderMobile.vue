<template>
  <header
    class="bg-charcoal-lightest p-[10px]"
    :class="isMenuOpen ? 'h-screen' : 'h-auto'"
  >
    <div class="flex items-center justify-between z-50">
      <img
        src="/progress-ireland-logo.svg"
        alt="Progress Ireland Logo"
        class="h-[35px]"
      />

      <img
        v-show="!isMenuOpen"
        src="burger-icon.svg"
        alt="Navigation menu"
        class="h-[29px] z-50"
        @click.stop="isMenuOpen = true"
      />

      <img
        v-show="isMenuOpen"
        src="close-icon.svg"
        alt="Navigation menu"
        class="h-[35px] z-50"
        @click.stop="isMenuOpen = false"
      />
    </div>

    <nav v-show="isMenuOpen" class="fixed top-0 left-0 h-screen w-screen z-40">
      <ul class="h-full flex flex-col items-center justify-center">
        <li v-for="link in props.links" :key="link.text" class="px-4 py-2">
          <a :href="link.url" class="text-pi-body-1">
            {{ link.text }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { type PropType, defineProps, ref } from 'vue';
import type { HeaderLink } from './headerLinks';

const props = defineProps({
  links: {
    type: Array as PropType<HeaderLink[]>,
    required: true,
  },
});

const isMenuOpen = ref(false);
</script>
