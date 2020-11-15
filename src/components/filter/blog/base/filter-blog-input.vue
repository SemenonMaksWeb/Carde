<template>
  <input
    class="filter-blog-input"
    name="search-blog"
    placeholder="Enter keyword"
  />
</template>

<script lang="ts">
export default {
  name: "filter-blog-input"
};
</script>

<style lang="sass">
.filter-blog-input
    /*font-family: Bitter;*/
    +fz-rem(13px)
    color: var(--color-input-search)
</style>
