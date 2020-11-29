<template>
  <div class="service-block">
    <img
      class="service-block-img"
      src="@/assets/img/service/layers.png"
      alt=""
    />
    <div class="service-block-button">
      Car Cleaning
    </div>
    <div class="service-block-before">
      <div class="service-block-before-container">
        <h3 class="service-block-before-title">
          Inspection
        </h3>
        <div class="service-block-before-text">
          Nunc placerat phareta lorem onec benean porttitor
        </div>
        <base-button class="service-block-before-button">
          Read More
        </base-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BaseButton from "@/components/base/base-button.vue";
export default {
  name: "service-block",
  components: { BaseButton }
};
</script>

<style lang="sass">
.service-block
  +size-sm(5)
  +size-lg(3)
  +col()
  +mb-rem(25px)
  position: relative
  &:hover
    .service-block-before
      +d-flex()
      +justify-content-center()
      +align-items-center()
.service-block-button
    +fz-rem(18px)
    font-weight: 800
    position: absolute
    bottom: 0px
    color: #fff
    border-bottom: 60px solid #000
    border-left: 20px solid transparent
    border-right: 20px solid transparent
    height: 0
    width: calc(100% - 60px)
    text-align: center
    line-height: 60px
.service-block-before
  +d-none()
  position: absolute
  z-index: 1000
  top: 0
  background-color: var(--color-red)
  height: 100%
  width: calc(100% - 60px)
.service-block-before-container
  color: #fff
  text-align: center
.service-block-before-title
  +mb-rem(20px)
.service-block-before-text
  font-weight: 600
  +fz-rem(14px)
  +mb-rem(35px)
  +mx-rem(15px)
.service-block-before-button
  +py-rem(10px)
  +px-rem(10px)
  font-weight: 700
  +fz-rem(13px)
  border: 1px solid #fff
  text-transform: uppercase
.service-block-img
  height: 100%
  width: 100%
</style>
