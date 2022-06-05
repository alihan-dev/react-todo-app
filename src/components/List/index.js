import {useEffect} from 'react'

export default function List({ todo, setTodo, status, setStatus }) {

	const deleteTodo = (id) => {
		setTodo(todo.filter(item => item.id !== id))
	}

	let filtered;

	if(status === 'Active'){
		 filtered = todo.filter(todo =>  todo.isCompleted === false)
	}else if(status === 'Completed'){
		 filtered = todo.filter(todo =>  todo.isCompleted === true)
	} else {
		filtered = todo
	}


	const checkListStatus = (e) => {
		const idFilter = todo.filter(todo => todo.id == e.target.id);
		idFilter.map((todo) => (
			todo.isCompleted === true ? todo.isCompleted = false : todo.isCompleted =true
		))
		console.log(todo)
	}



  return (
    <>
      <section className="main">
		<input className="toggle-all" type="checkbox" />
		<ul className="todo-list">
			{
				filtered.map((todo, i) => (
					<li key={i} className={todo.isCompleted ? 'completed' : 'view'}>
					<div className="view">
						<input className="toggle" type="checkbox"  defaultChecked={todo.isCompleted ? 'checked' : ''} id={todo.id} onClick={checkListStatus} />
						<label>{todo.todo}</label>
						<button className="destroy" onClick={() => {deleteTodo(todo.id)}}></button>
					</div>
				</li>
				))
			}
		</ul>
	</section>
    </>
  )
}
