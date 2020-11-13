<template>
  <router-link class="footer-link" :to="link.to"
    >{{ link.text }}
  </router-link>
</template>

<script lang="ts">
export default {
  name: "footer-link",
  props: {
    link: {
      type: Object,
      request: true
    }
  }
};
</script>

<style lang="sass">
.footer-link
  +d-block()
  text-decoration: none
  color: var(--text-footer)
  +mb-rem(20px)
  +fz-rem(13px)
  font-family: var(--ff-link)
  &:last-child
    +mb-rem(0px)
</style>
