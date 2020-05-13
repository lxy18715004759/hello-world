<template>
    <section class="Contacts-container">
        <el-menu
                :default-active="$route.path"
                router
        >
            <el-submenu index="/contact">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>我的好友</span>
                </template>
                <el-menu-item v-for="(item,key) in list" :key="'friend'+key" :index="'/contact/'+item.account">
                    <i class="el-icon-location"></i>
                    {{item.nickName}}
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </section>
</template>

<script>
    export default {
        name: "Contacts",
        data() {
            return {
                list: [
                    {nickName: "殇", realName: "小张", age: "12", sign: "这是一个殇", account: "18715004759"},
                    {nickName: "殇", realName: "小张", age: "12", sign: "这是一个殇", account: "18715004758"},
                    {nickName: "殇", realName: "小张", age: "12", sign: "这是一个殇", account: "18715004757"},
                    {nickName: "殇", realName: "小张", age: "12", sign: "这是一个殇", account: "18715004756"},
                ]
            }
        },
        mounted() {
            let {init} = this;
            init();
        },
        methods: {
            init() {
                let {initData} = this;
                initData();
            },
            initData() {
                let {initFriendsData} = this;
                initFriendsData();
            },
            initFriendsData() {
                let that = this;
                WebIM.conn.getRoster({
                    success(roster) {
                        //获取好友列表，并进行好友列表渲染，roster格式为：
                        /** [
                         {
                                jid:'asemoemo#chatdemoui_test1@easemob.com',
                                name:'test1',
                                subscription: 'both'
                              }
                         ]
                         */
                        for (let i = 0, l = roster.length; i < l; i++) {
                            let ros = roster[i];
                            if (ros.subscription === 'both' || ros.subscription === 'to') {
                                that.list.push(ros);
                            }
                        }
                        let a = []
                        if (roster.length > 0) {
                            roster.map(item => {
                                if (item.subscription === 'both' || item.subscription === 'to') {
                                    a.push(item);
                                }
                            })
                        }
                        that.list = a
                    }
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .Contacts-container {
        width: 300px;
        height: 100%;
        border-right: 1px solid #f8f8f8;
    }
</style>
