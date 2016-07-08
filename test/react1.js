import chai from "chai"
import React from 'react'
import equalJSX from 'chai-equal-jsx'
import {createRenderer} from 'react-addons-test-utils'
import TodoApp from '../src/client/app.js'
import Title from '../src/client/title.js'
import ListTitle from '../src/client/listtitle.js'
import CreateList from '../src/client/createlist.js'
import TodoList from '../src/client/todolist.js'
import Item from '../src/client/item.js'
import RemoveItem from '../src/client/removeitem.js'
import TodoItem from '../src/client/todoitem.js'

chai.should()
chai.use(equalJSX)

let Items = [
  { id: 1, title: 'List1', tasks: [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }] },
  { id: 2, title: 'List2', tasks: [{ id: 1, name: 'E' }, { id: 2, name: 'F' }, { id: 3, name: 'G' }] },

];

describe('TodoApp test', function(){
  it('test App', function(){
  	const renderer = createRenderer()	
    var data = [{id:'1', title: 'List1', tasks:[{id:1, name:'A'},{id:2, name:'B'},{id:3, name:'C'}]},
				{id:'2', title: 'List2', tasks:[{id:1, name:'E'},{id:2, name:'F'},{id:3, name:'G'}]}];
    renderer.render(React.createElement(TodoApp, {list:data}));
    const output = renderer.getRenderOutput()
    output.should.equalJSX(<div className='todoapp'>
		<Title title='Marianne&#39;s todo list'/>
		<CreateList/>
		<TodoList list={data} />
		</div>
		); 
	});
});

describe('TodoList test', function(){
  it('test todolist', function(){
    const renderer = createRenderer()
    renderer.render(React.createElement(TodoList, {list:Items}));  
    const data = Items.map((tasks) => <TodoItem {...tasks} key={tasks.id} />)
    const output = renderer.getRenderOutput()
    output.should.equalJSX(<div className='todolist'>
      {data}
    </div>); 
  });
});

describe('TodoItem test', function(){
  it('test todoitem', function(){
    const renderer = createRenderer()
    var item = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }];
    var title = 'title'
    renderer.render(React.createElement(TodoItem, {tasks:item, title:title}));
    const data = item.map((task) => <Item  key={task.id} name={task.name} />)
    const output = renderer.getRenderOutput()
    output.should.equalJSX(<div className='todoitem'>
        <ListTitle title={title} />
        {data}
      </div>); 
  });
});



describe('Title test', function(){
  it('test title', function(){
  	const renderer = createRenderer()
  	var title = 'title'
    renderer.render(React.createElement(Title, {title}));
    const output = renderer.getRenderOutput()
    output.should.equalJSX(<div className='title'><h1>{ title }</h1></div>); 
	});
});

describe('CreateList test', function(){
  it('test createlist', function(){
    const renderer = createRenderer()
    renderer.render(React.createElement(CreateList));
    const output = renderer.getRenderOutput()
    output.should.equalJSX(<div className='createlist'>
      <input type='text'/> 
      <button type='button'>Add</button>
    </div>); 
  });
});

describe('Item test', function(){
  it('test item', function(){
    const renderer = createRenderer()
    var name = 'name'
    renderer.render(React.createElement(Item, {name}));
    const output = renderer.getRenderOutput()
    output.should.equalJSX(<li className='item'>{ name }<RemoveItem/></li>); 
  });
});

describe('RemoveItem test', function(){
  it('test removeitem', function(){
    const renderer = createRenderer()
    renderer.render(React.createElement(RemoveItem));
    const output = renderer.getRenderOutput()
    output.should.equalJSX(<button type='button'>x</button>); 
  });
});

describe('ListTitle test', function(){
  it('test listtitle', function(){
    const renderer = createRenderer()
    var title = 'title'
    renderer.render(React.createElement(ListTitle, {title}));
    const output = renderer.getRenderOutput()
    output.should.equalJSX(<h2 className='listtitle'>{title}</h2>); 
  });
});




