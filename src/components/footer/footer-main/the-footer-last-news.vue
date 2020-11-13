<template>
  <div class="footer-last-news footer-blogs">
    <footer-title>Latest News</footer-title>
    <div class="footer-last-news-blogs">
      <footer-news-blog
        v-for="dataset in news"
        :key="dataset.id"
        :news="dataset"
      >
      </footer-news-blog>
    </div>
  </div>
</template>

<script lang="ts">
import FooterTitle from "@/components/footer/footer-base/footer-title.vue";
import FooterNewsBlog from "@/components/footer/footer-news/footer-news-blog.vue";
export default {
  name: "the-footer-last-news",
  components: { FooterNewsBlog, FooterTitle },
  data() {
    return {
      news: [
        {
          id: 1,
          src: require("@/assets/img/news/news_id1_1.png"),
          text: `Lorem Ipsum is simply dumm
            "text of the and useble`,
          date: "17 jun, 2015"
        },
        {
          id: 2,
          src: require("@/assets/img/news/news_id1_1.png"),
          text: `Lorem Ipsum is simply dumm
            "text of the and useble`,
          date: "17 jun, 2015"
        },
        {
          id: 3,
          src: require("@/assets/img/news/news_id1_1.png"),
          text: `Lorem Ipsum is simply dumm
            "text of the and useble`,
          date: "17 jun, 2015"
        }
      ]
    };
  }
};
</script>

<style lang="sass">
.footer-last-news
  +mt-rem(15px)
  +mt-sm-rem(0px)
  +size-sm(4) // lg
  +size(12)
  +mb-rem(15px)
</style>
