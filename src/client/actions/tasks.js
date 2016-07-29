export const CREATE_TASK = 'CREATE_TASK';
export const CHANGE_TASK = 'CHANGE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

let taskId = 5;

export const createTask = (listId, name) => {
  taskId = taskId + 1;
  return {
    type: CREATE_TASK,
    listId,
    name,
    taskId,
  };
};

export const changeTask = (taskVal) => ({ type: CHANGE_TASK, taskVal });

export const removeTask = (taskId) => ({ type: REMOVE_TASK, taskId });
