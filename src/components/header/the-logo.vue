<template>
  <div class="the-logo">
    <img
      class="logo-img"
      :src="require('@/assets/img/logo.png')"
      alt="logo"
    />
    <div class="logo-content">
      <div class="logo-name">
        CAR <span class="logo-name-span">RE</span>
      </div>
      <div class="logo-description">
        Biggest car repair service
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "the-logo"
};
</script>

<style lang="sass">
// the-logo
.the-logo
    +d-flex()
    //logo-img
    .logo-img
        +d-block()
        +mr-rem(15px)
    //logo-content
    .logo-content
        font-family: var(--ff-logo)
        // logo-name
        .logo-name
            +fz-rem(30px)
            font-weight: 700
            color: var(--color-red)
            +mb-em(5px)
            // logo-name-span
            .logo-name-span
                color: #fff
        // logo-description
        .logo-description
            color: var(--text-description)
            +fz-rem(12px)
            font-weight: 500
</style>
