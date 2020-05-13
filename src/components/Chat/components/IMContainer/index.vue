<template>
    <section class="IMContainer-container">
        <template v-if="IsExistUser">
            <section class="IMContainer-top">

            </section>
            <section class="IMContainer-bot">

            </section>
        </template>
        <template v-else>
            <Nodata></Nodata>
        </template>
    </section>
</template>

<script>
    import Nodata from "@/components/Nodata"
    export default {
        name: "IMContainer",
        components:{Nodata},
        watch: {
            "$route.params.userId": {
                handler(val) {
                    if (!val) {
                        this.IsExistUser = false
                    } else {
                        this.IsExistUser = true
                    }
                }
            }
        },
        data() {
            return {
                IsExistUser: false,         //false : 不存在用户   true：存在用户
            }
        },
        mounted() {
            let {init} = this;
            init();
        },
        methods: {
            init() {
                console.log("IMContainer", this.$route.params.userId);
            }
        }
    }
</script>


<style scoped lang="scss">
    .IMContainer-container {
        width: calc(100% - 300px);
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .IMContainer-top {
        flex: 1;
        border-bottom: 1px solid #f8f8f8;
        padding:24px 32px;
    }

    .IMContainer-bot {
        height: 200px;
    }
</style>
