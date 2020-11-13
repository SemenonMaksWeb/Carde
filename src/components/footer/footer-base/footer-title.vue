<template>
  <h3 class="footer-title"><slot /></h3>
</template>

<script lang="ts">
export default {
  name: "footer-title"
};
</script>

<style lang="sass">
.footer-title
    color: #ffffff
    +mb-rem(30px)
    +lh-rem(24px)
    +fz-rem(18px)
    font-family: var(--ff-title-footer)
</style>
