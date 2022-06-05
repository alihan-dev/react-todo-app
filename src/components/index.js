import { useState, useEffect  } from 'react';
import '../components/style.css'
import Header from './Header/index.js';
import List from './List/index.js';
import Footer from './Footer/index.js';


export default function Components() {

  const [todo, setTodo] = useState([{ id: 1, isCompleted: false, todo: "React Eğitimi izlenecek" }, { id: 2, isCompleted: true, todo: "Javascript çalışılacak" }, { id: 3, isCompleted: false, todo: "Node.js öğrenilecek" }, { id: 4, isCompleted: false, todo: "MERN Stack olunacak" }])
  const [status, setStatus] = useState("All")
  const todoLength = todo.length

  useEffect( () => {
    console.log(todo)
  }, [todo] )


  return (
  <>
    <Header todo={todo} setTodo={setTodo} todoLength={todoLength} />
    <List todo={todo} setTodo={setTodo} status={status} setStatus={setStatus} />
    <Footer todo={todo} setTodo={setTodo}  status={status} setStatus={setStatus} />
  </>
  )
}
