import React, { PropTypes } from 'react';
import 'antd/dist/antd.css';
import Layout from 'antd/lib/layout';
import { Row, Col } from 'antd/lib/grid';
import Menu from '../menu/menu';
import Todos from '../todos/todos';

const { Header, Content } = Layout;

const Title = ({ title }) => <h1>{title}</h1>;
Title.propTypes = { title: PropTypes.string };

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
      <Layout>
        <Header>
          <Row type="flex" justify="center" align="center">
            <Col>
              <Title title={'Todo List'} />
            </Col>
          </Row>
        </Header>
        <Content>
          <Menu dispatch={this.dispatcher} actions={actions} mode={mode} />
          <Todos dispatch={this.dispatcher} actions={actions} {...state} />
        </Content>
      </Layout>
    );
  }
}

App.propTypes = {
  store: PropTypes.object,
  actions: PropTypes.object,
};

export default App;
