/**
 * 基本路由配置
 */
import Login from "../views/login";
import Home from "../views/home";
import About from "../views/about";
import NotFound from "../views/404";

export const routerConfig = [
    {
        path: '/',
        component: Home,
        auth: false,
    },
    {
        path: '/login',
        component: Login,
        auth: false
    },
    {
        path: '/about',
        component: About,
        auth: true
    },
    {
        path: '/404',
        component: NotFound,
        auth: false
    }
];
