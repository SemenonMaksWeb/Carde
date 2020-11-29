<template>
  <li class="base-li"><slot></slot></li>
</template>

<script lang="ts">
export default {
  name: "base-li"
};
</script>

<style lang="sass">
.base-li
  +size(6)
  &:before
    +mr-px(15px)
    content: "\2714"
    color: var(--color-red)
</style>
