<template>
    <header class="base-header">
         <base-container>
             <the-logo/>
         </base-container>
    </header>
</template>

<script>
    import TheLogo from "./the-logo";
    import BaseContainer from "@/components/base/base-container";
    export default {
        name: "the-header",
        components: {BaseContainer, TheLogo}
    }
</script>

<style lang="sass">
.base-header
    +py-rem(35px)
    background-color: var(--header-bg)
</style>
