import React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';
import App from './components/App/app';
import actions from './actions';
import store from './mystore';

console.log('mounting react app ..');
render(<App store={store} actions={actions} />, document.getElementById('__TODO__'));

window.store = store;
window.actions = actions;

export default store;
