import React from 'react';
import _ from 'lodash';
import TaskList from './TaskList';

const TaskLists = (props) => {

  const listElems = _.map(props.lists.data, list => (
    <TaskList list={list} {...props} key={list.id} />
  ));

  return (
    <div className='task-lists'>
      {listElems}
    </div>
  );
};

TaskLists.propTypes = {
  lists: React.PropTypes.object.isRequired,
};

export default TaskLists;
