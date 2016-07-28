import { initStore } from '../store';

const init = (config) => (cb) => {
  const { redis, todos } = initStore(config);
  setImmediate(cb, null, { redis, todos });
}

export default init;

