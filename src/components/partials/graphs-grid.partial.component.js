import React, { Component } from 'react';
import './graphs-grid.partial.component.css'; // Import regular stylesheet
import GraphTileComponent from './graph-tile.partial.component';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

export default class GraphsGridComponent extends Component {

  constructor(props) {
    super(props);
  }

  removeTile = (id) => {
    this.props.onRemove(id)
  }

  render() {
    const tiles = this.props.tiles.map((tile, index) => {
      return <GraphTileComponent key={tile.id} id={tile.id} onRemove={this.removeTile}/>
    })
    return (
      <div className="graphGrid">
        {tiles}
      </div>
    )
  }
}