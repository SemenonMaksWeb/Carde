<template>
  <header class="base-header">
    <base-container>
      <section class="section-header">
        <the-logo />
        <the-header-top />
      </section>
    </base-container>
    <the-nav-main></the-nav-main>
  </header>
</template>

<script lang="ts">
import TheLogo from "@/components/header/the-logo.vue";
import TheHeaderTop from "@/components/header/the-header-top.vue";
import TheNavMain from "@/components/header/the-nav-main.vue";
import BaseContainer from "@/components/base/base-container.vue";

export default {
  name: "the-header",
  components: { BaseContainer, TheNavMain, TheHeaderTop, TheLogo }
};
</script>

<style lang="sass">
.base-header
    +pt-rem(35px)
    background-color: var(--header-bg)
    .section-header
        +row-no-gutters()
        +justify-content-between()
        +align-items-center()
</style>
