<template>
  <form class="filter-blog-form">
    <filter-blog-input class="filter-form-blog-input" />
    <blog-last-news
      class="filter-form-blog-news"
      NameComponents="BlogNewsBlockFilter"
    >
      <template #title>
        <filter-blog-title text="Latest Post" />
      </template>
    </blog-last-news>
    <filter-blog-block text="Catagories" :link="link1" />
    <filter-blog-block text="Archives" :link="link2" />
    <filter-blog-title text="Keyword" />
    <div class="filter-blog-mark-blogs">
      <filter-blog-mark-block
        v-for="dataset in link3"
        :key="dataset.id"
        :mark="dataset"
      />
    </div>
  </form>
</template>

<script lang="ts">
import FilterBlogInput from "@/components/filter/blog/base/filter-blog-input.vue";
import BlogLastNews from "@/components/blog/last-blog/blog-last-news.vue";
import FilterBlogTitle from "@/components/filter/blog/base/filter-blog-title.vue";
import FilterBlogBlock from "@/components/filter/blog/base/filter-blog-block.vue";
import FilterBlogMarkBlock from "@/components/filter/blog/base/filter-blog-mark.vue";
export default {
  name: "filter-blog-form",
  components: {
    FilterBlogMarkBlock,
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
          text: "Recipe",
          to: `/blog/categories/1`
        },
        {
          id: 2,
          text: "Lunch",
          to: `/blog/categories/1`
        },
        {
          id: 3,
          text: "Drinks",
          to: `/blog/categories/1`
        }
      ],
      link2: [
        {
          id: 1,
          text: "April 2019",
          to: `/blog/archives/06.2019`
        },
        {
          id: 2,
          text: "June 2019",
          to: `/blog/archives/07.2019`
        },
        {
          id: 3,
          text: "July 2019",
          to: `/blog/archives/08.2019`
        }
      ],
      link3: [
        {
          id: 1,
          text: "Car",
          to: `/blog/tag/Car`
        },
        {
          id: 2,
          text: "Wheels",
          to: `/blog/tag/Wheels`
        },
        {
          id: 3,
          text: "Fish",
          to: `/blog/tag/Fish`
        },
        {
          id: 4,
          text: "Car",
          to: `/blog/tag/Car`
        },
        {
          id: 5,
          text: "Wheels",
          to: `/blog/tag/Wheels`
        },
        {
          id: 6,
          text: "Fish",
          to: `/blog/tag/Fish`
        }
      ]
    };
  }
};
</script>

<style lang="sass">
.filter-blog-form
  margin: 0 auto
.filter-form-blog-input
  +mb-rem(35px)
.filter-form-blog-news
  +mb-rem(35px)
.filter-blog-mark-blogs
  +size-off(12)
  +size-off-sm(9)
  +d-flex()
  +flex-wrap()
  +justify-content-between()
</style>
