<template>
    <nav class="header-nav-top">
        <div class="header-contact-blog">
            <div class="nav-top-blog">
                <h2 class="nav-top-item">EMAIL</h2>
                <span class="nav-top-description">companymail@sample.com</span>
            </div>
            <div class="nav-top-blog">
                <h2 class="nav-top-item">OPEN HOURS</h2>
                <span class="nav-top-description">Tues - Sun 9.00 am - 7.00 pm</span>
            </div>
            <div class="nav-top-blog">
                <h2 class="nav-top-description">Call Now</h2>
                <a class="nav-top-link-tlf" href="">(732) 803-01 03</a>
            </div>
        </div>
        <!--        Иконки -->
        <div class="nav-row-icons">
            <div class="nav-top-icons">
                <base-svg :data="require('@/assets/img/icons/facebook.svg')" />
            </div>
            <div class="nav-top-icons">
                <base-svg :data="require('@/assets/img/icons/google-plus.svg')" />
            </div>
            <div class="nav-top-icons">
                <base-svg :data="require('@/assets/img/icons/pinterest-circular-logo-symbol.svg')" />
            </div>
            <div class="nav-top-icons">
                <base-svg :data="require('@/assets/img/icons/twitter.svg')" />
            </div>
        </div>
    </nav>
</template>

<script>
    import BaseSvg from "@/components/base/base-svg";
    export default {
        name: "the-header-top",
        components: {BaseSvg}
    }
</script>

<style lang="sass">
.header-nav-top // .header-nav-top
    font-family: var(--ff-link)
    +row-no-gutters()
    +size-lg(9)
    +size(12)
    +flex-column()
    +flex-md-row()
    +justify-md-content-between()
    +mt-rem(30px)
    .header-contact-blog // .header-contact-blog
        +row-no-gutters()
        +mx-rem(-15px)
    .nav-top-blog //nav-top-blog
        +my-rem(5px)
        +mx-rem(15px)
    .nav-top-item //nav-top-item
        color: #fff
        +fz-rem(14px)
    .nav-top-description //nav-top-description
        color: var(--text-nav-top)
        +fz-rem(13px)
    .nav-top-link-tlf //.nav-top-link-tlf
        +fz-rem(18px)
        +pt-rem(5px)
        +d-block()
        font-weight: 700
        color: #ffffff
        text-decoration: none
    .nav-row-icons //nav-row-icons
        +d-flex()
        +align-items-center()
        +ml-rem(-20px)
        +ml-md-rem(0px)
        +mt-rem(15px)
    .nav-top-icons //nav-top-icons
        width: 30px
        height: 30px
        +ml-rem(20px)
        +px-rem(7px)
        +py-rem(7px)
        border: 1px solid #fff
        border-radius: 360px
        transition: all 0.5s
        cursor: pointer
        &:hover, .activ
            background-color: var(--color-red)
            border: 0
</style>

