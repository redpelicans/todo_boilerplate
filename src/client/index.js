import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

console.log('mounting react app ...');  // eslint-disable-line no-console
render(<App />, document.getElementById('__TODO__'));
