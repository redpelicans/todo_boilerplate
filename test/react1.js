import chai from "chai"
import React from 'react'
import equalJSX from 'chai-equal-jsx'
import {createRenderer} from 'react-addons-test-utils'

import TodoApp from '../src/client/components/TodoApp'
import Title from '../src/client/components/Title'
import AddTaskList from '../src/client/components/AddTaskList'
import TaskLists from '../src/client/components/TaskLists'
import TaskList from '../src/client/components/TaskList'
import TaskListTitle from '../src/client/components/TaskListTitle'
import AddTask from '../src/client/components/AddTask'
import RemoveTask from '../src/client/components/RemoveTask'
import RemoveTaskList from '../src/client/components/RemoveTaskList'
import Task from '../src/client/components/Task'
import Button from '../src/client/components/Button'

chai.should()
chai.use(equalJSX)

const LISTS = {
  0: {
    title: 'yata',
    tasks: {
      0: 'yo',
      1: 'ey',
    },
  },
};

const testFunc = () => {};

describe('TodoApp component', function() {
  it('works', function() {
    const renderer = createRenderer()
    renderer.render(React.createElement(TodoApp, { lists: LISTS }))
    const output = renderer.getRenderOutput()
    output.should.equalJSX(
      <div className='todo-app'>
        <Title value='Todo App' />
        <AddTaskList
          onAddTasklist={testFunc}
          onChange={testFunc}
          value="" />
        <TaskLists
          lists={LISTS}
          onAddTask={testFunc}
          onAddTaskInput={testFunc}
          onRemoveTask={testFunc}
          onRemoveTaskList={testFunc} />
      </div>
    )
  })
})

describe('Title component', function() {
  it('works', function() {
    const renderer = createRenderer()
    renderer.render(React.createElement(Title))
    const output = renderer.getRenderOutput()
    output.should.equalJSX(<h1></h1>)
  })
})

describe('AddTaskList component', function() {
  it('works', function() {
    const renderer = createRenderer()
    renderer.render(React.createElement(AddTaskList))
    const output = renderer.getRenderOutput()
    output.should.equalJSX(
      <form>
        <input className='add-tasklist' placeholder='New Task list..' type='text' />
      </form>
    )
  })
})

describe('TaskLists component', function() {
  it('works', function() {
    const renderer = createRenderer()
    renderer.render(React.createElement(TaskLists, { lists: LISTS }))
    const output = renderer.getRenderOutput()
    output.should.equalJSX(
      <div className='task-lists'>
        <TaskList id={LISTS[0].id} tasks={LISTS[0].tasks} title={LISTS[0].title} />
        <TaskList id={LISTS[1].id} tasks={LISTS[1].tasks} title={LISTS[1].title} />
      </div>
    )
  })
})

describe('TaskList component', function() {
  it('works', function() {
    const renderer = createRenderer()
    renderer.render(React.createElement(TaskList,
      { title: LISTS[0].title,
        tasks: LISTS[0].tasks,
        id: '1',
        listId: '1',
        onRemoveTaskList: testFunc,
        onAddTask: testFunc,
        onAddTaskInput: testFunc,
        newTaskText: 'yata',
      }));
    const output = renderer.getRenderOutput()
    output.should.equalJSX(
      <div className='task-list'>
        <header>
          <TaskListTitle value={LISTS[0].title} />
          <RemoveTaskList listId='1' onRemove={testFunc} />
        </header>
        <div className='tasks'>
          <Task
            listId='1'
            onRemoveTask={testFunc}
            taskId='0'
            text='ey'
          />
          <Task
            listId='1'
            onRemoveTask={undefined}
            taskId='1'
            text='yo'
          />
        </div>
        <AddTask
          listId='1'
          onAddTask={testFunc}
          onChange={testFunc}
          value='yata' />
      </div>
    )
  })
})

describe('TaskListTitle component', function() {
  it('works', function() {
    const renderer = createRenderer()
    renderer.render(React.createElement(TaskListTitle, { value: 'test' }))
    const output = renderer.getRenderOutput()
    output.should.equalJSX(<h2>test</h2>)
  })
})

describe('AddTask component', function() {
  it('works', function() {
    const renderer = createRenderer()
    renderer.render(React.createElement(AddTask, { value: 'yata' }))
    const output = renderer.getRenderOutput()
    output.should.equalJSX(
      <form onSubmit={testFunc}>
        <input
          className='add-task'
          onChange={testFunc}
          placeholder='New task..'
          type='text'
          value='yata' />
      </form>
    )
  })
})

describe('RemoveTask component', function() {
  it('works', function() {
    const renderer = createRenderer()
    renderer.render(React.createElement(RemoveTask))
    const output = renderer.getRenderOutput()
    output.should.equalJSX(
      <Button className='rm-task' onClick={() => {}}>x</Button>
    )
  })
})

describe('Button component', function() {
  it('works', function() {
    const renderer = createRenderer()
    renderer.render(React.createElement(Button, { children: 'yata' }))
    const output = renderer.getRenderOutput()
    output.should.equalJSX(<button>yata</button>)
  })
})

describe('Task component', function() {
  it('works', function() {
    const renderer = createRenderer()
    renderer.render(React.createElement(Task,
      { text: 'yata', listId: '1', taskId: '1', onRemoveTask: testFunc }))
    const output = renderer.getRenderOutput()
    output.should.equalJSX(
      <div className='task'>
        <span>yata</span>
        <RemoveTask
          listId='1'
          onRemove={testFunc}
          taskId='1' />
      </div>
    )
  })
})
