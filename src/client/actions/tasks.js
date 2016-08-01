import { apiCall, working, TASKS } from './api'

export const ADD_TASK = 'ADD_TASK';
export const DEL_TASK = 'DEL_TASK';
export const INPUT_TASK = 'INPUT_TASK';
export const GOT_TASKS = 'GOT_TASKS';

export const addTask = (task) => ({
  type: ADD_TASK,
  task,
})

export const delTask = (id) => ({
  type: DEL_TASK,
  id,
})

export const gotTasks = tasks => ({
  type: GOT_TASKS,
  tasks,
})

export const deleteTask = (id) => (dispatch) => {
  dispatch(working(TASKS))
  return (apiCall({ method: 'DELETE' })('task/'.concat(id))(t => dispatch(delTask(t.id))))
}

export const pushTask = (task) => (dispatch) => {
  dispatch(working(TASKS))
  const req = {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({ 'task': { 'description': task.description, 'listId': task.listId } }),
  }
  return apiCall(req)('tasks')(t => (dispatch(addTask(t))))
}

export const getTasks = () => (dispatch) => {
  dispatch(working(TASKS))
  apiCall({ method: 'GET' })('tasks')(t => dispatch(gotTasks(t)));
}
