
const Layout = () => import(/* webpackChunkName: "Layout" */ "@/views/Layout")
const Scenes = () => import(/* webpackChunkName: "Scenes" */ "@/views/Scenes")
export default [
    {
        path: "/scenes",
        name: "Scenes",
        redirect:"/scenes/one",
        component: Layout,
        children:[
            {
                path:'/scenes/:str',
                name:'Scenes',
                component:Scenes,
            },
        ]

    }
]
