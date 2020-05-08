<template>
    <section class="layout-container">
        <AppMenu></AppMenu>
        <AppMain></AppMain>
    </section>
</template>

<script>
    import AppMenu from './components/AppMenu'
    import AppMain from "./components/AppMain"
    export default {
        name: "Layout",
        components: {AppMenu,AppMain}
    }
</script>

<style scoped lang="scss">
    .layout-container {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: hidden;
        display: flex;
    }
</style>
