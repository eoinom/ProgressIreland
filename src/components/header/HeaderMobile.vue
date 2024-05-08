<template>
  <header
    class="bg-charcoal-lightest p-pi-10"
    :class="isMenuOpen ? 'fixed h-screen w-screen' : 'h-auto'"
  >
    <div class="flex items-center justify-between z-50">
      <img
        src="/progress-ireland-logo.svg"
        alt="Progress Ireland Logo"
        class="h-pi-35"
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
        class="h-pi-35 z-50"
        @click.stop="isMenuOpen = false"
      />
    </div>

    <nav v-show="isMenuOpen" class="fixed top-0 left-0 h-screen w-screen z-40">
      <ul class="h-full flex flex-col items-center justify-center">
        <li v-for="link in props.links" :key="link.text" class="px-4 py-2">
          <span @click="onLinkClick(link.url)" class="text-pi-body-1">
            {{ link.text }}
          </span>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { type PropType, ref, watch, nextTick } from 'vue';
import type { HeaderLink } from './headerLinks';

const props = defineProps({
  links: {
    type: Array as PropType<HeaderLink[]>,
    required: true,
  },
});

const isMenuOpen = ref(false);

watch(isMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.position = 'fixed'; // prevent scrolling
  } else {
    document.body.style.position = '';
  }
});

const onLinkClick = async (url: string) => {
  isMenuOpen.value = false;
  const target = document.querySelector(url);
  if (target) {
    await nextTick();
    target.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>
