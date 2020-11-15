<template>
  <div class="blog-row">
    <blog-block
      v-for="dataset in blog"
      :key="dataset.id"
      :blog="dataset"
    />
  </div>
</template>

<script lang="ts">
import BlogBlock from "@/components/blog/blog-block.vue";
export default {
  name: "blog-row",
  components: { BlogBlock },
  data() {
    return {
      blog: [
        {
          id: 1,
          src: require("@/assets/img/news/news_id1_1.png"),
          day: "22",
          month: "MAR",
          title: "There will be short heading with image",
          body: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
           form, by injected humour, or randomised words which don't look even slightly believable 
            in some form, by injected humour, or randomised words which don't look even slightly believable`,
          CountComments: 17,
          CountViews: 100
        },
        {
          id: 2,
          src: require("@/assets/img/news/news_id1_1.png"),
          day: "22",
          month: "MAR",
          title: "There will be short heading with image",
          body: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
           form, by injected humour, or randomised words which don't look even slightly believable
            in some form, by injected humour, or randomised words which don't look even slightly believable`,
          CountComments: 17,
          CountViews: 100
        },
        {
          id: 3,
          src: require("@/assets/img/news/news_id1_1.png"),
          day: "22",
          month: "MAR",
          title: "There will be short heading with image",
          body: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
           form, by injected humour, or randomised words which don't look even slightly believable
            in some form, by injected humour, or randomised words which don't look even slightly believable`,
          CountComments: 17,
          CountViews: 100
        }
      ]
    };
  }
};
</script>

<style lang="sass">
.blog-row
</style>
