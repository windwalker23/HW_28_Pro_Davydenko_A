import React from 'react';
import './App.css';
import ToDoList from './components/TodoList';
import NewItem from './components/NewItem';
import Context from './context';
// import { v4 as uuidv4 } from 'uuid';

function App() {

  const [ todos, setTodos ] = React.useState([
    { id: 1, title: 'Buy bread', completed: false },
    { id: 2, title: 'Buy milk', completed: true },
    { id: 3, title: 'Buy sweets', completed: false },
  ]);

  function toggleList(id) {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    )
  };

  function deleteItem(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <Context.Provider value={{ toggleList, deleteItem, setTodos }}>
      <div className="wrapp">
        <h1 className='title'>Todo List</h1>
        <NewItem todos={todos} />
        { todos.length ? <ToDoList todos={todos} /> : <p>List is empty!</p> }
      </div>
    </Context.Provider>
  );
}

export default App;