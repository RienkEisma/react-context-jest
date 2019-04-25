import React, { Component, Suspense } from 'react';
import Typography from '@material-ui/core/Typography';
const DashboardLazyPageComponent = React.lazy(() => import('./../lazy-pages/dashboard.lazy-page.component'));

export default class DashboardPageComponent extends Component {
    
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Suspense fallback="{<div>Loading...</div>}">
          <DashboardLazyPageComponent params={this.props.match.params} />
      </ Suspense>
    )
  }
}