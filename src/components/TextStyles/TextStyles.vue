<template>
  <section class="w-full overflow-x-hidden m-5">
    <table
      class="w-auto border-collapse border-solid border-2 border-charcoal-light"
    >
      <thead>
        <tr>
          <th
            class="text-left whitespace-nowrap w-[15%] border-collapse border-solid border-2 border-charcoal-light px-3"
          >
            Token Name
          </th>
          <th
            class="text-left whitespace-nowrap w-[20%] border-collapse border-solid border-2 border-charcoal-light px-3"
          >
            Tailwind Class
          </th>
          <th
            class="text-left w-full border-collapse border-solid border-2 border-charcoal-light px-3"
          >
            Sample
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="style in textStyles" :key="style.token">
          <td
            class="whitespace-nowrap border-collapse border-solid border-2 border-charcoal-light px-3"
          >
            {{ style.token }}
          </td>
          <td
            class="whitespace-nowrap border-collapse border-solid border-2 border-charcoal-light px-3"
          >
            {{ style.class }}
          </td>
          <td
            class="w-full py-6 border-collapse border-solid border-2 border-charcoal-light px-3"
          >
            <h1 :class="style.class" class="">
              {{ style.sample ?? defaultSampleText }}
            </h1>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
const defaultSampleText = 'The quick fox jumped over the lazy dog';

const textStyles = [
  {
    token: 'H1',
    class: 'text-pi-heading-1',
    sample: 'The quick fox j...',
  },
  {
    token: 'H2',
    class: 'text-pi-heading-2',
    sample: 'The quick fox jumped o...',
  },
  {
    token: 'H3',
    class: 'text-pi-heading-3',
    sample: 'The quick fox jumped over t...',
  },
  {
    token: 'H4',
    class: 'text-pi-heading-4-bold',
  },
  {
    token: 'H4-light',
    class: 'text-pi-heading-4',
  },
  {
    token: 'H5',
    class: 'text-pi-heading-5-bold',
  },
  {
    token: 'H5-light',
    class: 'text-pi-heading-5',
  },
  {
    token: 'P1',
    class: 'text-pi-body-1',
  },
  {
    token: 'P2',
    class: 'text-pi-body-2',
  },
  {
    token: 'P3-bold',
    class: 'text-pi-body-3-bold',
  },
  {
    token: 'P3-light',
    class: 'text-pi-body-3-light',
  },
  {
    token: 'P4-bold',
    class: 'text-pi-body-4-bold',
  },
  {
    token: 'P4-light',
    class: 'text-pi-body-4-light',
  },
  {
    token: 'P5-bold',
    class: 'text-pi-body-5-bold',
  },
  {
    token: 'P5-light',
    class: 'text-pi-body-5-light',
  },
  {
    token: 'P6-bold',
    class: 'text-pi-body-6-bold',
  },
  {
    token: 'P6-light',
    class: 'text-pi-body-6-light',
  },
];
</script>
