import apiCall from './api'

export const ADD_TASK = 'ADD_TASK';
export const DEL_TASK = 'DEL_TASK';
export const INPUT_TASK = 'INPUT_TASK';
export const GOT_TASKS = 'GOT_TASKS';

export const addTask = (task) => {
  console.log(task.id);
  return ({
    type: ADD_TASK,
    task,
  })
}

export const delTask = (id) => ({
  type: DEL_TASK,
  id,
})

export const taskInput = (input, id) => ({
  type: INPUT_TASK,
  input,
  id,
})

export const gotTasks = tasks => ({
  type: GOT_TASKS,
  tasks,
})

export const deleteTask = (id) => (dispatch) => (
  apiCall({ method: 'DELETE' })('task/'.concat(id))(t => dispatch(delTask(t.id)))
)

// built req for greater readability
export const pushTask = (task, listId) => (dispatch) => {
  const req = {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({ 'task': { 'description': task.description, 'listId': task.listId } }),
  }
  return apiCall(req)('tasks')(t => {console.log(t); return(dispatch(addTask(t)))})
}

export const getTasks = () => (dispatch) => {
  apiCall({ method: 'GET' })('tasks')(t => dispatch(gotTasks(t)));
}

