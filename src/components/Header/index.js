import {useState} from 'react';

export default function Header({ todo, setTodo, todoLength }) {
	const todoDefaultData = {id: "", isCompleted: false, todo: ""}
	const [newTodo, setNewTodo] = useState(todoDefaultData)



	const onChangeTodo = (e) => {
		setNewTodo({...newTodo, id: todoLength + 1, isCompleted: false, todo: e.target.value })
	}

	const onSubmitTodo = (e) => {
		e.preventDefault()
		setTodo([...todo, newTodo])
		setNewTodo(todoDefaultData)
	}

  return (
    <>
      	<header className="header">
		<h1>todos</h1>
		<form onSubmit={onSubmitTodo}>
			<input className="new-todo" placeholder="What needs to be done?"  value={newTodo.todo} onChange={onChangeTodo} />
		</form>
	</header>
    </>
  )
}
