import chai from "chai"
import React from 'react'
import equalJSX from 'chai-equal-jsx'
import {createRenderer} from 'react-addons-test-utils'

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
    renderer.render(React.createElement(AddTaskList, {
      value: 'yo',
      onAddList: () => {},
      onChange: () => {},
    }))
    const output = renderer.getRenderOutput()
    output.should.equalJSX(
      <form onSubmit={() => {}}>
        <input
          className='add-tasklist'
          onChange={() => {}}
          placeholder='New Task list..'
          type='text'
          value='yo' />
      </form>
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
    renderer.render(React.createElement(AddTask, {
      value: 'yata',
      listId: 1,
      onAddTask: () => {},
      onChange: () => {},
    }))
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
    renderer.render(React.createElement(RemoveTask, {
      id: 1,
      onRemove: () => {},
    }))
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
    const renderer = createRenderer();
    const task = {
      id: 1,
      listId: 0,
      text: 'yata',
    };
    renderer.render(React.createElement(Task, {
      task,
      onRemoveTask: () => {},
    }))
    const output = renderer.getRenderOutput()
    output.should.equalJSX(
      <div className='task'>
        <span>yata</span>
        <RemoveTask id={1} onRemove={() => {}} />
      </div>
    )
  })
})
