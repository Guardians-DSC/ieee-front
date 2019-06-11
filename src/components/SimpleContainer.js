import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SingleLineGridList from './TaskGrid'
import Switch from '@material-ui/core/Switch';
import './Container.css';

function SimpleContainer() {
  return (
    
    <React.Fragment>
      
      <div>

        <Switch/>
        <p>Junho</p>
        <SingleLineGridList/>
        
        <Switch/>
        <p>Março</p>
        <SingleLineGridList/>
        

      </div>
    </React.Fragment>
  );
}

export default SimpleContainer;