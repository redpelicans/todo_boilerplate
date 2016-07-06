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

const LISTS = [
  { id: 0, title: 'To do', tasks: [
    { id: 0, text: 'buy eggs' },
    { id: 1, text: 'buy milk' },
    { id: 2, text: 'call bank' },
  ]},
  { id: 1, title: 'Sprint one', tasks: [
    { id: 3, text: 'stateless components' },
    { id: 4, text: 'write tests' },
    { id: 5, text: 'flexbox' },
  ]},
];

describe('TodoApp component', function() {
  it('works', function() {
    const renderer = createRenderer()
    renderer.render(React.createElement(TodoApp))
    const output = renderer.getRenderOutput()
    output.should.equalJSX(
      <div className='todo-app'>
        <Title value='Todo App' />
        <AddTaskList />
        <TaskLists />
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
    renderer.render(React.createElement(TaskList, { title: LISTS[0].title, tasks: LISTS[0].tasks }))
    const output = renderer.getRenderOutput()
    output.should.equalJSX(
      <div className='task-list'>
        <header>
          <TaskListTitle value={LISTS[0].title} />
          <RemoveTaskList />
        </header>
        <div className='tasks'>
          <Task text={LISTS[0].tasks[0].text} />
          <Task text={LISTS[0].tasks[1].text} />
          <Task text={LISTS[0].tasks[2].text} />
        </div>
        <AddTask />
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
    renderer.render(React.createElement(AddTask))
    const output = renderer.getRenderOutput()
    output.should.equalJSX(
      <form>
        <input className='add-task' placeholder='New task..' type='text' />
      </form>
    )
  })
})

describe('RemoveTask component', function() {
  it('works', function() {
    const renderer = createRenderer()
    renderer.render(React.createElement(RemoveTask))
    const output = renderer.getRenderOutput()
    output.should.equalJSX(<Button className='rm-task'>x</Button>)
  })
})

describe('Button component', function() {
  it('works', function() {
    const renderer = createRenderer()
    renderer.render(React.createElement(Button))
    const output = renderer.getRenderOutput()
    output.should.equalJSX(<button></button>)
  })
})

describe('Task component', function() {
  it('works', function() {
    const renderer = createRenderer()
    renderer.render(React.createElement(Task, { text: 'yata' }))
    const output = renderer.getRenderOutput()
    output.should.equalJSX(
      <div className='task'>
        <span>yata</span><RemoveTask />
      </div>
    )
  })
})
