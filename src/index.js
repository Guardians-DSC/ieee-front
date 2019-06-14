import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
    <div style={{display:'flex'}}>
        <BrowserRouter>
            <Switch>
                <Route path='/' extract={true} component={(props)=><App showType={'task'}/>}/>
            </Switch>
        </BrowserRouter>
    </div>
    , document.getElementById('root')
);

serviceWorker.unregister();
