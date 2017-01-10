import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Header from '../header';
import AddTodo from '../add_todo';
import TodoList from '../todo_list';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

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
        <TodoList {...this.props} />
      </Wrapper>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default App;
