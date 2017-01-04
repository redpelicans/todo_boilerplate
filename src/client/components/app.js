import React from 'react';
import styled from 'styled-components';
import Header from './header';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


class App extends React.Component {
  onAddArea = () => {
    console.log('onAdd ...');
    const { store, actions } = this.props;
    store.dispatch(actions.addNewArea());
  }

  render() {
    const { store, actions } = this.props;
    return (
      <Wrapper>
        <Title>Hello World, this is my first react app!</Title>
        <Header />
        <button onClick={this.onAddArea}>Add</button>
      </Wrapper>
    );
  }
}

export default App;
