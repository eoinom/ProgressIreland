<template>
  <component
    :is="link ? 'a' : 'article'"
    class="flex flex-col border-y border-charcoal-light p-pi-10 lg:py-pi-20"
    :class="bgColourClass[bgColour]"
    :href="link"
    :target="link ? '_blank' : null"
    :rel="link ? 'noopener noreferrer' : null"
  >
    <div
      class="flex w-full lg:w-1/2 justify-between place-self-end mb-pi-10 lg:mb-pi-15"
    >
      <span
        v-for="attribute in attributes"
        class="text-pi-body-6-bold lg:text-pi-body-5-bold text-charcoal-bright mr-pi-20"
        >{{ attribute }}</span
      >
    </div>
    <h3
      class="font-headings text-pi-heading-5-bold lg:text-pi-heading-4-bold text-charcoal-bright"
    >
      {{ title }}
    </h3>
  </component>
</template>

<script setup lang="ts">
import { type PropType } from 'vue';
import { Colours } from '../../types/coloursEnum';

const bgColourClass = {
  [Colours.Transparent]: 'bg-transparent',
  [Colours.White]: 'bg-white',
  [Colours.GreenBright]: 'bg-green-bright',
  [Colours.GreenLight]: 'bg-green-light',
  [Colours.YellowBright]: 'bg-yellow-bright',
  [Colours.YellowLight]: 'bg-yellow-light',
  [Colours.BlueBright]: 'bg-blue-bright',
  [Colours.CharcoalBright]: 'bg-charcoal-bright',
  [Colours.CharcoalLight]: 'bg-charcoal-light',
  [Colours.CharcoalLighter]: 'bg-charcoal-lighter',
  [Colours.CharcoalLightest]: 'bg-charcoal-lightest',
};

defineProps({
  title: {
    type: String,
    required: true,
  },
  attributes: {
    type: Array<String>,
    default: [],
  },
  bgColour: {
    type: Object as PropType<Colours>,
    default: Colours.Transparent,
  },
  link: {
    type: String,
    required: false,
  },
});
</script>
