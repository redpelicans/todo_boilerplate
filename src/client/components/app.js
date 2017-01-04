import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Header from './header';
import AddTodo from './add_todo';
import Todo from './todo_list';

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const TodoList = ({ store, actions }) => {
  const { state: todos } = store;
  return (
    <div>
      {
        Object.values(todos).map(todo =>
        <Todo todo={todo} actions={actions} store={store} key={todo.id} />)
      }
    </div>
  );
};

TodoList.propTypes = {
  store: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

class App extends React.Component {
  componentWillMount() {
    const { store } = this.props;
    store.listen(() => this.forceUpdate());
  }
  render() {
    const { store, actions } = this.props;
    const bDispatch = store.dispatch.bind(store);
    return (
      <Wrapper>
        <Header />
        <AddTodo onAddTodo={actions.addTodo} dispatch={bDispatch} />
        <TodoList { ...this.props } />
      </Wrapper>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default App;
