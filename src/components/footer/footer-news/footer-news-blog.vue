<template>
  <div class="footer-news-blog">
    <div class="footer-news-blog-img">
      <img :src="news.src" />
    </div>
    <div class="footer-news-blog-content">
      <p class="footer-news-blog-text">{{ news.text }}</p>
      <time class="footer-news-blog-date">{{
        news.date
      }}</time>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "footer-news-blog",
  props: {
    news: {
      type: Object,
      request: true
    }
  }
};
</script>

<style lang="sass">
.footer-news-blog
  +d-flex()
.footer-news-blog-img
  +mr-rem(20px)
.footer-news-blog-text
  font-family: var(--ff-link)
  +fz-rem(13px)
  +lh-rem(23px)
  color: var(--text-footer)
.footer-news-blog-date
  font-family: var(--ff-footer-news)
  +fz-rem(12px)
  +lh-rem(25px)
  color: #ff4848
</style>
