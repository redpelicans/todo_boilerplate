import React, { PropTypes } from 'react';
import { Row, Col } from 'antd/lib/grid';
import Card from 'antd/lib/card';
import Button from 'antd/lib/button';
import Task from './task';
import AddTask from './add_task';
import { matchTasksWithTodo } from '../../model';

const TodoHeader = ({ todo, dispatch, actions }) =>
  <Row type="flex" justify="space-between">
    <Col>
      {todo.title}
    </Col>
    <Col>
      <Button onClick={() => dispatch(actions.delTodo(todo.id))} type="ghost" shape="circle" icon={'close'} size="small" />
    </Col>
  </Row>
;

const Todo = ({ todo, tasks, dispatch, actions }) =>
  <Col span={8}>
    <Card title={<TodoHeader todo={todo} dispatch={dispatch} actions={actions} />} style={{ margin: '5px' }} bodyStyle={{ padding: '10px' }}>
      <Row type="flex" justify="center" align="center" style={{ marginBottom: '10px' }}>
        <Col>
          <AddTask dispatch={dispatch} onAdd={actions.addTask} todoId={todo.id} />
        </Col>
      </Row>
      <ul>
        {matchTasksWithTodo(tasks, todo).map(task =>
          <li key={task.id}>
            <Task
              task={task}
              dispatch={dispatch}
              onDelete={actions.delTask}
              onUpdate={actions.updateTask}
              key={task.id}
            />
          </li>
        )}
      </ul>
    </Card>
  </Col>
;

Todo.propTypes = {
  todo: PropTypes.object,
  tasks: PropTypes.array,
  dispatch: PropTypes.func,
  actions: PropTypes.object,
};

export default Todo;
