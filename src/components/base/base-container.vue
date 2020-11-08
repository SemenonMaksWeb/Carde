<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "base-container"
    }
</script>

<style lang="sass">
.container
    +container()
</style>
