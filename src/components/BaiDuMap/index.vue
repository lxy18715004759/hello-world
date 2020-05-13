<template>
    <section id="WorldMap-container" ref="worldMapRef"></section>
</template>

<script>
    export default {
        name: "WorldMap",
        data() {
            return {
                map: null,
                selectData:{}
            };
        },
        mounted() {
            let { init } = this;
            init();
        },
        methods: {
            init() {
                let { initMap, initMarkers } = this;
                initMap();
                initMarkers();
            },
            initMap() {
                this.map = new BMapGL.Map("WorldMap-container");
                let point = new BMapGL.Point(116.404, 39.915);
                this.map.centerAndZoom(point, 15);
            },
            initMarkers() {
                let arr = [
                    { lng: "116.404", lat: "39.915", name: "地点一",list:[{marker:"呵呵"},{marker:"哈哈"}] },
                    { lng: "116.35340743367796", lat: "39.918541795999595", name: "地点二",list:[{marker:"呵呵"},{marker:"哈哈"}]}
                ];
                arr.map(item => {
                    let point = new BMapGL.Point(Number(item.lng), Number(item.lat));
                    let marker = new BMapGL.Marker(point); // 创建标注

                    let opts = {
                        width: 250, // 信息窗口宽度
                        height: 100, // 信息窗口高度
                        title: item.name // 信息窗口标题
                    };

                    let content = ""
                    item.list.map(innerItem=>{
                        content+=`<p class="test-class" onclick="selectChild(${innerItem})">${innerItem.marker}</p>`
                    })
                    let dom = `<section>${content}</section>`
                    let infoWindow = new BMapGL.InfoWindow(dom, opts); // 创建信息窗口对象
                    marker.addEventListener('mouseover',function(){
                        marker.openInfoWindow(infoWindow, this.map.getCenter()); // 打开信息窗口
                    })

                    this.map.addOverlay(marker); // 将标注添加到地图中
                });
            },
            selectChild(item){
                console.log('selectChild',item);
            }
        }
    };
</script>

<style lang="scss" scope>
    #WorldMap-container {
        height: 100%;
        width: 100%;
    }
    .test-class{
        color:blue!important;
    }
    .test-class:hover{
        color:red!important;
    }
</style>
