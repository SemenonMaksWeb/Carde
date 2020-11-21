<template>
  <base-container>
    <base-section>
      <div class="view-blog">
        <blog-row class="view-blog__blog-row"></blog-row>
        <filter-blog-form
          class="view-blog__filter-blog-form"
        ></filter-blog-form>
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
