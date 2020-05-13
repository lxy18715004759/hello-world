<template>
    <section id="BaiDuMap-container" ref="BaiDuMapRef">
    </section>
</template>

<script>
    import screenfull from 'screenfull'
    export default {
        name: "BaiDuMap",
        data() {
            return {
                map: null,
            }
        },
        mounted() {
            let {init} = this;
            init();
        },
        methods: {
            init() {
                let {initMap, initContextMenu,initData} = this;
                initMap()
                initContextMenu()
                initData();
            },
            initMap() {
                this.map = new BMapGL.Map("BaiDuMap-container");
                let point = new BMapGL.Point(116.404, 39.915);
                this.map.centerAndZoom(point, 5);
                this.map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
            },
            initContextMenu() {
                let that = this;
                let txtMenuItem = [
                    // {
                    //     text: '放大',                             // 定义菜单项的显示文本
                    //     callback: function () {                 // 定义菜单项点击触发的回调函数
                    //         that.map.zoomIn();
                    //     }
                    // },
                    // {
                    //     text: '缩小',
                    //     callback: function () {
                    //         that.map.zoomOut();
                    //     }
                    // },
                    {
                        text: "全屏/退出全屏",
                        callback() {
                            that.toggleScreenFull();
                        }
                    }
                ];
                let menu = new BMapGL.ContextMenu();
                for (let i = 0; i < txtMenuItem.length; i++) {
                    menu.addItem(new BMapGL.MenuItem(               // 定义菜单项实例
                        txtMenuItem[i].text,                        // 传入菜单项的显示文本
                        txtMenuItem[i].callback,                    // 传入菜单项的回调函数
                        {
                            width: 300,                             // 指定菜单项的宽度
                            id: 'menu' + i                          // 指定菜单项dom的id
                        }
                    ));
                }
                this.map.addContextMenu(menu);                           // 给地图添加右键菜单
            },
            toggleScreenFull() {
                screenfull.toggle(this.$refs['BaiDuMapRef']);
            },
            initData(){
              let {addPoints} = this;
                addPoints([{lng:"116.404",lat:"39.915"},{lng:"116",lat:"39"}]);
            },
            addPoints(arr){
                if(!Array.isArray(arr)){
                    return false;
                }
                arr.map(item=>{
                    let point = new BMapGL.Point(Number(item.lng),Number(item.lat));
                    let marker = new BMapGL.Marker(point);          // 创建标注
                    this.map.addOverlay(marker);                     // 将标注添加到地图中
                    marker.addEventListener("mouseover", function(item){
                        console.log('mouseover marker',item);
                    });
                    marker.addEventListener("mouseout", function(item){
                        console.log('mouseout marker',item);
                    });
                })
            },
        }
    }
</script>

<style scoped lang="scss">
    #BaiDuMap-container {
        height: 100%;
    }
</style>
