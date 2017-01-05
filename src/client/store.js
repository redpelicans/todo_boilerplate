import mockUp from './mockup';

const store = {
  state: { ...mockUp },
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

export default store;
