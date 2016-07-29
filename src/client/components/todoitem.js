import React from 'react';
import Item from './item';
import ListTitle from './listtitle';
import CreateTask from './createtask';
import _ from 'lodash';

const TodoItem = ({ listId, onChangeTask, onCreateTask, onRemoveList, onRemoveTask, tasks, title }) => {
  const data = _.map(_.omitBy(tasks, (task) => task.listId !== listId), (task, id) => (
    <Item
      key={ Number(id) }
      name={ task.name }
      onRemoveTask={ onRemoveTask }
      taskId={ Number(id) }
    />)
  );
  return (
    <div className='todoitem'>
      <ListTitle
        listId={ listId }
        onRemoveList={ onRemoveList }
        title={ title } />
      <CreateTask
        listId={ listId }
        onChangeTask={ onChangeTask }
        onCreateTask={ onCreateTask }
        taskVal={ tasks.taskVal }
      />
      {data}
    </div>
    );
};

TodoItem.propTypes = {
  listId: React.PropTypes.number.isRequired,
  onChangeTask: React.PropTypes.func.isRequired,
  onCreateTask: React.PropTypes.func.isRequired,
  onRemoveList: React.PropTypes.func.isRequired,
  onRemoveTask: React.PropTypes.func.isRequired,
  tasks: React.PropTypes.object.isRequired,
  title: React.PropTypes.string.isRequired,

};

export default TodoItem;
