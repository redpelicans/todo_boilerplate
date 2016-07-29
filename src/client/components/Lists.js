import React from 'react';
import _ from 'lodash';
import List from './List';
import AddList from './AddList';

const Lists = (props) => {
  const data = _.map(props.lists, (list) => (
    <List
      id={Number(list.id)}
      key={list.id}
      name={list.label}
      onAddTask={props.onAddTask}
      onDeleteList={props.onDeleteList}
      onDeleteTask={props.onDeleteTask}
      onRenameList={props.onRenameList}
      onRenameTask={props.onRenameTask}
      tasks={_.pickBy(props.tasks, (task) => task.listId === list.id)} />));
  return (
    <div className='Lists'>
      {data}
      <AddList onAddList={props.onAddList} />
    </div>
  );
};

Lists.propTypes = {
  lists: React.PropTypes.array.isRequired,
  onAddList: React.PropTypes.func.isRequired,
  onAddTask: React.PropTypes.func.isRequired,
  onDeleteList: React.PropTypes.func.isRequired,
  onDeleteTask: React.PropTypes.func.isRequired,
  onRenameList: React.PropTypes.func.isRequired,
  onRenameTask: React.PropTypes.func.isRequired,
  tasks: React.PropTypes.array.isRequired };

export default Lists;
