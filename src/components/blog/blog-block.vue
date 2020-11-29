<template>
  <div class="blog-block">
    <img class="img blog-block-img" :src="blog.src" />
    <div class="blog-block-content">
      <time class="blog-block-time">
        <div class="blog-block-time-day">
          {{ blog.day }}
        </div>
        <div class="blog-block-time-month">
          {{ blog.month }}
        </div>
      </time>
      <div class="blog-block-data">
        <div class="blog-block-title">{{ blog.title }}</div>
        <div class="blog-block-meta-data">
          <div class="blog-block-count-views">
            {{ blog.CountViews }}
          </div>
          <div class="blog-block-count-comments">
            {{ blog.CountComments }} comments
          </div>
        </div>
      </div>
    </div>
    <template v-if="$route.params.id === undefined">
      <p
        class="blog-block-text"
        v-if="$route.params.id === undefined"
      >
        {{ blog.body }}
      </p>
      <router-link
        v-if="$route.params.id === undefined"
        class="blog-block-link"
        :to="'/blog/' + blog.id"
      >
        Read More
      </router-link>
    </template>
    <div v-html="blog.content" v-else></div>
  </div>
</template>

<script lang="ts">
export default {
  name: "blog-block",
  props: {
    blog: {
      type: Object,
      request: true
    }
  }
};
</script>

<style lang="sass">
.blog-block
  width: 100%
  +mb-rem(55px)
  &:last-child
    +mb-rem(0px)

.blog-block-img
  max-height: 425px
  +mb-rem(30px)

.blog-block-content
  +row-no-gutters()
  +mb-rem(15px)
.blog-block-time
  +align-items-start()
  +mr-rem(10px)
  +py-rem(10px)
  +px-rem(10px)
  +mb-rem(10px)
  background-color: var(--color-red)
  font-weight: 700
  color: #fff
  text-align: center

.blog-block-time-day
  +fz-rem(18px)
  +mb-rem(6px)
.blog-block-time-month
  +fz-rem(14px)

.blog-block-title
  +fz-rem(20px)
  +mb-rem(15px)
  font-weight: 600
  color: var(--header-bg)

.blog-block-data
  +mb-rem(15px)
.blog-block-meta-data
  +row-no-gutters()
  color: var(--color-meta-data)
  +fz-rem(13px)
.blog-block-count-views
  +mr-rem(15px)

.blog-block-text
  color: var(--text-description)
  +mb-rem(15px)
.blog-block-link
  +fz-rem(13px)
  font-weight: 600
  color: var(--color-blog-link)
  text-decoration: none
</style>
