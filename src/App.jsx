import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './Contexts/TodoContext'
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const AddTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  }

  const UpdateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo));
  }

  const DeleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  }

  const CompletedTodo = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo));
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if( todos  && todos.length > 0) {
      setTodos(todos);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify( todos));
  }, [todos])

  return (
    <TodoProvider value={{ todos, AddTodo, DeleteTodo, UpdateTodo, CompletedTodo }}>
      <div className='bg-[#172842] min-h-screen py-6'>
        <div className='text-white w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3' >
        <h1 className='text-2xl bold mt-2 mb-8 text-center'>This is a app</h1>
        <div className='mb-4'>
            {/* Tdo form goes here  */}
            <TodoForm />
        </div>
        <div className='flex flex-wrap gap-y-3'>
          {/* loop and add todo items here */}
          {todos.map((todo) => (
            <div key={todo.id} className='w-full'>
              <TodoItem todo={todo} />
            </div>
          ))}
        </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App;