import React, { Component } from 'react';
import './graph-tile.partial.component.css'; // Import regular stylesheet
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SmallText from './small-text.functional.component';
import ClearIcon from '@material-ui/icons/Clear'
import Icon from '@material-ui/core/Icon';

export default class GraphTileComponent extends Component {

  bgColor = 'gray'

  constructor(props) {
    super(props)
    this.bgColor = {
      backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16)
    }
  }

  removeTile = (e) => {
    this.props.onRemove(this.props.id)
  }

  render() {
    const text = `Tile: ${this.props.id}` 
    return (
      <div className="graphTile" style={this.bgColor}>
        <Grid container spacing={24}>
          <Grid item xs={8}>
            <SmallText text={text} align="right"/>
          </Grid>
          <Grid item xs={4}>
            <ClearIcon className="closer" onClick={this.removeTile}/>
          </Grid>
        </Grid>
      </div>
    )
  }
}