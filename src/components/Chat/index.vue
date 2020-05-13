<template>
    <section class="Chat-parent-container">
        <section class="Chat-container">
            <Contacts></Contacts>
            <IMContainer></IMContainer>
        </section>
    </section>
</template>

<script>
    import Contacts from "./components/Contacts"
    import IMContainer from './components/IMContainer'
    import WebIM from '@/utils/WebIM'
    export default {
        name: "Chat",
        components: {Contacts, IMContainer},
        beforeMount() {
            let options = {
                apiUrl: WebIM.config.apiURL,
                user: "18715004759",
                pwd: "88888888",
                appKey: WebIM.config.appkey
            };
            WebIM.conn.open(options);
        },
        mounted() {
            let {init} = this;
            init();
        },
        methods: {
            init() {

            }
        }
    }
</script>

<style scoped lang="scss">
    .Chat-parent-container {
        padding: 90px 150px;
        height: 100%;
        width: 100%;
    }

    .Chat-container {
        border: 1px solid #f8f8f8;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
    }
</style>
