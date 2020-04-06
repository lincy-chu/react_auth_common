import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Routes from "./router";
import './App.scss';

export default class App extends React.Component {
  render() {
      return (
          <Router>
              <Routes/>
          </Router>
      );
  }
};
