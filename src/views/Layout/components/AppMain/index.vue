<template>
    <section class="appMain-container">
        <transition name="fade-transverse" mode="out-in">
            <router-view/>
        </transition>
    </section>
</template>

<script>
    export default {
        name: "AppMain"
    }
</script>

<style scoped lang="scss">
    .appMain-container {
        width: calc(100% - 200px);
        height: 100%;
    }
</style>
