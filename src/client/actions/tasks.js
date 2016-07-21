export const ADD_TASK = 'ADD_TASK';
export const DEL_TASK = 'DEL_TASK';

export const addTask = (task) => ({
	type: ADD_TASK,
	task
})

export const delTask = ({ id, listID }) => ({
	type: DEL_TASK,
	id,
	listID
})