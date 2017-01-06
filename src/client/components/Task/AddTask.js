import React from 'react';
import styled from 'styled-components';
import HeaderTask from './HeaderList';
import TaskElem from './TaskElem';
import MyModal from '../AddTodo/modal';
import Switch from 'antd/lib/switch';
import Button from 'antd/lib/button';
import Progress from 'antd/lib/progress';
import Icon from 'antd/lib/icon';

const TodoHead = styled.div`
  border-bottom: 1px solid darkgrey;
  padding: 3px;
  margin-bottom: 4px;
`;

const TodoHeader = ( { todo, onDel, addTask, tasks } ) => {
  const percentCompleted = parseInt(((tasks.filter(task => task.checked === true && task.todoId === todo.id).length) * 100) / (tasks.filter(task => task.todoId === todo.id).length)) || 0;
  console.log(parseInt(percentCompleted));
  return (
  <TodoHead>
    <MyModal todo={todo} onDel={onDel} addTask={addTask} />
    <span> { todo.title } </span>
    <Progress type="circle" percent={percentCompleted} width={30} />
    <Button type="primary" size='small' style={{marginLeft: '5px', backgroundColor: 'red', border: 'none', float: 'right'}} onClick={() => onDel(todo.id)}>x</Button>
  </TodoHead>
  )
};

TodoHeader.propTypes = {
  todo: React.PropTypes.object.isRequired,
  onDel: React.PropTypes.func.isRequired,
  addTask: React.PropTypes.func.isRequired,
  tasks: React.PropTypes.array.isRequired,
}
