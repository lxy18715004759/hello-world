<template>
    <section id="world-map" ref="worldMapRef"></section>
</template>

<script>
    import * as THREE from "three";
    import worldGeometry from "./world.json"
    import ChinaGeometry from "./China.json"
    let OrbitControls = require('three-orbit-controls')(THREE)

    export default {
        name: "WorldMap",
        data() {
            return {
                camera: null,
                scene: null,
                renderer: null,
                zHeight: 1,
                faceColor: "#85d87f",
                sideColor: "#d3f6d0",
                shapeGeometryObj: {},
                orbitcontrols: null,
            }
        },
        mounted() {
            let {init} = this;
            init()
        },
        methods: {
            init() {
                let {initTHREE, animate} = this;
                initTHREE()
                animate();
            },
            initTHREE() {
                let dom = this.$refs.worldMapRef
                this.scene = new THREE.Scene();
                this.camera = new THREE.PerspectiveCamera(70, dom.clientWidth / dom.clientHeight, 1, 100000);
                // 相机位置
                this.camera.position.set(0, 0, 200);
                this.renderer = new THREE.WebGLRenderer({antialias: true});
                this.renderer.setClearColor(0xf8f8f8, 1.0);
                this.renderer.setSize(dom.clientWidth, dom.clientHeight);
                this.orbitcontrols = new OrbitControls(this.camera, this.renderer.domElement);
                this.orbitcontrols.enablePan = true
                this.orbitcontrols.autoRotate = false
                this.orbitcontrols.enableRotate = false;        //是否旋转相机
                //enablePan :是否开启右键拖拽  ,maxDistance :设置相机距离原点的最远距离,minDistance :设置相机距离原点的最远距离,autoRotate :是否自动旋转,enableZoom :是否可以缩放,enableDamping :使动画循环使用时阻尼或自转 意思是否有惯性
                dom.appendChild(this.renderer.domElement);
                // 设置光线
                this.scene.add(new THREE.HemisphereLight('#ffffff', '#ffffff', 1));
                this.drawWorldMap()
            },
            animate() {
                requestAnimationFrame(this.animate);
                this.renderer.render(this.scene, this.camera);
            },
            transition3d(shapeObj, identify) {
                let {zHeight} = this;
                let options = {
                    depth: zHeight, // 定义图形拉伸的深度，默认100
                    steps: 0, // 拉伸面方向分为多少级，默认为1
                    bevelEnabled: true, // 表示是否有斜角，默认为true
                    bevelThickness: 0, // 斜角的深度，默认为6
                    bevelSize: 0, // 表示斜角的高度，高度会叠加到正常高度
                    bebelSegments: 0, // 斜角的分段数，分段数越高越平滑，默认为1
                    curveSegments: 0 // 拉伸体沿深度方向分为多少段，默认为1
                }
                let {faceColor, sideColor, shapeGeometryObj,} = this;
                let geometry = new THREE.ExtrudeGeometry(shapeObj, options);
                let material1 = new THREE.MeshBasicMaterial({
                    color: faceColor
                });
                let material2 = new THREE.MeshBasicMaterial({
                    color: sideColor
                });
                // 绘制地图
                shapeGeometryObj['shapeGeometry' + identify] = new THREE.Mesh(geometry, [material1, material2]);
                // 将地图加入场景
                this.scene.add(shapeGeometryObj['shapeGeometry' + identify])
            },
            drawShape(pos) {
                let shape = new THREE.Shape();
                // 计算平均每格占比
                shape.moveTo(pos[0][0], pos[0][1]);
                pos.forEach(function (item) {
                    shape.lineTo(item[0], item[1]);
                })
                return shape;
            },
            // 绘制世界地图
            drawWorldMap() {
                let {transition3d, drawShape} = this;
                ChinaGeometry.features.forEach(function (worldItem, worldItemIndex) {
                    let length = worldItem.geometry['coordinates'].length;
                    let multipleBool = length > 1 ? true : false;
                    worldItem.geometry['coordinates'].forEach(function (worldChildItem, worldChildItemIndex) {
                        if (multipleBool) {
                            // 值界可以使用的经纬度信息
                            if (worldChildItem.length && worldChildItem[0].length == 2) {
                                transition3d(drawShape(worldChildItem), '' + worldItemIndex + worldChildItemIndex);
                            }
                            // 需要转换才可以使用的经纬度信息
                            if (worldChildItem.length && worldChildItem[0].length > 2) {
                                worldChildItem.forEach(function (countryItem, countryItemIndex) {
                                    transition3d(drawShape(countryItem), '' + worldItemIndex + worldChildItemIndex + countryItemIndex);
                                })
                            }
                        } else {
                            let countryPos = null;
                            if (worldChildItem.length > 1) {
                                countryPos = worldChildItem;
                            } else {
                                countryPos = worldChildItem[0];
                            }
                            if (countryPos) {
                                transition3d(drawShape(countryPos), '' + worldItemIndex + worldChildItemIndex);
                            }
                        }
                    })
                })
            },
        },
    }
</script>

<style scoped lang="scss">
    #world-map {
        width: 100vw;
        height: 100vh;
    }
</style>
