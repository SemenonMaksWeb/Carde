<template>
    <section class="section-nav-main">
        <base-container class="padding-null">
            <nav class="nav-main">
                <div class="nav">
                    <router-link active-class="active" to="/" class="nav-main-link">HOME</router-link>
                    <router-link active-class="active" to="/pages" class="nav-main-link">PAGES</router-link>
                    <router-link active-class="active" to="/about" class="nav-main-link">ABOUT US</router-link>
                    <router-link active-class="active" to="/service" class="nav-main-link">SERVICE</router-link>
                    <router-link active-class="active" to="/gallery" class="nav-main-link">Gallery</router-link>
                    <router-link active-class="active" to="/testimonali" class="nav-main-link">TESTIMONAIL</router-link>
                    <router-link active-class="active" to="/blog" class="nav-main-link">BLOG</router-link>
                    <router-link active-class="active" to="/contact" class="nav-main-link">CONTACT US</router-link>
                </div>
                <router-link to="" class="nav-main-link">GET FREE QUOTE</router-link>
            </nav>
        </base-container>
    </section>
</template>

<script>
    import BaseContainer from "@/components/base/base-container";
    export default {
        name: "the-nav-main",
        components: {BaseContainer}
    }
</script>

<style lang="sass">
.section-nav-main
    background-color: var(--color-red)
.padding-null
    +px-px(0)
    +px-lg-px($offset)
.nav-main
    +row-no-gutters()
    +justify-content-between()
    +flex-column()
    +flex-lg-row()
    width: 100%
    +mt-rem(30px)
    .nav
        +flex-lg-row()
        +flex-column()
        +row-no-gutters()
    .nav-main-link
        font-family: var(--ff-link)
        font-weight: 700
        +fz-rem(14px)
        +d-block()
        +py-rem(25px)
        +px-rem(15px)
        color: #fff
        background-color: var(--color-red)
        text-decoration: none
        transition: all 0.5s
        &:hover, &.active
            background-color: var(--link-hover)


</style>
