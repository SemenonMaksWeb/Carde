<template>
  <the-header/>
  <router-view/>
</template>

<script lang="ts">
  import TheHeader from "@/components/header/the-header.vue"
  export default{
    name: 'app',
    components:{
      TheHeader
    }
  };
</script>
<style>
</style>
