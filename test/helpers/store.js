import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const isFunction = arg => typeof arg === 'function';

const myMiddleware = (types = {}) => {
  const fired = {};
  return store => next => action => {
    const result = next(action);
    const cb = types[action.type];
    if (cb && !fired[action.type]) {
      if (!isFunction(cb)) throw new Error("action's type value must be a function");
      fired[action.type] = true;
      cb({ getState: store.getState, dispatch: store.dispatch, action });
    }
    return result;
  };
};

export const configureStore = (reducer, initialState, types) => createStore(
  reducer,
  initialState,
  applyMiddleware(
    myMiddleware(types),
    thunk,
  ),
);
