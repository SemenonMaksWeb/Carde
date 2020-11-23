<template>
  <div class="gallery-img-block">
    <img class="img" :src="img.src" :alt="img.alt" />
  </div>
</template>

<script lang="ts">
export default {
  name: "gallery-img-block",
  props: {
    img: {
      type: Object,
      request: true
    }
  }
};
</script>

<style lang="sass">
.gallery-img-block
  height: 100%
  display: flex
  position: relative
  +size-off(3)
  &:hover
    &:before
      display: flex
  &:before
    opacity: 0.7
    align-items: center
    justify-content: center
    background-color: var(--color-red)
    content: "+"
    width: 100%
    height: 100%
    position: absolute
    display: none
    color: #fff
    +fz-rem(80px)
    cursor: pointer
</style>
