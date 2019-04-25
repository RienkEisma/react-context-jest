import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import DashboardsComponent from './../partials/dashboards.partial.component.js';
import {storageContext} from './../services/storage.context.js';

class DashboardsLazyPageComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {listItems: []}
  }

  loadListItems = () => {
    this.context.getDashboards().then(dashes => {
      this.setState(state => {
          return {listItems: dashes}
        });
    })
  }

  componentDidMount() {
    this.loadListItems()
  }

  componentWillReceiveProps(nextProps) {
    this.loadListItems()
  }

  reloadList = () => {
    this.loadListItems()
  }
  
  render() {
    return (
      <div>
        <Typography  variant="subtitle1" align="center" gutterBottom>
            Dashboard List
        </Typography>
        <DashboardsComponent listItems={this.state.listItems} onChange={this.reloadList} linkUrl={this.props.linkUrl}/>
      </div>
    )
  }
}

DashboardsLazyPageComponent.contextType = storageContext

export default DashboardsLazyPageComponent