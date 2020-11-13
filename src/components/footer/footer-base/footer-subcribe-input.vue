<template>
  <div class="footer-subcribe-blogs">
    <input
      class="footer-subcribe-input"
      type="text"
      placeholder="Enter you email here"
    />
    <button class="footer-subcribe-button">
      Отправить
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: "footer-subcribe-input"
};
</script>

<style lang="sass">
.footer-subcribe-blogs
  +d-flex()
.footer-subcribe-input
    color: var(--color-input)
    width: 100%
    +fz-rem(13px)
    +py-rem(15px)
    +px-rem(5px)
.footer-subcribe-button
  background-color: var(--color-red)
  +px-rem(5px)
</style>
