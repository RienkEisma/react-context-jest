import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RoutesConfigComponent from './components/configuration/routes.config.component';
import HeaderComponent from './components/partials/header.partial.component';
import StorageService from './components/services/storage.service.js';
// const StorageContext = React.createContext(StorageService);
// import {storageServiceContext} from './components/services/storage.serviceContext.js';
import {storageContext} from './components/services/storage.context.js';
// const storageServiceContext = React.createContext()

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Router>
          <storageContext.Provider value={new StorageService()}>
            <HeaderComponent/>
            <RoutesConfigComponent/>
          </storageContext.Provider>
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));