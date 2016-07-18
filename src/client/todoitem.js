import React from 'react'
import Item from './item'
import ListTitle from './listtitle'
import CreateItem from './createitem'
import _ from 'lodash'

const TodoItem = ({ listId, onCreateTask, onRemoveList, onRemoveTask, tasks, title }) => {
  const data = _.map(tasks, (task) => <Item key={ task.id } listId={ listId }
    name={ task.name } onRemoveTask={ onRemoveTask } taskId={ task.id } />)
  return (
    <div className='todoitem'>
    <ListTitle listId={ listId } onRemoveList={onRemoveList} title={title} />
    <CreateItem listId={listId} onCreateTask={onCreateTask} />
    {data}
    </div>
    );
};

TodoItem.propTypes = {
  listId: React.PropTypes.number.isRequired,
  onCreateTask: React.PropTypes.func.isRequired,
  onRemoveList: React.PropTypes.func.isRequired,
  onRemoveTask: React.PropTypes.func.isRequired,
  tasks: React.PropTypes.array.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default TodoItem
