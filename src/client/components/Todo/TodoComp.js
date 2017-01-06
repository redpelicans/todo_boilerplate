import React from 'react';
import styled from 'styled-components';
import HeaderTask from './HeaderList';
import TaskElem from './TaskElem';
import MyModal from '../AddTodo/modal';
import Switch from 'antd/lib/switch';
import Button from 'antd/lib/button';
import Progress from 'antd/lib/progress';
import Icon from 'antd/lib/icon';
import Task from '../Task/ManageTask'

const Wrapper = styled.div`
  padding: 0px;
  background-color: none;
  margin-top: 10px;
  text-align: center;
  width: auto;
  min-width: 40%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  display: table;
`;

const TodoWrap = styled.div`
  padding: 0px;
  width: auto;
  background-color: whitesmoke;
  margin-bottom: 4%;
  margin-top: 10px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

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

const TodoContent = ( { todo, tasks, delTask, manageTask, updateTask } ) => (
  <div>
    {(tasks.filter(task => task.todoId === todo.id)).map(task =>
      <div style={{margin: '10px'}} key={task.id}>
      <Task todo={todo}
            task={task}
            delTask={delTask}
            manageTask={manageTask} 
            updateTask={updateTask} />
      </div>)}
  </div>
);

TodoContent.propTypes = {
  todo: React.PropTypes.object.isRequired,
  tasks: React.PropTypes.array.isRequired,
  delTask: React.PropTypes.func.isRequired,
  manageTask: React.PropTypes.func.isRequired,
  updateTask: React.PropTypes.func.isRequired,
}

class TodoList extends React.Component {
  render () {
  const { store, onDel, addTask, delTask, manageTask, updateTask } = this.props;
  const { state: { todos, tasks} } = store;

  return (
    <Wrapper>
      {todos.map(todo =>
        <TodoWrap key={todo.id}>
          <TodoHeader todo={todo} 
                      onDel={onDel} 
                      addTask={addTask} 
                      tasks={tasks} />

          <TodoContent todo={todo}
                       tasks={tasks}
                       delTask={delTask}
                       manageTask={manageTask} 
                       updateTask={updateTask} />
          <br />
        </TodoWrap>)}
    </Wrapper>
    )
  }
}

TodoList.propTypes = {
  store: React.PropTypes.object.isRequired,
  onDel: React.PropTypes.func.isRequired,
  addTask: React.PropTypes.func.isRequired,
  delTask: React.PropTypes.func.isRequired,
  manageTask: React.PropTypes.func.isRequired,
  updateTask: React.PropTypes.func.isRequired,
};

export default TodoList;

