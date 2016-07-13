import chai from "chai"
import React from 'react'
import equalJSX from 'chai-equal-jsx'
import {createRenderer} from 'react-addons-test-utils'
import App from '../src/client/components/app'
import ListTitle from '../src/client/components/listtitle'
import Task from '../src/client/components/task'
import TaskList from '../src/client/components/tasklist'
import TaskLists from '../src/client/components/tasklists'
import Title from '../src/client/components/title'
import CustomButton from '../src/client/components/custombutton'
import InputTask from '../src/client/components/inputtask'                               

chai.should()
chai.use(equalJSX)

const fake = [
    { id: 1, title: 'List1', tasks: [ { id: 1, task: '1st' },
    									 { id: 2, task: '2nd'},
    									 { id: 3, task: '3rd'}
    								]
    },
    { id: 2, title: 'List2', tasks: [ { id: 4, task: '4th' },
    									 { id: 5, task: '5th'},
    									 { id: 6, task: '6th'}
    								]
    }
];

describe('App test', function(){
  it('test App', function(){
    const renderer = createRenderer()
    renderer.render(React.createElement(App, {lists: fake} ));
    const output = renderer.getRenderOutput()
    output.should.equalJSX(<div className='app'><Title title='App' /><TaskLists lists={fake} /></div>);
  });
  it('test Title', function(){
    const renderer = createRenderer()
    renderer.render(React.createElement(Title, {title: 'Je suis un titre'}));
    const output = renderer.getRenderOutput()
    output.should.equalJSX(<div className='title'><h2>Je suis un titre</h2></div>);
  });
  it('test TaskLists', function(){
  	var result = fake.map((list) => <TaskList {...list} key={list.id} />);
  	const renderer = createRenderer()
    renderer.render(React.createElement(TaskLists, {lists: fake}));
    const output = renderer.getRenderOutput()
    output.should.equalJSX(<div className='tasklists'>{result}</div>);
  });
  it('test TaskList', function(){
  	var result = fake[0].tasks.map((task) => <Task key={task.id} task={task.task} />);
  	const renderer = createRenderer()
    renderer.render(React.createElement(TaskList, {tasks: fake[0].tasks, title: 'title'}));
    const output = renderer.getRenderOutput()
    output.should.equalJSX(<div className='tasklist'><ListTitle title='title' /><InputTask />{result}</div>);
  });
  it('test InputTask', function(){
  	var message = 'Bonjour !';
  	var type = 'text';
  	const renderer = createRenderer()
    renderer.render(React.createElement(InputTask, {message: message, type: type}));
    const output = renderer.getRenderOutput()
    output.should.equalJSX(<div className='input-task'><input placeholder={message} type={type} /><CustomButton message='Ajouter' />
    </div>);
  });
  it('test InputTask', function(){
  	var message = 'Bonjour !';
  	var type = 'text';
  	const renderer = createRenderer()
    renderer.render(React.createElement(InputTask, {message: message, type: type}));
    const output = renderer.getRenderOutput()
    output.should.equalJSX(<div className='input-task'><input placeholder={message} type={type} /><CustomButton message='Ajouter' />
    </div>);
  });
  it('test CustomButton', function(){
  	var message = 'Bonjour !';
  	var name= 'BoutoN';
  	var type = 'text';
  	const renderer = createRenderer()
    renderer.render(React.createElement(CustomButton, {message: message, type: type, name: name}));
    const output = renderer.getRenderOutput()
    output.should.equalJSX(<button className={name} type={type}>{message}</button>);
  });
  it('test ListTitle', function(){
  	var title = 'titre';
  	const renderer = createRenderer()
    renderer.render(React.createElement(ListTitle, {title: title}));
    const output = renderer.getRenderOutput()
    output.should.equalJSX(<div className='listtitle'><h2>{ title }</h2></div>);
  });
})
