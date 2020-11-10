<template>
  <the-header/>
  <router-view/>
  <the-footer></the-footer>
</template>

<script lang="ts">
  import TheHeader from "@/components/header/the-header.vue"
  import TheFooter from "@/components/footer/the-footer.vue";
  export default{
    name: 'app',
    components:{
      TheFooter,
      TheHeader
    }
  };
</script>
<style>
</style>
