import apiCall from './api'

export const ADD_TASK = 'ADD_TASK';
export const DEL_TASK = 'DEL_TASK';
export const INPUT_TASK = 'INPUT_TASK';
export const GOT_TASKS = 'GOT_TASKS';

let currID;

export const addTask = (task) => {
  currID = task.id >= currID ? task.id : currID;
  return ({
    type: ADD_TASK,
    task,
  })
}

export const delTask = (id) => ({
  type: DEL_TASK,
  id,
})

export const deleteTask = (id, callback) => () => (
  apiCall({ method: 'DELETE' })('task/'.concat(id))(callback)
)

export const taskInput = (input, id) => ({
  type: INPUT_TASK,
  input,
  id,
})

// built req for greater readability
export const pushTask = (task, callback) => () => {
  const req = {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({ 'task': { 'description': task.description, 'listId': task.listId } }),
  }
  return apiCall(req)('tasks')(callback)
}

export const getTasks = callback => () => {
  apiCall({ method: 'GET' })('tasks')(callback);
}

export const gotTasks = tasks => ({
  type: GOT_TASKS,
  tasks,
})
