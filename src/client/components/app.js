import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Todos = ({todos, dispatch, onDelete}) =>  (
  <div>
    {todos.map(todo => (
      <div key={todo.id}>
        <button onClick={() => dispatch(onDelete(todo.id))}>
          {todo.title}
        </button>
      </div>
    ))}
  </div>
);

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.listen(() => this.forceUpdate());
  }

  onAdd = () => {
    const { actions, store } = this.props;
    store.dispatch(actions.addTodo());
  }

  render() {
    const { store, actions } = this.props;
    return (
      <Wrapper>
        <Title>Hello World, this is my first react app!</Title>
        <button onClick={this.onAdd}> Add </button>
        <Todos todos={store.state.todos} dispatch={store.dispatch.bind(store)} onDelete={actions.deleteTodo} />
      </Wrapper>
    )
  }
}

export default App;
