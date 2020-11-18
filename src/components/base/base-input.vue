<template>
  <div class="base-input-block">
    <base-input-title>
      {{ label }}
    </base-input-title>
    <slot name="title"></slot>
    <component
      v-bind="$attrs"
      :is="component"
      class="base-input"
      :placeholder="placeholder"
    />
    <div class="errors-input">
      <div class="error-input"></div>
    </div>
  </div>
</template>

<script lang="ts">
import BaseInputTitle from "@/components/base/base-input-title.vue";
export default {
  name: "base-input",
  components: { BaseInputTitle },
  props: {
    placeholder: {
      default: "",
      type: String
    },
    label: {
      type: String
    },
    component: {
      default: "input"
    }
  }
};
</script>

<style lang="sass">
.base-input
    +py-rem(8px)
    +px-rem(6px)
</style>
