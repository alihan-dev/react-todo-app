import { useState } from 'react'

export default function Footer({todo, setTodo, status, setStatus}) {

	const notCompletedTodoLength = todo.filter(todo =>  todo.isCompleted === false).length
	const checkStatus = status;
	const clearTodo = () => {
		setTodo(todo.filter(todo =>  todo.isCompleted === false))
	}

	const FilterTodo = (key) => {
		if(key === 'All'){
			setStatus('All')
			console.log(status)
		}

		if(key === 'Active'){
			setStatus('Active')
			console.log(status)

			//setTodo(todo.filter(todo =>  todo.isCompleted === false))
		}

		if(key === 'Completed'){
			setStatus('Completed')
			console.log(status)

			//setTodo(todo.filter(todo =>  todo.isCompleted === true))
		}
	}


  return (
    <>
      	<footer className="footer">
		<span className="todo-count">
			<strong>{notCompletedTodoLength}</strong>
			items left
		</span>

		<ul className="filters">
			<li>
				<a className={ checkStatus === 'All' ? 'selected' : 'disabled'} onClick={() => {FilterTodo('All')}}>All</a>
			</li>
			<li>
				<a className={ checkStatus === 'Active' ? 'selected' : 'disabled'} onClick={() => {FilterTodo('Active')}}>Active</a>
			</li>
			<li>
				<a className={ checkStatus === 'Completed' ? 'selected' : 'disabled'} onClick={() => {FilterTodo('Completed')}}>Completed</a>
			</li>
		</ul>

		<button className="clear-completed" onClick={clearTodo}>
			Clear completed
		</button>
	</footer>
    </>
  )
}
