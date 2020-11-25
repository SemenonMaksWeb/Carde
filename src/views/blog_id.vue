<template>
  <base-container>
    <base-section>
      <div class="view-blog">
        <blog-row
          class="view-blog__blog-row"
          :blog="blog"
        />
        <filter-blog-form
          class="view-blog__filter-blog-form"
        />
      </div>
    </base-section>
  </base-container>
</template>

<script lang="ts">
import BaseContainer from "@/components/base/base-container.vue";
import BaseSection from "@/components/base/base-section.vue";
import BlogRow from "@/components/blog/blog-row.vue";
import FilterBlogForm from "@/components/filter/blog/filter-blog-form.vue";
export default {
  name: "blog_id",
  components: {
    FilterBlogForm,
    BlogRow,
    BaseSection,
    BaseContainer
  },
  data() {
    return {
      blog: [
        {
          id: 1,
          src: require("@/assets/img/news/news_id1_1.png"),
          day: "22",
          month: "MAR",
          title: "There will be short heading with image",
          content: `<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
           form, by injected humour, or randomised words which don't look even slightly believable
            in some form, by injected humour, or randomised words which don't look even slightly believable There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
           form, by injected humour, or randomised words which don't look even slightly believable
            in some form, by injected humour, or randomised words which don't look even slightly believableThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
           form, by injected humour, or randomised words which don't look even slightly believable
            in some form, by injected humour, or randomised words which don't look even slightly believable <h1>dagdfg</h1></p>`,
          CountComments: 17,
          CountViews: 100
        }
      ]
    };
  }
};
</script>

<style lang="sass"></style>
