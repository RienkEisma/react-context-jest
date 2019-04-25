import React, { Component } from 'react';
import './dashboards.partial.component.css'; // Import regular stylesheet
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemText from '@material-ui/core/ListItemText';
import { withRouter } from 'react-router-dom';
import {storageContext} from './../services/storage.context.js';

class DashboardsComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {}
  }

  navigateToDashboard = (id) => {
    this.props.history.push(`/${this.props.linkUrl}/${id}`)
  }

  removeDashboard = (id, e) => {
    e.stopPropagation()
    this.context.removeDashboard(id).then(() => {
      // rerender
      this.props.onChange()
    }).catch(err => {
      // TODO handle error
      console.error(err)
    })
  }

  removeTile = (id) => {
    this.props.onRemove(id)
  }

  render() {
    const list = this.props.listItems.map((listItem, index) => {
      return (
        <ListItem key={listItem.key} className="dashboardListItem" onClick={() => this.navigateToDashboard(listItem.key)}>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemIcon>
            <DeleteIcon onClick={(e) => this.removeDashboard(listItem.key, e)}/>
          </ListItemIcon>
          <ListItemText
            primary={listItem.key}
            secondary="Click to load"
          />
        </ListItem>
      )
    });
    return (
      <List>
        {list} 
      </List>
    )
  }
}

DashboardsComponent.contextType = storageContext

export default withRouter(DashboardsComponent)