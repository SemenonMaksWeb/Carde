<template>
  <the-header />
  <main>
    <router-view />
  </main>
  <the-footer></the-footer>
</template>

<script lang="ts">
import TheHeader from "@/components/header/the-header.vue";
import TheFooter from "@/components/footer/the-footer.vue";
export default {
  name: "app",
  components: {
    TheFooter,
    TheHeader
  }
};
</script>
<style></style>
