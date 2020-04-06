import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { Auth } from './auth';
import { routerConfig } from './config';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Auth config={routerConfig}/>
            </Switch>
        );
    }
};

