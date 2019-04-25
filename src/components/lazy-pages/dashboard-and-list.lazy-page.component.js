import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import './dashboard-and-list.lazy-page.component.css'; // Import regular stylesheet
import GraphsGridComponent from './../partials/graphs-grid.partial.component.js';
const DashboardLazyPageComponent = React.lazy(() => import('./dashboard.lazy-page.component'));
const DashboardsLazyPageComponent = React.lazy(() => import('./dashboards.lazy-page.component'));

export default class DashboardAndListLazyPageComponent extends Component {

  render() {
    return (
      <div>
        <div>
         <Typography variant="subtitle1" align="center" gutterBottom>
            Dashboard and Dasbhoard List
        </Typography>
        </div>
        <div className="dashboardColumn">
          <DashboardLazyPageComponent params={this.props.params}/> 
        </div>
        <div className="listColumn">
          <DashboardsLazyPageComponent linkUrl="dashboard-and-list"/>
        </div>
      </div>
    )
  }
}