import React from 'react';
import styled from 'styled-components';
import HeaderTask from './HeaderList';
import TaskElem from './TaskElem';

const Wrapper = styled.div`
  padding: 0px;
  background-color: whitesmoke;
  margin-top: 10px;
  text-align: center;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

const TodoTask = ({ todos, dispatch, onDelete }) => (
  <Wrapper>
    <HeaderTask name="tt" />
    <TaskElem />
    <TaskElem />
    <TaskElem />
  </Wrapper>
);

TodoTask.propTypes = {
  todos: React.PropTypes.array,
  dispatch: React.PropTypes.func,
  onDelete: React.PropTypes.func,
};

export default TodoTask;


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
