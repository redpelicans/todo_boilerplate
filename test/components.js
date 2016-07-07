import chai from "chai"
import React from 'react'
import equalJSX from 'chai-equal-jsx'
import {createRenderer} from 'react-addons-test-utils'
import AddElem from '../src/client/components/AddElem'
import AddList from '../src/client/components/AddList'
import App from '../src/client/components/App'
import AppTitle from '../src/client/components/AppTitle'
import ButtonAddElem from '../src/client/components/ButtonAddElem'
import ButtonAddList from '../src/client/components/ButtonAddList'
import ButtonDeleteElem from '../src/client/components/ButtonDeleteElem'
import ButtonDeleteList from '../src/client/components/ButtonDeleteList'
import ButtonRenameElem from '../src/client/components/ButtonRenameElem'
import ButtonRenameList from '../src/client/components/ButtonRenameList'
import Elem from '../src/client/components/Elem'
import ElemName from '../src/client/components/ElemName'
import Elems from '../src/client/components/Elems'
import InputAddElem from '../src/client/components/InputAddElem'
import InputAddList from '../src/client/components/InputAddList'
import InputRenameElem from '../src/client/components/InputRenameElem'
import InputRenameList from '../src/client/components/InputRenameList'
import List from '../src/client/components/List'
import ListHeader from '../src/client/components/ListHeader'
import ListName from '../src/client/components/ListName'
import Lists from '../src/client/components/Lists'
import RenameElem from '../src/client/components/RenameElem'
import RenameList from '../src/client/components/RenameList'
import Todo from '../src/client/components/Todo'

chai.should()
chai.use(equalJSX)

describe('AddElem test', function(){
  it('test', function(){
    const renderer = createRenderer();
    renderer.render(React.createElement(AddElem));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<div><InputAddElem /><ButtonAddElem /></div>);
  });
});

describe('AddList test', function(){
  it('test', function(){
    const renderer = createRenderer();
    renderer.render(React.createElement(AddList));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<div className='List'><InputAddList /><ButtonAddList /></div>);
  });
});

describe('App test', function(){
  it('test1', function(){
  	var test = [{id: 1, name: '1', elems: ['a', 'b', 'c']}, {id:2, name: '2', elems: ['d', 'e', 'f']}];
    const renderer = createRenderer();
    renderer.render(React.createElement(App, {lists: test}));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<Todo lists={test}/>);
  });
  it('test2', function(){
  	var test = [];
    const renderer = createRenderer();
    renderer.render(React.createElement(App, {lists: test}));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<Todo lists={test}/>);
  });
});

describe('AppTitle test', function(){
  it('test', function(){
    const renderer = createRenderer();
    renderer.render(React.createElement(AppTitle));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<div className='AppTitle'><h1>Todo List</h1></div>);
  });
});

describe('ButtonAddElem test', function(){
  it('test', function(){
    const renderer = createRenderer();
    renderer.render(React.createElement(ButtonAddElem));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<button>Add Task</button>);
  });
});

describe('ButtonAddList test', function(){
  it('test', function(){
    const renderer = createRenderer();
    renderer.render(React.createElement(ButtonAddList));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<button>Add List</button>);
  });
});

describe('ButtonDeleteElem test', function(){
  it('test', function(){
    const renderer = createRenderer();
    renderer.render(React.createElement(ButtonDeleteElem));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<button>Delete Task</button>);
  });
});

describe('ButtonDeleteList test', function(){
  it('test', function(){
    const renderer = createRenderer();
    renderer.render(React.createElement(ButtonDeleteList));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<button>Delete List</button>);
  });
});

describe('ButtonRenameElem test', function(){
  it('test', function(){
    const renderer = createRenderer();
    renderer.render(React.createElement(ButtonRenameElem));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<button>Rename Task</button>);
  });
});

describe('ButtonRenameList test', function(){
  it('test', function(){
    const renderer = createRenderer();
    renderer.render(React.createElement(ButtonRenameList));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<button>Rename List</button>);
  });
});

describe('Elem test', function(){
  it('test 1', function(){
  	var test = 'coucou';
    const renderer = createRenderer();
    renderer.render(React.createElement(Elem, {name: test}));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<div><ElemName name={test} /><RenameElem /><ButtonDeleteElem /></div>);
  });
  it('test 2', function(){
  	var test = '';
    const renderer = createRenderer();
    renderer.render(React.createElement(Elem, {name: test}));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<div><ElemName name={test} /><RenameElem /><ButtonDeleteElem /></div>);
  });
});

describe('ElemName test', function(){
  it('test 1', function(){
  	var test = 'coucou';
    const renderer = createRenderer();
    renderer.render(React.createElement(ElemName, {name: test}));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<p>{test}</p>);
  });
  it('test 2', function(){
  	var test = '';
    const renderer = createRenderer();
    renderer.render(React.createElement(ElemName, {name: test}));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<p>{test}</p>);
  });
});

describe('Elems test', function(){
  it('test 1', function(){
  	var test = [{id: 1.1, name:'a'}, {id: 1.2, name:'b'}, {id: 1.3, name:'c'}];
    const renderer = createRenderer();
    renderer.render(React.createElement(Elems, {elems: test}));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<div className='Elems'><Elem name='a'/><Elem name='b'/><Elem name='c'/><AddElem /></div>);
  });
  it('test 2', function(){
  	var test = [];
    const renderer = createRenderer();
    renderer.render(React.createElement(Elems, {elems: test}));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<div className='Elems'><AddElem /></div>);
  });
});

describe('InputAddElem test', function(){
  it('test', function(){
    const renderer = createRenderer();
    renderer.render(React.createElement(InputAddElem));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<input type='text'></input>);
  });
});

describe('InputAddList test', function(){
  it('test', function(){
    const renderer = createRenderer();
    renderer.render(React.createElement(InputAddList));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<input type='text'></input>);
  });
});

describe('InputRenameElem test', function(){
  it('test', function(){
    const renderer = createRenderer();
    renderer.render(React.createElement(InputRenameElem));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<input type='text'></input>);
  });
});

describe('InputRenameList test', function(){
  it('test', function(){
    const renderer = createRenderer();
    renderer.render(React.createElement(InputRenameList));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<input type='text'></input>);
  });
});

describe('List test', function(){
  it('test', function(){
  	var test = {name: '1', elems: ['a', 'b', 'c']};
    const renderer = createRenderer();
    renderer.render(React.createElement(List, {list: test}));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<div className='List'><ListHeader name={test.name} /><Elems elems={test.elems}/></div>);
  });
});

describe('ListHeader test', function(){
  it('test 1', function(){
  	var test = 'coucou';
    const renderer = createRenderer();
    renderer.render(React.createElement(ListHeader, {name: test}));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<div className='ListHeader'><ListName name={test} /><RenameList /><ButtonDeleteList /></div>);
  });
  it('test 2', function(){
  	var test = '';
    const renderer = createRenderer();
    renderer.render(React.createElement(ListHeader, {name: test}));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<div className='ListHeader'><ListName name={test} /><RenameList /><ButtonDeleteList /></div>);
  });
});

describe('ListName test', function(){
  it('test 1', function(){
  	var test = 'coucou';
    const renderer = createRenderer();
    renderer.render(React.createElement(ListName, {name: test}));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<div className='ListName'><h2>{test}</h2></div>);
  });
  it('test 2', function(){
  	var test = '';
    const renderer = createRenderer();
    renderer.render(React.createElement(ListName, {name: test}));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<div className='ListName'><h2>{test}</h2></div>);
  });
});

describe('Lists test', function(){
  it('test 1', function(){
  	var test = [{id: 1, name: '1', elems: ['a', 'b', 'c']}, {id:2, name: '2', elems: ['d', 'e', 'f']}];
    const renderer = createRenderer();
    renderer.render(React.createElement(Lists, {lists: test}));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<div className='Lists'><List list={test[0]}/><List list={test[1]}/><AddList /></div>);
  });
  it('test 2', function(){
  	var test = [];
    const renderer = createRenderer();
    renderer.render(React.createElement(Lists, {lists: test}));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<div className='Lists'><AddList /></div>);
  });
});

describe('RenameElem test', function(){
  it('test', function(){
    const renderer = createRenderer();
    renderer.render(React.createElement(RenameElem));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<div><InputRenameElem /><ButtonRenameElem /></div>);
  });
});

describe('RenameList test', function(){
  it('test', function(){
    const renderer = createRenderer();
    renderer.render(React.createElement(RenameList));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<div><InputRenameList /><ButtonRenameList /></div>);
  });
});

describe('Todo test', function(){
  it('test 1', function(){
  	var test = [{id: 1, name: '1', elems: ['a', 'b', 'c']}, {id:2, name: '2', elems: ['d', 'e', 'f']}];
    const renderer = createRenderer();
    renderer.render(React.createElement(Todo, {lists: test}));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<div className='Todo'><AppTitle /><Lists lists={test} /></div>);
  });
  it('test 2', function(){
  	var test = [];
    const renderer = createRenderer();
    renderer.render(React.createElement(Todo, {lists: test}));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<div className='Todo'><AppTitle /><Lists lists={test} /></div>);
  });
});
