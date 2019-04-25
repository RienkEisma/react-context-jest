import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GraphsGridComponent from './../partials/graphs-grid.partial.component.js';
import {storageContext} from './../services/storage.context.js';
import { withRouter } from 'react-router-dom';

class DashboardLazyPageComponent extends Component {

  storageService

  constructor(props, context) {
    super(props);
    this.state = {tiles: []}
    // This binding is necessary to make `this` work in the callback
    this.addTile = this.addTile.bind(this);
  }

  componentDidMount() {
    // context is available in this hook
    if (this.props.params.id) {
      // try to load a Dashboard
      this.loadDashboard(this.props.params.id)
    }
  }

  addTile() {
    this.setState(state => {
      return {
        tiles: [...state.tiles, ...{id: Date.now().valueOf()}]
      }
    });
  }

  loadDashboard = (id) => {
    this.context.getDashboard(id).then(res => {
      this.setState(state => {
        return res
      });
    }).catch(err => {
      // no state found
      console.error(err)
    })
  }

  saveDashboard = () => {
    let dashId = this.props.params.id
    this.context.getDashboard(dashId).then(item => {
      if (!item) {
        dashId = Date.now().valueOf().toString()
      }
      return dashId
    }).catch(err => {
      // not found
      dashId = Date.now().valueOf().toString()
      return dashId 
    }).then(id => {
      return this.context.setDashboard(id, this.state)
    }).then(res => {
      // redirect to current page only if there is no id
      if (!this.props.params.id) {
        this.props.history.push(`${this.props.location.pathname}/${dashId}`)
      }
    }).catch(err => {
      // TODO handle error
      console.error(err)
    })
  }
    
  removeTile = (id) => {
    this.removeTileById(id)
  }

  removeTileById = (id) => {
    this.setState(state => {
      return {
        tiles: state.tiles.filter(tile => tile.id !== id)
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.params.id) {
      this.setState(state => {
        return {tiles: []}
      });
    } else {
      this.loadDashboard(nextProps.params.id)
    }
  }

  render() {
    const buttonText = this.props.params.id ? 'Update dashboard' : 'Add dashboard'
    return (
            <div>
             <Typography  variant="subtitle1" align="center" gutterBottom>
          Dashboard
            </Typography>
            <Button variant="contained" color="primary" onClick={this.addTile}>
              Add Tile 
            </Button>
            <Button variant="contained" color="primary" onClick={() => this.saveDashboard()}>
              {buttonText}
            </Button>
            <GraphsGridComponent tiles={this.state.tiles} onRemove={this.removeTile}/>
          </div>
    )
  }
}
DashboardLazyPageComponent.contextType = storageContext

export default withRouter(DashboardLazyPageComponent)