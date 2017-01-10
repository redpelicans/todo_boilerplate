import React, { PropTypes } from 'react';

const baseStore = {
  listeners: [],
  listen(cb) {
    this.listeners.push(cb);
  },
  update() {
    this.listeners.forEach(cb => cb());
  },
  dispatch(action) {
    this.state = action(this.state);
    console.log('state : ', this.state);
    this.update();
  },
};

export class Provider extends React.Component {
  componentWillMount() {
    const { store } = this.props;
    store.listen(() => this.forceUpdate());
  }
  render() {
    const { store, actions, children } = this.props;
    return React.cloneElement(
      React.Children.only(children),
      { store, actions }
    );
  }
}

Provider.propTypes = {
  actions: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export const createStore = state => ({
  ...baseStore,
  state,
});
