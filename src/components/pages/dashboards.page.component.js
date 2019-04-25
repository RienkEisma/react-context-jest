import React, { Component, Suspense } from 'react';
import loadable from '@loadable/component'
const DashboardsLazyPageComponent = loadable(() => import('./../lazy-pages/dashboards.lazy-page.component.js'));

export default class DashboardsPageComponent extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <Suspense fallback="{<div>Loading...</div>}">
        <DashboardsLazyPageComponent linkUrl="dashboard" />
      </Suspense>  
    )
  }
}