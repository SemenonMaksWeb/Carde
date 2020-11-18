<template>
  <form @submit.prevent  class="contact-form">
    <base-title>Send Message</base-title>
    <div class="contact-form-data-user">
      <base-input
        placeholder="Your Name"
        label="Full Name"
      />
      <base-input placeholder="Your Email" label="Email" />
    </div>
    <base-input
      class="contact-form-textarea"
      component="textarea"
      placeholder="Your Massage"
    />
    <div class="contact-form-button-block">
      <base-button class="contact-form-button-submit"
        >SEND</base-button
      >
    </div>
  </form>
</template>

<script lang="ts">
import BaseInput from "@/components/base/base-input.vue";
import BaseTitle from "@/components/base/base-title.vue";
import BaseButton from "@/components/base/base-button.vue";
export default {
  name: "contact-form",
  components: { BaseButton, BaseTitle, BaseInput }
};
</script>

<style lang="sass">
.contact-form-data-user
    +row-no-gutters()
    +justify-content-between()
    +mb-rem(30px)

.contact-form-textarea
  +size-off(12)
  height: 200px

.contact-form-button-block
  +mt-rem(20px)
  text-align: right
</style>
