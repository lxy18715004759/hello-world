<template>
    <div class="page">
        <!--    <WorldMap></WorldMap>-->
        <BaiDuMap></BaiDuMap>
    </div>
</template>
<script>
    import WorldMap from "@/components/WorldMap";
    import BaiDuMap from "@/components/BaiDuMap"

    export default {
        name: "Home",
        components: {WorldMap, BaiDuMap},
        data() {
            return {};
        },
        mounted() {
            let {init} = this;
            init();
        },
        methods: {
            init() {
            }
        }
    };
</script>

<style lang="scss" scoped>
.home {
  font-size: 10px;
}
.page{
  width:100%;
  height: 100%;
}
</style>
