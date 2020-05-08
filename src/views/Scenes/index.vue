<template>
    <section class="scenes-container">
        <One v-if="showObj.oneShow"></One>
        <Two v-if="showObj.twoShow"></Two>
        <Three v-if="showObj.threeShow"></Three>
    </section>
</template>

<script>
    import {firstWordToLow} from '@/utils/'
    import componentsObj from './components'

    export default {
        name: "Scenes",
        components: {...componentsObj},
        watch: {
            '$route.params.str': {
                handler(str) {
                    let {watchRouteParams} = this;
                    watchRouteParams(str);
                }
            }
        },
        data() {
            return {
                showObj: {
                    oneShow: true,
                    twoShow: false,
                    threeShow: false,
                }
            }
        },
        mounted() {
            let {init} = this;
            init();
        },
        methods: {
            init() {
                let {watchRouteParams} = this;
                let str = this.$route.params.str;
                watchRouteParams(str);
            },
            watchRouteParams(str) {
                for (let i in this.showObj) {
                    this.showObj[i] = false;
                }
                this.showObj[firstWordToLow(str) + 'Show'] = true;
            }
        }
    }
</script>

<style scoped>

</style>
