<template>
  <div class="footer-news-block">
    <div class="footer-news-block-img">
      <img :src="news.src" />
    </div>
    <div class="footer-news-block-content">
      <p class="footer-news-block-text">{{ news.text }}</p>
      <time class="footer-news-block-date">{{
        news.date
      }}</time>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "footer-news-block",
  props: {
    news: {
      type: Object,
      request: true
    }
  }
};
</script>

<style lang="sass">
.footer-news-block
  +d-flex()
.footer-news-block-img
  +mr-rem(20px)
.footer-news-block-text
  +fz-rem(13px)
  +lh-rem(23px)
  color: var(--text-footer)
.footer-news-block-date
  font-family: var(--ff-footer-news)
  +fz-rem(12px)
  +lh-rem(25px)
  color: #ff4848
</style>
