<template>
  <base-container>
    <div class="service-row">
      <div class="service-col-img"></div>
      <div class="service-col-content">
        <h2 class="service-title">
          <span class="service-span">Main Featured</span>
          Why Choose us ?
        </h2>
        <base-text
          >There are many variations of passages of Lorem
          Ipsumavailable, but majority have suffered
          alteration in some form by injected humour, or
          randomised words which don't look even slightly
          believable. If you are going to use a passage of
          Lorem Ipsum you need to be there isn't anything
          embarrasing hidden in the middle of text.All the
          Lorem Ipsum generators on the Internet tend to
          repeat predefined chunks as necessary, making this
          the first true generator on the Internet.
        </base-text>
        <ul class="service-ul">
          <base-li
            v-for="dataset in service"
            :key="dataset.id"
            class="service-li"
          >
            {{ dataset.title }}
            <base-text class="service-ul-text">{{
              dataset.text
            }}</base-text>
          </base-li>
        </ul>
      </div>
    </div>
  </base-container>
</template>

<script lang="ts">
import BaseText from "@/components/base/base-text.vue";
import BaseLi from "@/components/base/base-li.vue";
import BaseContainer from "@/components/base/base-container.vue";
export default {
  name: "service-section-description",
  components: { BaseContainer, BaseLi, BaseText },
  data() {
    return {
      service: [
        {
          id: 1,
          title: "Break Checkup",
          text: `On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
            demoralized by the charms of ple`
        },
        {
          id: 2,
          title: "Assetes & Wheels",
          text: `On the other hand, we denounce with righteous indignation and dislike men who are`
        },
        {
          id: 3,
          title: "Break Checkup",
          text: `On the other hand, we denounce with righteous indignation and dislike men`
        },
        {
          id: 4,
          title: "Assetes & Wheels",
          text: `On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and`
        },
        {
          id: 5,
          title: "Break Checkup",
          text: `On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and`
        },
        {
          title: "Assetes & Wheels",
          text: `On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and`
        }
      ]
    };
  }
};
</script>

<style lang="sass">
.service-row
    +d-flex()
.service-col-img
    +size(4)
    +col()
.service-col-content
    +size(8)
    +col()
.service-title
    +mb-rem(15px)
    +fz-rem(30px)
    font-weight: 800
    color: var(--color-blog-link)
    +lh-rem(40px)
.service-span
    +d-block()
    font-weight: 400
    +fz-rem(24px)
.service-ul
    +mt-rem(20px)
    +row-no-gutters()
    +justify-content-between()
.service-li
    +mb-rem(15px)
.service-ul-text
    +mt-rem(10px)
</style>
