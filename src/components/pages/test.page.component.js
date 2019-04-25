import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import test1 from './../tests/small-text.functional.component.test.js';
import Button from '@material-ui/core/Button';

export default class TestComponent extends Component {

  runTests = () => {
    test1()
  }

  render() {
    return (
      <div>
      <Typography variant="subtitle1" align="center" gutterBottom>
         Tests
      </Typography>
        <Button variant="contained" color="primary" onClick={() => this.runTests()}>
          Run tests
        </Button> 
      </div>
    )
  }
}