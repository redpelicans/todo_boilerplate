import React, { PropTypes } from 'react';

const storeGen = {
  listeners: [],
  listen(cb) { this.listeners.push(cb); },
  callListeners() { this.listeners.forEach(cb => cb()); },
  dispatch(action) {
    this.state = action(this.state);
    this.callListeners();
  },
};

export const createStore = state => ({ ...storeGen, state });

export class Provider extends React.Component {

  componentWillMount() {
    const { store } = this.props;
    store.listen(() => this.forceUpdate());
  }

  render() {
    const { children, store, actions } = this.props;
    return React.cloneElement(
      React.Children.only(children),
      { store, actions },
    );
  }
}

Provider.propTypes = {
  store: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};
