import React from 'react';
import styled from 'styled-components';
import MyModal from '../AddTodo/modal';
import Switch from 'antd/lib/switch';
import Button from 'antd/lib/button';
import Progress from 'antd/lib/progress';
import Icon from 'antd/lib/icon';
import Task from '../Task/ManageTask'
import Dropdown from 'antd/lib/dropdown';
import Menu from 'antd/lib/menu';
import TodoHeader from './HeaderTodo'

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

class TodoContent extends React.Component {
  filterTasks = (task) =>  {
    const { todo } = this.props;
    switch (todo.mode) {
      case '1':
        return true;
        break;
      case '2':
        return task.checked === false;
        break;
      case '3':
        return task.checked;
        break;
      default :
        return true;
    }
  }
  render () {
    const { todo, tasks, delTask, manageTask, updateTask } = this.props;
    return (
    <div>
      {((tasks.filter(task => task.todoId === todo.id))
              .filter(this.filterTasks))
             .map(task =>
        <div style={{margin: '10px'}} key={task.id}>
        <Task todo={todo}
              task={task}
              delTask={delTask}
              manageTask={manageTask} 
              updateTask={updateTask} />
        </div>)}
    </div>
    )
  }
}

TodoContent.propTypes = {
  todo: React.PropTypes.object.isRequired,
  tasks: React.PropTypes.array.isRequired,
  delTask: React.PropTypes.func.isRequired,
  manageTask: React.PropTypes.func.isRequired,
  updateTask: React.PropTypes.func.isRequired,
}

class TodoList extends React.Component {
  render () {
  const { store, onDel, addTask, delTask, manageTask, updateTask, setMode } = this.props;
  const { state: { todos, tasks, mode } } = store;

  return (
    <Wrapper>
      {todos.map(todo =>
        <TodoWrap key={todo.id}>
          <TodoHeader todo={todo} 
                      onDel={onDel} 
                      addTask={addTask} 
                      tasks={tasks} 
                      mode={mode} 
                      setMode={setMode} 
                      delTask={delTask} />

          <TodoContent todo={todo}
                       tasks={tasks}
                       delTask={delTask}
                       manageTask={manageTask} 
                       updateTask={updateTask} 
                       mode={mode} />
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
  setMode: React.PropTypes.func.isRequired,
};

export default TodoList;

