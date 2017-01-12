import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Todo from './todo/';
import { filterTodos } from '../../model';

export const Section = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Todos = ({ todos, tasks, options, actions }) =>
  <Section>
    {filterTodos(todos, tasks, options).map(
      todo => <Todo
        todo={todo}
        tasks={tasks}
        actions={actions}
        key={todo.id}
      />)
    }
  </Section>
;

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  tasks: PropTypes.array.isRequired,
  options: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Todos;
