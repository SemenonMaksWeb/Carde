<template>
  <base-container>
    <div class="about-row-advantage">
      <about-block-advantage
        v-for="dataset in data"
        :key="dataset.id"
        :data="dataset"
      />
    </div>
  </base-container>
</template>

<script lang="ts">
import AboutBlockAdvantage from "@/components/about/base/about-block-advantage.vue";
import BaseContainer from "@/components/base/base-container.vue";
export default {
  name: "about-section-advantage",
  components: { BaseContainer, AboutBlockAdvantage },
  data() {
    return {
      data: [
        {
          id: 1,
          title: "Speed Metar Repair",
          svg: require("@/assets/img/about/brake-disc.svg"),
          text: `On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure
                  of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue`
        },
        {
          id: 2,
          title: "Speed Metar Repair",
          svg: require("@/assets/img/about/customer-support.svg"),
          text: `On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure
                  of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue`
        },
        {
          id: 3,
          title: "Speed Metar Repair",
          svg: require("@/assets/img/about/upgrade.svg"),
          text: `On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure
                  of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue`
        }
      ]
    };
  }
};
</script>

<style lang="sass">
.about-row-advantage
  +row()
  +justify-content-between()
  +mt-rem(35px)
</style>
