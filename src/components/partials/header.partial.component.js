import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import './header.partial.component.css'; // Import regular stylesheet
import { withStyles } from '@material-ui/core/styles';
import {Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default class HeaderComponent extends Component {

  render() {
    return (
      <header>
        <div>
          <Typography variant="h4" gutterBottom>
              HEADER
          </Typography>
          <hr/>
          <Grid container>
            <Grid item xs={6}>
              <Typography>
                <Button component={Link} to="/dashboards">
                  List dashboards
                </Button>
              </Typography>
              </Grid> 
              <Grid item xs={6}>
              <Typography>
                <Button component={Link} to="/dashboard">
                  dashboard
                </Button>
              </Typography>
              </Grid> 
          </Grid>
          <hr/>
          <Grid container>
            <Grid item xs={6}>
              <Typography>
                <Button component={Link} to="/dashboard-and-list">
                  dashboard & List
                </Button>
              </Typography>
              </Grid> 
              <Grid item xs={6}>
              <Typography>
                <Button component={Link} to="/sdfdsfds">
                  Not existing
                </Button>
              </Typography>
              </Grid> 
          </Grid>
          <hr/>
        </div>  
      </header>
    )
  }
}