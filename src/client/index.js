import React from 'react'
import ReactDom from 'react-dom'

const TodoApp = (props) => {
	return (
		<div className='todoapp'>
		<Title title='Marianne&#39;s todo list'/> 
		<CreateItems/>
		<TodoList items={props.items} />
		</div>
		)
	}

const Title = ({title}) => {
	return ( 
		<div className='title'>
		<h1>{title}</h1>
		</div>
		)
	}

const CreateItems = () => (
		<div className='createitems'>
		<input type="text" name="new element"/>
		<button type="button"> Add </button>
	)	


const TodoList = (props) => {
	return ( 
		<div className='todoList'>
		props.items.map(function {
			var id = ;
			return <TodoItems/>
		}

		</div>
		)
	}	

const TodoItems = (props) => {
	return (
		<div className='todoitems'>
		<ul>
		<li>({props.items})<button type="button" /*onClick={}*/> x </button></li>
		</ul>
		</div>
		)
	}


let Items = [
	{"id:"1", text:"Envoyer photo ID"},	
	{"id:"2", text:"Envoyer casier judiciaire"},	
	{"id:"3", text:"Apprendre le JS"}	
]


ReactDom.render(
		<TodoApp items={Items}/>, 
		document.getElementById('todo')
		)
