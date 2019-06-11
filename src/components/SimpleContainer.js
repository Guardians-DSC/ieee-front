import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SingleLineGridList from './TaskGrid'
import Switch from '@material-ui/core/Switch';

function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Switch/>
        <h2>Junho:</h2>
        <SingleLineGridList>caraaai</SingleLineGridList>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        
      </Container>
    </React.Fragment>
  );
}

export default SimpleContainer;