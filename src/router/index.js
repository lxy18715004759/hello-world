import Vue from "vue";
import VueRouter from "vue-router";

import scenes from "./modules/scenes";

const Home = () => import(/* webpackChunkName: "Home" */ "@/views/Home")
const Chat = () => import(/* webpackChunkName: "Chat" */ "@/components/Chat")

const ChatContact = ()=>import(/* webpackChunkName: "ChatContact" */ "@/components/Chat/components/Contacts")
const ChatPane = ()=>import(/* webpackChunkName: "ChatPane" */ "@/components/Chat/components/IMContainer")
const Layout = () => import(/* webpackChunkName: "Layout" */ "@/views/Layout")
Vue.use(VueRouter);
const routes = [
    // {
    //     path: "/",
    //     name: "Home",
    //     component: Home,
    // },
    {
        path: "/",
        name: "Chat",
        component: Chat
    },
    {
        path: "/contact/:userId",
        name: "Chat",
        component: Chat
    },
    ...scenes,
    {
        path: "/cameras",
        name: "Cameras",
        component: Layout,
        children: []
    },
    {
        path: "/lights",
        name: "Lights",
        component: Layout,
        children: []
    },
    {
        path: "/textures",
        name: "Textures",
        component: Layout,
        children: []
    },
    {
        path: "/controls",
        name: "Controls",
        component: Layout,
        children: []
    },

];

const router = new VueRouter({
    mode: "history",
    base: "/",
    routes
});

export default router;
