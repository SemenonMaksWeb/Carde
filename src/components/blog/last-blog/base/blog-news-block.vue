<template>
  <div class="news-block">
    <div class="news-block-img">
      <img :src="news.src" />
    </div>
    <div class="news-block-content">
      <p class="news-block-text">{{ news.text }}</p>
      <time class="news-block-date">{{ news.date }}</time>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "news-block",
  props: {
    news: {
      type: Object,
      request: true
    }
  }
};
</script>

<style lang="sass">
.news-block
  +d-flex()
.news-block-img
  +mr-rem(20px)
.news-block-text
  +fz-rem(13px)
  +lh-rem(23px)
  color: var(--text-footer)
.news-block-date
  font-family: var(--ff-news)
  +fz-rem(12px)
  +lh-rem(25px)
  color: #ff4848
</style>
