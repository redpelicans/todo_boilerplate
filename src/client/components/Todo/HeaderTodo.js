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
import Radio from 'antd/lib/radio';

const TodoHead = styled.div`
  border-bottom: 1px solid darkgrey;
  padding: 3px;
  margin-bottom: 4px;
`;

class SetMenu extends React.Component {
  render (){
  	const { setMode, todo } = this.props;
    return (
      <Menu onClick={(menuItem) => setMode(menuItem.key, todo.id)}>
		<Menu.Item key="1">All</Menu.Item>
		<Menu.Item key="2">Uncomplete</Menu.Item>
        <Menu.Item key="3">Completed</Menu.Item>
      </Menu>
    )	
  }
}

const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3d menu item</Menu.Item>
  </Menu>
);

const TaskSettings = ( { tasks, todo, setMode } ) => {
  return (
    <div style={{ display: 'inline', float: "left" }} >
    { tasks.filter(task => task.todoId === todo.id).length ?
        <Dropdown.Button overlay={<SetMenu setMode={setMode} todo={todo} />} type="ghost">
          <Icon type="setting" />
        </Dropdown.Button>
      :
        <Dropdown.Button overlay={menu} type="ghost" disabled style={{ marginLeft: 8 }} >
          <Icon type="setting" /> 
      </Dropdown.Button>
    }
    </div>
  )
};

TaskSettings.propTypes = {
  todo: React.PropTypes.object.isRequired,
  tasks: React.PropTypes.array.isRequired,
  setMode: React.PropTypes.func.isRequired,
}


const TodoHeader = ( { todo, onDel, addTask, tasks, setMode, delTask } ) => {
  const state = {
    size: 'small',
  }
  const handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  const handleDeleteC = () => {
    tasks.filter(task => task.checked === true && task.todoId === todo.id).map(task => {delTask(task.id)});
  }
  const percentCompleted = parseInt(((tasks.filter(task => task.checked === true && task.todoId === todo.id).length) * 100) / (tasks.filter(task => task.todoId === todo.id).length)) || 0;
  
  return (
  <TodoHead>
    <MyModal todo={todo} onDel={onDel} addTask={addTask} />
    <TaskSettings tasks={tasks} todo={todo} setMode={setMode} />
    <span style={{ marginLeft: '20px', marginRight: '20px'}} > <h2 style={{ display: 'inline' }} >{ todo.title } </h2> </span>
    <Progress type="circle" percent={percentCompleted} width={30} />
    <Button type="primary" size='small' style={{marginLeft: '5px', backgroundColor: 'red', border: 'none', float: 'right'}} onClick={() => onDel(todo.id)}>x</Button>
    <Button type="primary" icon="delete" size={state.size} style={{marginLeft: '10px', marginRight: '10px', marginTop: '0px', float: 'right'}} onClick={handleDeleteC} >Delete completed</Button>
  </TodoHead>
  )
};

TodoHeader.propTypes = {
  todo: React.PropTypes.object.isRequired,
  tasks: React.PropTypes.array.isRequired,
  onDel: React.PropTypes.func.isRequired,
  addTask: React.PropTypes.func.isRequired,
  delTask: React.PropTypes.func.isRequired,
  setMode: React.PropTypes.func.isRequired,
};

export default TodoHeader;