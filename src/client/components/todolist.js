import React from 'react';
import TodoItem from './todoitem';
import _ from 'lodash';

const TodoList = ({ lists, onChangeTask, onCreateTask, onRemoveList, onRemoveTask, tasks }) => {
  const initialList = _.omitBy(lists, _.isString);
  const data = _.map(initialList, (list, id) => (
    <TodoItem
      key={ Number(id) }
      listId={ Number(id) }
      onChangeTask={ onChangeTask }
      onCreateTask={ onCreateTask }
      onRemoveList={ onRemoveList }
      onRemoveTask={ onRemoveTask }
      tasks={ tasks }
      title={ list.title }
    />)
  );
  return (
    <div className='todolist'>
    {data}
    </div>
    );
};

TodoList.propTypes = {
  lists: React.PropTypes.object.isRequired,
  onChangeTask: React.PropTypes.func.isRequired,
  onCreateTask: React.PropTypes.func.isRequired,
  onRemoveList: React.PropTypes.func.isRequired,
  onRemoveTask: React.PropTypes.func.isRequired,
  tasks: React.PropTypes.object.isRequired,
};

export default TodoList;
