import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import { initialState, getInitialTodos, getInitialTasks } from './initialState';
import { INITIAL_TODOS_LOADED } from './actions/todos';
import { INITIAL_TASKS_LOADED } from './actions/tasks';

const logger = createLogger();

const generateStore = (mode) => {
  if (mode === 'development') {
    return createStore(
      reducers,
      initialState,
      applyMiddleware(
        logger,
        thunkMiddleware,
      ),
    );
  }
  return createStore(
    reducers,
    initialState,
    applyMiddleware(
      thunkMiddleware,
    ),
  );
};

const store = generateStore(process.env.NODE_ENV);

getInitialTodos((data) => {
  store.dispatch({ type: INITIAL_TODOS_LOADED, payload: data });
});

getInitialTasks((data) => {
  store.dispatch({ type: INITIAL_TASKS_LOADED, payload: data });
});

export default store;
