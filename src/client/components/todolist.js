import React from 'react';
import TodoItem from './todoitem';
import _ from 'lodash';

const TodoList = ({ lists, onCreateTask, onRemoveList, onRemoveTask, tasks }) => {
  const data = _.map(lists, (list, id) => (
    <TodoItem
      key={ Number(id) }
      listId={ list.id }
      onCreateTask={ onCreateTask }
      onRemoveList={ onRemoveList }
      onRemoveTask={ onRemoveTask }
      tasks={ tasks }
      title={ list.label }
    />)
  );
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
  tasks: React.PropTypes.array.isRequired,
};

export default TodoList;
