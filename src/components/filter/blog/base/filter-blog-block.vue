<template>
  <div class="filter-blog-block">
    <filter-blog-title :text="text"></filter-blog-title>
    <div class="filter-blog-block-content">
      <filter-blog-link
        v-for="dataset in link"
        :key="dataset.id"
        :link="dataset"
      />
    </div>
  </div>
</template>

<script lang="ts">
import FilterBlogTitle from "@/components/filter/blog/base/filter-blog-title.vue";
import FilterBlogLink from "@/components/filter/blog/base/filter-blog-link.vue";
export default {
  name: "filter-blog-block",
  components: { FilterBlogLink, FilterBlogTitle },
  props: {
    text: {
      type: String,
      request: true
    },
    link: {
      type: Array,
      request: true
    }
  }
};
</script>

<style lang="sass">
.filter-blog-block
    +mb-rem(30px)
    &:last-child
        +mb-rem(0px)
</style>
