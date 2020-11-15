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
  name: "blog.vue",
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
  +size(8)
  +col()
.view-blog__filter-blog-form
  +size-off(4)
  +pl-px(15px)
</style>
