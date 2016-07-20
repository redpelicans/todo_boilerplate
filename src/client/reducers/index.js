import lists from './lists';
import tasks from './tasks';

const initialState = {
  lists: {},
  tasks: {},
};

function reducer(state = initialState, action) {
  return {
    lists: lists(state.lists, action),
    tasks: tasks(state.tasks, action),
  };
}

export default reducer;
