<template>
  <div class="about-section-proposal">
    <base-container>
      <div class="about-section-proposal-row">
        <div class="about-section-proposal-content">
          <div class="about-section-proposal-title">
            36
            <span class="about-section-proposal-span">
              Month Promo Package only for
            </span>
            $300
          </div>
          <div class="about-section-proposal-text">
            Keeping a well-maintained vehicle is paramount
            to your safety. That is why our team of nearly
            500
          </div>
        </div>
        <base-button class="about-section-proposal-button">
          See all Package
        </base-button>
      </div>
    </base-container>
  </div>
</template>

<script lang="ts">
import BaseContainer from "@/components/base/base-container.vue";
import BaseButton from "@/components/base/base-button.vue";
export default {
  name: "about-section-proposal",
  components: { BaseButton, BaseContainer }
};
</script>

<style lang="sass">
.about-section-proposal
  +py-em(50px)
  background-color: var(--text-nav-top)
  color: #fff
  /*background-image: url("")*/
.about-section-proposal-row
  +row-no-gutters()
  +justify-content-between()
  +align-items-center()
.about-section-proposal-title
  +fz-rem(48px)
  +lh-rem(26px)
  font-weight: 700
  +mb-rem(15px)
.about-section-proposal-span
  +fz-rem(26px)
</style>
