import React from 'react';
import styled from 'styled-components';
import HeaderTask from './HeaderList';
import TaskElem from './TaskElem';

const Wrapper = styled.div`
  padding: 0px;
  background-color: whitesmoke;
  margin-top: 10px;
  text-align: center;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

const TodoHeader = ( { todo, onDel, addTask } ) => (
  <div>
    <span>{ todo.title } </span>
    <button onClick={() => addTask('task x, todoId = ' + todo.id, todo.id)}>+</button>
    <button onClick={() => onDel(todo.id)}>-</button>
  </div>
);

TodoHeader.propTypes = {
  todo: React.PropTypes.object.isRequired,
  onDel: React.PropTypes.func.isRequired,
  addTask: React.PropTypes.func.isRequired,
}

const TodoContent = ( { todo, tasks, delTask } ) => (
  <div>
    {(tasks.filter(task => task.todoId === todo.id)).map(task =>
      <div key={task.id}>
        <input type="checkbox" />
        <span>{task.title}</span>
        <button>edit</button>
         <button onClick={() => delTask(task.id)}>x</button>
      </div>)}
  </div>
);

TodoContent.propTypes = {
  todo: React.PropTypes.object.isRequired,
  tasks: React.PropTypes.array.isRequired,
  delTask: React.PropTypes.func.isRequired,
}

class TodoList extends React.Component {
  render () {
  const { store, onDel, addTask, delTask } = this.props;
  const { state: { todos, tasks} } = store;

  return (
    <Wrapper>
      {todos.map(todo =>
        <div key={todo.id}>
          <TodoHeader todo={todo} onDel={onDel} addTask={addTask} />
          <TodoContent todo={todo} tasks={tasks} delTask={delTask} />
          <br />
        </div>)}
    </Wrapper>
    )
  }
}

TodoList.propTypes = {
  store: React.PropTypes.object.isRequired,
  onDel: React.PropTypes.func.isRequired,
};

// class AddTodo extends React.Component {
//   state = {
//     value: '',
//   }
//   handleChange = event => this.setState({value: event.target.value})
//   handleClick = (value) => {
//     const { onAdd } = this.props;
//     onAdd(value);
//     this.setState({value: ''});
//   }

//   render() {
//     const { value } = this.state;
//     const { onAdd } = this.props;
//     return (
//     <Wrapper>
//       <TextInput placeholder="Add a new Todo ..." onChange={this.handleChange} value={value} />
//       <button onClick={() => this.handleClick(value)}>+</button>
//     </Wrapper>
//     )
//   }
// };

export default TodoList;


// MyComponent.propTypes = {
   // You can declare that a prop is a specific JS primitive. By default, these
   // are all optional.
//   optionalArray: React.PropTypes.array,
//   optionalBool: React.PropTypes.bool,
//   optionalFunc: React.PropTypes.func,
//   optionalNumber: React.PropTypes.number,
//   optionalObject: React.PropTypes.object,
//   optionalString: React.PropTypes.string,
//   optionalSymbol: React.PropTypes.symbol,
