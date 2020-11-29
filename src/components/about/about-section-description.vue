<template>
  <base-container>
    <div class="about-row">
      <div class="about-col-video">
        <video src=""></video>
      </div>
      <div class="about-col">
        <h2 class="about-title">
          WE ARE THE MOST PROFFESIONALS CAR REPAIR COMPANY
          IN AMERICA!!
        </h2>
        <p class="about-text">
          Sed ut perspiciatis unde omnis iste natus error
          sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae
          vitae dicta sunt explicabo.
        </p>
        <base-text class="about-base-text">
          There are many variations of passages of Lorem
          Ipsum available, but the majority have suffered
          alteration in some form, by injected humour, or
          randomised words which don't look even slightly
          believable. If you are going to use a passage of
          Lorem Ipsum you need to be sure there isn't
          anything embarrassing hidden in the middle of
          text. All the Lorem Ipsum generators on the
          Internet tend to repeat predefined chunks as
          necessary , making this the first true generator
          on the Internet.
        </base-text>
        <ul class="about-ul">
          <base-li
            v-for="dataset in link1"
            :key="dataset.id"
            class="about-li"
          >
            {{ dataset.text }}
          </base-li>
        </ul>
      </div>
    </div>
  </base-container>
</template>

<script lang="ts">
import BaseText from "@/components/base/base-text.vue";
import BaseContainer from "@/components/base/base-container.vue";
import BaseLi from "@/components/base/base-li.vue";
export default {
  name: "about-section-description",
  components: { BaseLi, BaseContainer, BaseText },
  data() {
    return {
      link1: [
        {
          id: 1,
          text: "Professional car cleaning"
        },
        {
          id: 2,
          text: "Monthly car inspections"
        },
        {
          id: 3,
          text: "Creating new car assets and wheels"
        },
        {
          id: 4,
          text: "Car painting assets and service"
        },
        {
          id: 5,
          text: "Professional car cleaning"
        },
        {
          id: 6,
          text: "Selling car materials and stuff"
        }
      ]
    };
  }
};
</script>

<style lang="sass">
.about-row
  +row()
  +justify-content-between()
.about-col-video
  +col()
  +size-lg(5)
  +size(12)
.about-col
  +col()
  +size-lg(7)
  +size(12)
.about-title
  +fz-rem(30px)
  +mb-rem(25px)
  font-weight: 700
  color: var(--header-bg)
  +lh-rem(40px)
.about-text
  color: var(--color-red)
  font-weight: 600
  +mb-rem(20px)
  +lh-rem(25px)
.about-base-text
  +lh-rem(25px)
.about-ul
  +mt-rem(20px)
  +row-no-gutters()
  +justify-content-between()
.about-li
  +fz-rem(15px)
  font-weight: 600
  color: var(--header-bg)
  +mb-rem(15px)
</style>
