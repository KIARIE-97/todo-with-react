import React from 'react';
import './todo.scss';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoProps {
  todos: Todo[];
  updateTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  itemsLeft: number;
}

function Todo({todos, updateTodo, deleteTodo, itemsLeft}: TodoProps) {
  return (
    <div className="container">
      <div className="All">
        {todos.map((todo) => (
          <div key={todo.id} className='Completed'>
            <input type="radio" 
                   checked={todo.completed}/>

            <label>{todo.text}</label>
            <button onClick={() => deleteTodo(todo.id)}>clear</button>
          </div>
        ))}
      </div>
      <div className="footer">
        <div className="items-left">{itemsLeft} items left</div>
      </div>
      <div className="navigate">
        <a href="#">All</a>
        <a href="#">Active</a>
        <a href="#">Completed</a>
      </div>
      <div className="clear_completed">
        <button>Clear</button>
        <button>reset</button>
      </div>
    </div>
  );
}
export default Todo;
{/* <div className="container">
<div className="All">
  {todos.map((todo) => (
  <div key={todo.id}className='Completed'>
    <input type="radio" 
           checked={todo.completed}/>

    <label>{todo.text}</label>
    <button onClick={() => deleteTodo(todo.id)}>clear</button>
)}
</div>
    
<div className="footer">

      <div className="items-left">{itemsLeft} items left</div>
    </div>
    <div className="navigate">
        <a href="#">All</a>
        <a href="#">Active</a>
        <a href="#">Completed</a>
    </div>
    <div className="clear_completed">
        <button>Clear</button>
        <button>reset</button>
         
    </div>
</div>
  
} */}