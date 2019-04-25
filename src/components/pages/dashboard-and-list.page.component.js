import React, { Component, Suspense } from 'react';
import Typography from '@material-ui/core/Typography';
const DashboardAndListLazyPageComponent = React.lazy(() => import('./../lazy-pages/dashboard-and-list.lazy-page.component'));

export default class DashboardAndListPageComponent extends Component {

  render() {
    return (
      <Suspense fallback="{<div>Loading...</div>}">
        <DashboardAndListLazyPageComponent params={this.props.match.params}/>
      </ Suspense>       
    )
  }
}