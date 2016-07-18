import React from 'react'
import TodoItem from './todoitem'
import _ from 'lodash'

const TodoList = ({ lists, onCreateTask, onRemoveList, onRemoveTask }) => {
  const data = _.map(lists, (list) => <TodoItem {...list} key={ list.id } listId={ list.id }
    onCreateTask={ onCreateTask } onRemoveList={ onRemoveList } onRemoveTask={ onRemoveTask } />);
  return (
    <div className='todolist'>
    {data}
    </div>
    );
};

TodoList.propTypes = {
  lists: React.PropTypes.array.isRequired,
  onCreateTask: React.PropTypes.func.isRequired,
  onRemoveList: React.PropTypes.func.isRequired,
  onRemoveTask: React.PropTypes.func.isRequired,
};

export default TodoList
