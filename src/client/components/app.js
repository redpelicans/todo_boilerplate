import React from 'react';
import styled from 'styled-components';
import Header from './header';
import AddArea from './add_area';
import TodoArea from './todo_area';
// import store from '../store';
// import actions from '../actions';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

/*
console.log('test');
console.log(store, actions);
console.log('test');
console.log(store[1]);
console.log(store[1].order);
console.log(store[1].nothing);
console.log(store[1].tasks);
console.log(store[1].tasks[1]);

  // {console.log(store[1].name)}
  // {console.log(actions)}
*/


// const App = ({ store, actions }) => (
//   <Wrapper>
//     <Title>Hello World, this is my first react app!</Title>
//     <Header />
//     <AddArea store={store} />
//     <TodoArea name={store.state[1].name} taskName={store.state[1].tasks[1].name} />
//     <TodoArea name={store.state[2].name} taskName={store.state[2].tasks[1].name} />
//   </Wrapper>
// );

class App extends React.Component {
  // onAddArea = () => {
  //   const { store, actions } = this.props;
  //   store.dispatch(actions.addArea());
  // }

  render() {
    const { store, actions } = this.props;
    return (
      <Wrapper>
       <Title>Hello World, this is my first react app!</Title>
       <Header />
       <AddArea props={this.props} />
       <TodoArea name={store.state[1].name} taskName={store.state[1].tasks[1].name} />
       <TodoArea name={store.state[2].name} taskName={store.state[2].tasks[1].name} />
      </Wrapper>
    );
  }
}

export default App;
