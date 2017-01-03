import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Header from '../header/header';
import AddTodo from '../add_todo/add_todo';
import Todos from '../todos/todos';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    const { store } = props;
    /* https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md */
    this.dispatcher = store.dispatch.bind(store);
  }

  componentDidMount() {
    const { store } = this.props;
    store.listen(() => this.forceUpdate());
  }

  render() {
    const { todos, tasks } = this.props.store.state;
    const { actions } = this.props;
    return (
      <div className="main-container">
        <Header title="Todo APP." />
        <AddTodo dispatch={this.dispatcher} onAdd={actions.addTodo} />
        <Todos todos={todos} tasks={tasks} dispatch={this.dispatcher} actions={actions} />
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object,
  actions: PropTypes.object,
};

export default App;
