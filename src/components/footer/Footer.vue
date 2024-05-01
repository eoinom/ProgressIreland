<template>
  <footer class="bg-blue-bright p-[10px] lg:p-5">
    <div
      class="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-[103px] lg:mt-[367px] mb-4 lg:mb-52"
    >
      <div class="flex flex-col w-full lg:w-1/2 mb-10 lg:mb-0">
        <h3
          class="text-pi-heading-4 lg:text-pi-heading-3 text-charcoal-bright pb-[10px] lg:pb-[15px]"
        >
          Stay tuned in
        </h3>
        <a
          href="mailto:hello@progressireland.org"
          class="text-pi-body-3-bold lg:text-pi-body-1 text-charcoal-bright pb-[5px] lg:pb-[10px]"
          >hello@progressireland.org</a
        >
        <span
          class="text-pi-body-3-bold lg:text-pi-body-1 text-charcoal-bright pb-[5px] lg:pb-[10px]"
          >X (Formerly Twitter)</span
        >
        <span
          class="text-pi-body-3-bold lg:text-pi-body-1 text-charcoal-bright pb-[5px] lg:pb-[10px]"
          >@ProgressIreland</span
        >
        <span
          class="text-pi-body-3-bold lg:text-pi-body-1 text-charcoal-bright pb-[5px] lg:pb-[10px]"
          >LinkedIn/Progress Ireland</span
        >
      </div>

      <div class="flex flex-col w-full lg:w-1/2">
        <h3
          class="text-pi-heading-4 lg:text-pi-heading-3 text-charcoal-bright mb-[10px] lg:mb-7"
        >
          Get in touch with us
        </h3>
        <form class="flex flex-col w-full mb-[75px] lg:mb-0">
          <div class="flex flex-col lg:flex-row gap-x-5">
            <TextInput type="text" placeholder="Name" />
            <TextInput type="email" placeholder="E-mail Address" />
          </div>
          <TextAreaInput placeholder="Message" :rows="3" />
          <Button label="Submit" class="w-fit" />
        </form>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row justify-between">
      <img
        src="/progress-ireland-logo.svg"
        alt="Progress Ireland Logo"
        class="h-[35px] self-start mb-[10px] lg:mb-0"
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
        <a
          href="/#contact"
          class="text-pi-body-6-bold lg:text-pi-body-5-bold text-charcoal-bright"
          >Contact</a
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
import Button from '../forms/Button.vue';
import TextInput from '../forms/TextInput.vue';
import TextAreaInput from '../forms/TextAreaInput.vue';
</script>
