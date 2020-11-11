<template>
    <div class="footer-brand-blog">
        <img :src="src" :alt="alt" class="footer-brand-img">
    </div>
</template>

<script lang="ts">
    export default {
        name: "footer-brand-blog",
        props:{
            src:{
                type: String,
                request:true,
            },
            alt:{
                type: String,
                request: true,
            }
        }
    }
</script>

<style lang="sass">
.footer-brand-blog
    +size(12)
    +size-lg(3)
    +my-rem(11px)
    +my-lg-rem(0px)
</style>
