<template>
  <div class="blog-row">
    <template v-if="blog.length !== undefined">
      <blog-block
        v-for="dataset in blog"
        :key="dataset.id"
        :blog="dataset"
      />
    </template>
    <template v-else>
      <blog-block :blog="blog" />
    </template>
  </div>
</template>

<script lang="ts">
import BlogBlock from "@/components/blog/blog-block.vue";
export default {
  name: "blog-row",
  components: { BlogBlock },
  props: {
    blog: {
      type: Array || Object
    }
  }
};
</script>

<style lang="sass">
.blog-row
</style>
