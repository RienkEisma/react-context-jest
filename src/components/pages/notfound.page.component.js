import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';;

export default class NotFoundComponent extends Component {

  render() {
    return (
      <div>
        <Typography variant="subtitle1" align="center" gutterBottom>
          OOPS ROUTE NOT FOUND
        </Typography>
      </div>
    )
  }
}