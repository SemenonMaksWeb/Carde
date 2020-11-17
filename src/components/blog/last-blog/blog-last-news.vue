<template>
  <div class="last-news">
    <slot name="title"> </slot>
    <div class="last-news-blogs">
      <component
        :is="NameComponents"
        v-for="dataset in news"
        :key="dataset.id"
        :news="dataset"
      >
      </component>
    </div>
  </div>
</template>

<script lang="ts">
import BlogNewsBlock from "@/components/blog/last-blog/base/blog-news-block.vue";
import BlogNewsBlockFilter from "@/components/blog/last-blog/base/blog-news-block-filter.vue";
export default {
  name: "blog-last-news",
  components: { BlogNewsBlockFilter, BlogNewsBlock },
  props: {
    NameComponents: {
      request: true
    }
  },
  data() {
    return {
      news: [
        {
          id: 1,
          src: require("@/assets/img/news/news_id1_1.png"),
          title: "title item news blogs",
          text: `Lorem Ipsum is simply dumm
            "text of the and useble`,
          date: "17 jun, 2015",
          tag: "Cart"
        },
        {
          id: 2,
          src: require("@/assets/img/news/news_id1_1.png"),
          text: `Lorem Ipsum is simply dumm
            "text of the and useble`,
          date: "17 jun, 2015",
          title: "title item news blogs",
          tag: "Cart"
        },
        {
          id: 3,
          src: require("@/assets/img/news/news_id1_1.png"),
          text: `Lorem Ipsum is simply dumm
            "text of the and useble`,
          date: "17 jun, 2015",
          title: "title item news blogs",
          tag: "Cart"
        }
      ]
    };
  }
};
</script>

<style lang="sass">
.last-news
  +mt-rem(15px)
  +mt-sm-rem(0px)
  +mb-rem(15px)
</style>
