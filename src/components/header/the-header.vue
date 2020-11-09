<template>
    <header class="base-header">
         <base-container>
             <section class="section-header">
                 <the-logo/>
                 <the-header-top/>
             </section>
         </base-container>
    </header>
</template>

<script>
    import TheLogo from "./the-logo";
    import BaseContainer from "@/components/base/base-container";
    import TheHeaderTop from "@/components/header/the-header-top";
    export default {
        name: "the-header",
        components: {TheHeaderTop, BaseContainer, TheLogo}
    }
</script>

<style lang="sass">
.base-header
    +py-rem(35px)
    background-color: var(--header-bg)
    .section-header
        +row-no-gutters()
        +justify-content-between()
        +align-items-center()
</style>
