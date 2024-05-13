<template>
  <form
    action="https://formspree.io/f/mbjnbkqn"
    method="POST"
    class="flex flex-col w-full mb-pi-75 lg:mb-0"
  >
    <div class="flex flex-col lg:flex-row gap-x-5">
      <TextInput type="text" name="name" placeholder="Name" />
      <TextInput
        type="email"
        name="email"
        placeholder="E-mail Address"
        class="mt-pi-20 lg:mt-0"
      />
    </div>
    <TextAreaInput
      name="message"
      placeholder="Message"
      :rows="3"
      class="mt-pi-15"
    />
    <Button type="submit" label="Submit" class="w-fit" />
  </form>
</template>

<script setup lang="ts">
import Button from '../forms/Button.vue';
import TextInput from '../forms/TextInput.vue';
import TextAreaInput from '../forms/TextAreaInput.vue';
</script>
