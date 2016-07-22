import React from 'react';
import CreateList from '../components/createlist';
import TodoList from '../components/todolist';
import Title from '../components/title';
import { changeList, createList, removeList } from '../actions/lists';
import { changeTask, createTask, removeTask } from '../actions/tasks';
import { connect } from 'react-redux';

const TodoApp = ({ dispatch, lists, tasks }) => {

  const onChangeList = (listVal) => {
    dispatch(changeList(listVal));
  };

  const onCreateList = () => {
    dispatch(createList(lists.listVal));
  };

  const onRemoveList = (listId) => {
    dispatch(removeList(listId));
  };

  const onChangeTask = (taskVal) => {
    dispatch(changeTask(taskVal));
  };

  const onCreateTask = (listId) => {
    dispatch(createTask(listId, tasks.taskVal, tasks.listId));
  };

  const onRemoveTask = (taskId) => {
    dispatch(removeTask(taskId));
  };

  return (
    <div className='todoapp'>
      <Title title='Marianne&#39;s todo list'/>
      <CreateList
        listVal={ lists.listVal }
        onChangeList={ onChangeList }
        onCreateList={ onCreateList }
      />
      <TodoList
        lists={ lists }
        onChangeTask={ onChangeTask }
        onCreateTask={ onCreateTask }
        onRemoveList={ onRemoveList }
        onRemoveTask={ onRemoveTask }
        tasks={ tasks }
      />
    </div>
  );
};

TodoApp.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  lists: React.PropTypes.object.isRequired,
  tasks: React.PropTypes.object.isRequired,
};

export default connect(state => ({ lists: state.lists, tasks: state.tasks }))(TodoApp);
