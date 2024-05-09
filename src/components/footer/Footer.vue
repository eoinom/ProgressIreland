<template>
  <footer class="bg-blue-bright p-pi-10 lg:p-pi-20">
    <div
      class="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-[103px] lg:mt-[367px] mb-4 lg:mb-52"
    >
      <div class="flex flex-col w-full lg:w-1/2 mb-10 lg:mb-0">
        <h3
          class="text-pi-heading-4 lg:text-pi-heading-3 text-charcoal-bright pb-pi-10 lg:pb-pi-15"
        >
          Stay tuned in
        </h3>
        <a
          href="mailto:hello@progressireland.org"
          class="text-pi-body-3-bold lg:text-pi-body-1 text-charcoal-bright pb-pi-5 lg:pb-pi-10"
          >hello@progressireland.org</a
        >
        <!-- <span
          class="text-pi-body-3-bold lg:text-pi-body-1 text-charcoal-bright pb-pi-5 lg:pb-pi-10"
          >X (Formerly Twitter)</span
        >
        <span
          class="text-pi-body-3-bold lg:text-pi-body-1 text-charcoal-bright pb-pi-5 lg:pb-pi-10"
          >@ProgressIreland</span
        >
        <span
          class="text-pi-body-3-bold lg:text-pi-body-1 text-charcoal-bright pb-pi-5 lg:pb-pi-10"
          >LinkedIn/Progress Ireland</span
        > -->
      </div>

      <div class="flex flex-col w-full lg:w-1/2">
        <h3
          class="text-pi-heading-4 lg:text-pi-heading-3 text-charcoal-bright mb-pi-10 lg:mb-7"
        >
          Get in touch with us
        </h3>
        <ContactForm />
      </div>
    </div>

    <div class="flex flex-col lg:flex-row justify-between">
      <img
        src="/progress-ireland-logo.svg"
        alt="Progress Ireland Logo"
        class="h-pi-35 self-start mb-pi-10 lg:mb-0"
      />
      <div class="flex justify-between lg:space-x-2">
        <a
          href="/terms-of-use"
          class="text-pi-body-6-bold lg:text-pi-body-5-bold text-charcoal-bright"
          >Terms of Use</a
        >
        <a
          href="/privacy-policy"
          class="text-pi-body-6-bold lg:text-pi-body-5-bold text-charcoal-bright"
          >Privacy Policy</a
        >
        <span
          class="text-pi-body-6-bold lg:text-pi-body-5-bold text-charcoal-bright"
          >Designed by And—Now</span
        >
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import ContactForm from '../forms/ContactForm.vue';
</script>
