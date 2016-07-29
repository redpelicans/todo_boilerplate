import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const isFunction = arg => typeof arg === 'function';

const myMiddleware = (types = {}) => {
  const fired = {};
  return store => next => action => {
    const result = next(action);
    const cb = types[action.type];
    if (cb && !fired[action.type]) {
      if (!isFunction(cb)) throw new Error("action.type must be a function");
      fired[action.type] = true;
      cb({ getState: store.getState, dispatch: store.dispatch, action});
    }
    return result;
  };
};

const configureStore = (reducer, initialState, types) => createStore(
  reducer,
  initialState,
  applyMiddleware(
    myMiddleware(types),
    thunk,
  ),
)

export default configureStore;
