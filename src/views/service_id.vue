<template>
  <base-section>
    <base-container>
      <div class="service-block">
        <div class="service-col-img"></div>
        <div class="service-col-content">
          <h2 class="service-title">Название сервиса</h2>
          <div class="service-content-html">
            <p class="service-text-index">
              Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium dolor emque
              laudantium, totam rem aperiam, eaque ipsa quae
              ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </p>
            <p class="service-text">
              Your battery is your vehicle’s voltage
              stabilizer for the entire electrical
              system.Most vehicle batteries need to be
              replaced every few years, depending on the
              conditions in which you drive. Extreme
              weather, continued use of vehicle accessories
              and other conditions can lead to shorter
              battery life. Over time, your battery loses
              juice, and you may need to occasionally
            </p>
            <ul class="service-ul">
              <base-li class="service-li"
                >Professional car cleaning
              </base-li>
              <base-li class="service-li"
                >Monthly car inspections
              </base-li>
            </ul>
            <p class="service-text">
              Your battery is your vehicle’s voltage
              stabilizer for the entire electrical
              system.Most vehicle batteries need to be
              replaced every few years, depending on the
              conditions in which you drive. Extreme
              weather, continued use of vehicle accessories
              and other conditions can lead to shorter
              battery life. Over time, your battery loses
              juice, and you may need to occasionally
            </p>
          </div>
        </div>
      </div>
    </base-container>
  </base-section>
</template>

<script lang="ts">
import BaseSection from "@/components/base/base-section.vue";
import BaseContainer from "@/components/base/base-container.vue";
import BaseLi from "@/components/base/base-li.vue";
export default {
  name: "page-service_id",
  components: {
    BaseLi,
    BaseContainer,
    BaseSection
  }
};
</script>

<style lang="sass">
.service-block
  +row()
.service-col-img
  +col()
  +size(12)
  +size-lg(5)
.service-col-content
  +col()
  +size(12)
  +size-lg(7)
.service-title
  +mb-rem(20px)
.service-text-index
  +fz-rem(16px)
  font-weight: 600
  color: var(--color-red)
  +mb-rem(20px)
.service-text
  +mb-rem(20px)
  color: var(--color-filter-blog)
  +fz-rem(14px)
.service-ul
  +mb-rem(20px)
.service-li
  +fz-rem(15px)
  font-weight: 600
  color: var(--header-bg)
</style>
