<template>
    <object type="image/svg+xml" :data="data" />
</template>

<script>
    export default {
        name: "base-svg",
        props:{
            data:{
                type: String,
                request: true,
            }
        }
    }
</script>

<style lang="sass">
object
    width: 100%
    height: auto
</style>
