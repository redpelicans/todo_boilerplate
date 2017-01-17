import React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import App from './containers/App';
import store from './store';

const Root = (
  <Provider store={store}>
    <App />
  </Provider>
);

console.log('mounting react app ...'); // eslint-disable-line no-console

render(Root, document.getElementById('__TODO__'));
