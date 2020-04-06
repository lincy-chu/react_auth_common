import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2>首页测试</h2>
                <Link to='/about'>非登录下跳转测试</Link>
            </React.Fragment>
        );
    }
};
