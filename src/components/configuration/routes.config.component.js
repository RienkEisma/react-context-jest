import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import DashboardPageComponent from "./../pages/dashboard.page.component";
import DashboardsPageComponent from "./../pages/dashboards.page.component";
import DashboardAndListPageComponent from "./../pages/dashboard-and-list.page.component";
import NotFoundComponent from "./../pages/notfound.page.component";
import TestComponent from "./../pages/test.page.component";


export default class RouteConfigComponent extends Component {
    
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/dashboard/:id?" component={DashboardPageComponent} />
          <Route exact path="/dashboards" component={DashboardsPageComponent} />
          <Route exact path="/dashboard-and-list/:id?" component={DashboardAndListPageComponent} />
           <Route exact path="/test" component={TestComponent} />
          <Route component={NotFoundComponent} />
        </Switch>
      </div>
    )
  }
}