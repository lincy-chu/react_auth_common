/**
 * 权限配置
 */
import React from "react";
import { Route, Redirect } from 'react-router-dom';

export class Auth extends React.Component{
    render() {
        const { location, config } = this.props;
        const { pathname } = location;
        const isLogin = localStorage.getItem('__config_center_token'); // 是否登录
        // 如果该路由不用进行权限效验，登录状态下登录页除外
        // 因为登录后，无法跳转到登录页
        // 这部分代码，是为了在非登录状态下，访问不需要权限效验的路由
        const targetRouterConfig = config.find((route) => route.path === pathname);
        console.log('targetRouterConfig', targetRouterConfig);
        if (targetRouterConfig && !targetRouterConfig.auth && !isLogin) {
            const { component } = targetRouterConfig;
            return <Route exact path={pathname} component={component}/>;
        }

        // 已登录
        if (isLogin) {
            // 如果是登录状态，想要跳转到登录，重定向到主页
            if (pathname === '/login') {
                return <Redirect to='/'/>;
            } else {
                // 如果路由合法，就跳转到相应的路由
                if (targetRouterConfig) {
                    return <Route path={pathname} component={targetRouterConfig.component} />;
                } else {
                    // 如果路由不合法，重定向到404页面
                    return <Redirect to='/404'/>;
                }
            }
        } else {
            // 非登录状态下，当路由合法时且需要权限效验时，跳转到登录页面，要求登录
            if (targetRouterConfig && targetRouterConfig.auth) {
                return <Redirect to='/login' />;
            } else {
                // 非登录状态下，路由不合法时，重定向到404
                return <Redirect to='/404'/>;
            }
        }
    };
}
