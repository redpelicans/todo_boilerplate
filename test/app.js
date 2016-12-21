import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import App from '../src/client/components/app';

const { describe, it } = global;
const { expect } = chai;

describe('Fake react test', () => {
  it('<App/>', () => {
    expect(shallow(<App />).find('h1')).to.have.length(1);
  });
});
