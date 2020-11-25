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
  name: "page-blog",
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
.view-blog
 +row()
.view-blog__blog-row
  +size(12)
  +size-sm(8)
  +col()
.view-blog__filter-blog-form
  +mt-rem(50px)
  +mt-sm-rem(0px)
  +size-off-sm(4)
  +size-off(12)
  +pl-px(15px)
</style>
