import React, { PropTypes } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import Menu from '../menu/menu';
import Todos from '../todos/todos';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Title = ({ title }) => <h1>{title}</h1>;
Title.propTypes = { title: PropTypes.string.isRequired };

class App extends React.Component {
  constructor(props) {
    super(props);
    const { store } = props;
    /* https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md */
    this.dispatcher = store.dispatch.bind(store);
  }

  render() {
    const { store: { state, state: { mode } }, actions } = this.props;
    return (
      <div>
        <Header>
          <Title title={'Todo List'} />
        </Header>
        <section>
          <Menu dispatch={this.dispatcher} actions={actions} mode={mode} />
          <Todos dispatch={this.dispatcher} actions={actions} {...state} />
        </section>
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object,
  actions: PropTypes.object,
};

export default App;
