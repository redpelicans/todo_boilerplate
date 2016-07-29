import { requestJSON } from '../helpers/utils';
export const ADD_TASK = 'ADD_TASK';
export const TASK_ADDED = 'TASK_ADDED';
export const ADDING_TASK = 'ADDING_TASK';
export const REMOVED_TASK = 'REMOVED_TASK';
export const CHANGE_TASK = 'CHANGE_TASK';
export const REMOVING_TASK = 'REMOVING_TASK';

export const addingTask = () => ({ type: ADDING_TASK });

export const taskAdded = (task) => ({ type: TASK_ADDED, task });

export const addTask = (idList, task) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    dispatch(addingTask());
    options.body = JSON.stringify({ task: { description: task, listId: idList } });
    const url = 'http://rp4.redpelicans.com:13004/api/todo/tasks';
    requestJSON(url, options)
    .then(todo => dispatch(taskAdded(todo)));
  };
};

export const removedTask = (idTask) => ({ type: REMOVED_TASK, idTask });

export const removingTask = () => ({ type: REMOVING_TASK });

export const removeTask = (idTask) => {
  return (dispatch) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    dispatch(removingTask());
    const url = `http://rp4.redpelicans.com:13004/api/todo/task/${idTask}`;
    requestJSON(url, options)
    .then(dispatch(removedTask(idTask)));
  };
};
