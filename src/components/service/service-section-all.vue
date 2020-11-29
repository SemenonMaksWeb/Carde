<template>
  <base-section>
    <base-container>
      <base-title class="service-section-all-title">
        Our Service
      </base-title>
      <p class="service-section-all-text">
        Keeping a well-maintained vehicle is paramount to
        your safety. That is why our team of nearly 500
        professional technicians are ready to make your
        vehicle safe and
      </p>
      <div class="service-row-all">
        <service-block
          v-for="dataset in service"
          :key="dataset.id"
        />
      </div>
    </base-container>
  </base-section>
</template>

<script lang="ts">
import BaseContainer from "@/components/base/base-container.vue";
import BaseTitle from "@/components/base/base-title.vue";
import BaseSection from "@/components/base/base-section.vue";
import ServiceBlock from "@/components/service/base/service-block.vue";
export default {
  name: "service-section-all",
  components: {
    ServiceBlock,
    BaseSection,
    BaseTitle,
    BaseContainer
  },
  data() {
    return {
      service: [
        {
          id: 1
        },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        {
          id: 5
        },
        { id: 6 },
        { id: 7 },
        { id: 8 }
      ]
    };
  }
};
</script>

<style lang="sass">
.service-section-all-title
    text-align: center
    text-transform: uppercase
    color: var(--color-blog-link)
.service-section-all-text
    font-weight: 600
    color: var(--color-blog-link)
    +size-off(6)
    +fz-rem(15px)
    +row-no-gutters()
    +justify-content-center()
    +lh-rem(20px)
    text-align: center
    margin: 0 auto
.service-row-all
  +row()
  +mt-rem(40px)
</style>
