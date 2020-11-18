<template>
  <div class="contact-data-block">
    <div class="contact-data-img">
      <img :src="data.img" :alt="data.alt" />
    </div>
    <div class="contact-data-content">
      <div class="contact-data-title">{{ data.title }}</div>
      <base-text>{{ data.text }}</base-text>
    </div>
  </div>
</template>

<script lang="ts">
import BaseText from "@/components/base/base-text.vue";
export default {
  name: "contact-data-block",
  components: { BaseText },
  props: {
    data: {
      type: Object,
      request: true
    }
  }
};
</script>

<style lang="sass">

.contact-data-block
  +row-no-gutters()
  +mb-rem(25px)
  &:last-child
    +mb-rem(0px)

.contact-data-img
  +mr-rem(20px)

.contact-data-title
  +mb-rem(5px)
</style>
