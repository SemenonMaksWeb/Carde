<template>
  <form>
    <filter-blog-input class="filter-form-blog-input" />
    <blog-last-news class="filter-form-blog-news">
      <template #title>
        <filter-blog-title text="Latest Post" />
      </template>
    </blog-last-news>
    <filter-blog-block
      text="Catagories"
      :link="link1"
    />
    <filter-blog-block
            text="Archives"
            :link="link1"
    />
  </form>
</template>

<script lang="ts">
import FilterBlogInput from "@/components/filter/blog/base/filter-blog-input.vue";
import BlogLastNews from "@/components/blog/last-blog/blog-last-news.vue";
import FilterBlogTitle from "@/components/filter/blog/base/filter-blog-title.vue";
import FilterBlogBlock from "@/components/filter/blog/base/filter-blog-block.vue";
export default {
  name: "filter-blog-form",
  components: {
    FilterBlogBlock,
    FilterBlogTitle,
    BlogLastNews,
    FilterBlogInput
  },
  data() {
    return {
      link1: [
        {
          id: 1,
          text: "Breakfast",
          to: `blog/categories/1`
        },
        {
          id: 2,
          text: "Breakfast",
          to: `blog/categories/1`
        },
        {
          id: 3,
          text: "Breakfast",
          to: `blog/categories/1`
        }
      ]
    };
  }
};
</script>

<style lang="sass">
.filter-form-blog-input
  +mb-rem(35px)
.filter-form-blog-news
  +mb-rem(35px)
</style>
