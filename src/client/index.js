import React from 'react';
import { render } from 'react-dom';
import App from './components/App/index';
import store from './store';
import actions from './actions';

console.log('mounting react app ...');  // eslint-disable-line no-console
render(<App store={store} actions={actions} />, document.getElementById('__TODO__'));
