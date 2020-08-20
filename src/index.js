import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { UserProvider } from '../src/storage/context/UserContext';
import { TaskProvider } from '../src/storage/context/TaskContext';
import { NucleProvider } from '../src/storage/context/NucleContext';
import { SignInProvider } from '../src/storage/context/SingInContext';

ReactDOM.render(
  <SignInProvider> 
    <NucleProvider> 
      <TaskProvider> 
        <UserProvider>
          <App/>
        </UserProvider>
      </TaskProvider>
    </NucleProvider>
  </SignInProvider>
  , document.getElementById('root')
);

serviceWorker.unregister();
