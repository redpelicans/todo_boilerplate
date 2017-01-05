import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Header from '../header/header';
import Menu from '../menu/menu';
import Todos from '../todos/todos';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 0 auto;
  min-width: 200px;
  max-width: 600px;
  color: #666;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    const { store } = props;
    /* https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md */
    this.dispatcher = store.dispatch.bind(store);
  }

  componentWillMount() {
    const { store } = this.props;
    store.listen(() => this.forceUpdate());
  }

  render() {
    const { store: { state, state: { showCompletedTodos } }, actions } = this.props;
    return (
      <Wrapper>
        <Header title="Todo APP." />
        <Menu switchMode={showCompletedTodos} dispatch={this.dispatcher} actions={actions} />
        <Todos {...state} dispatch={this.dispatcher} actions={actions} />
      </Wrapper>
    );
  }
}

App.propTypes = {
  store: PropTypes.object,
  actions: PropTypes.object,
};

export default App;
