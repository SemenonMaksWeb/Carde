<template>
  <div class="news-block">
    <div class="news-block-img">
      <img :src="news.src" />
    </div>
    <div class="news-block-content-filter">
      <h3 class="news-block-title">{{ news.title }}</h3>
      <div class="news-block-meta-data">
        <div class="news-block-tag">{{ news.tag }}</div>
        <time class="news-block-date filter">
          {{ news.date }}
        </time>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "news-block-filter",
  props: {
    news: {
      type: Object,
      request: true
    }
  }
};
</script>

<style lang="sass">
.news-block-title
  font-weight: 600
  +fz-rem(14px)
  color: var(--header-bg)

.news-block-content-filter
  +row-no-gutters()
  +flex-column()
  +justify-content-between()
  +py-px(5px)

.news-block-meta-data
  +row-no-gutters()
  +justify-content-between()
  +align-items-center()

.news-block-tag
  font-family: var(--ff-title-footer)
  +fz-rem(12px)
  font-weight: 500
  text-transform: uppercase
  color: var(--color-red)
.news-block-date.filter
    +lh-rem(0px)
    color: var(--color-filter-blog)
</style>
