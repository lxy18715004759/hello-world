import Vue from "vue";
import VueRouter from "vue-router";

import scenes from "./modules/scenes";
const Home = () => import(/* webpackChunkName: "Home" */ "@/views/Home")
const Layout = () => import(/* webpackChunkName: "Layout" */ "@/views/Layout")
Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    ...scenes,
  {
    path: "/cameras",
    name: "Cameras",
    component: Layout,
    children:[

    ]
  },
  {
    path: "/lights",
    name: "Lights",
    component: Layout,
    children:[

    ]
  },
  {
    path: "/textures",
    name: "Textures",
    component: Layout,
    children:[

    ]
  },
  {
    path: "/controls",
    name: "Controls",
    component: Layout,
    children:[

    ]
  },

];

const router = new VueRouter({
    mode: "history",
    base: "/",
    routes
});

export default router;
