<template>
    <section class="appMenu-container">
        <el-menu
            :mode="'vertical'"
            :collapse="false"
            :background-color="'#ffffff'"
            :text-color="'#303133'"
            :active-text-color="'#409EFF'"
            :default-active="$route.path"
            :unique-opened="true"
            router
            :collapse-transition="true"
        >
            <el-submenu index="/scenes">
                <template slot="title">
                    场景
                </template>
                <el-menu-item index="/scenes/one">场景1</el-menu-item>
                <el-menu-item index="/scenes/two">场景2</el-menu-item>
                <el-menu-item index="/scenes/three">场景3</el-menu-item>
            </el-submenu>
            <el-submenu index="/cameras">
                <template slot="title">
                    相机
                </template>
                <el-menu-item index="/cameras/one">相机1</el-menu-item>
                <el-menu-item index="/cameras/two">相机2</el-menu-item>
                <el-menu-item index="/cameras/three">相机3</el-menu-item>
            </el-submenu>
            <el-submenu index="/lights">
                <template slot="title">
                    光源
                </template>
                <el-menu-item index="/lights/one">光源1</el-menu-item>
                <el-menu-item index="/lights/two">光源2</el-menu-item>
                <el-menu-item index="/lights/three">光源3</el-menu-item>
            </el-submenu>
            <el-submenu index="/textures">
                <template slot="title">
                    纹理
                </template>
                <el-menu-item index="/textures/one">纹理1</el-menu-item>
                <el-menu-item index="/textures/two">纹理2</el-menu-item>
                <el-menu-item index="/textures/three">纹理3</el-menu-item>
            </el-submenu>
            <el-submenu index="/controls">
                <template slot="title">
                    控制器
                </template>
                <el-menu-item index="/controls/one">控制器1</el-menu-item>
                <el-menu-item index="/controls/two">控制器2</el-menu-item>
                <el-menu-item index="/controls/three">控制器3</el-menu-item>
            </el-submenu>
        </el-menu>
    </section>
</template>

<script>
    export default {
        name: "AppMenu"
    }
</script>

<style scoped>
    .appMenu-container{
        width:200px;
        height:100%;
    }
</style>
