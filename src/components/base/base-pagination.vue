<template>
  <div class="base-pagination">
    <div class="base-pagination-bnt active">1</div>
    <div class="base-pagination-bnt">2</div>
    <div class="base-pagination-bnt next">></div>
  </div>
</template>

<script lang="ts">
export default {
  name: "base-pagination"
};
</script>

<style lang="sass">
.base-pagination
    +d-flex()
.base-pagination-bnt
    +mx-px(10px)
    +py-rem(6px)
    +px-rem(12px)
    border: 1px solid var(--color-mark)
    cursor: pointer
    &.active, &:hover
        background-color: var(--color-mark)
        color: #fff
</style>
