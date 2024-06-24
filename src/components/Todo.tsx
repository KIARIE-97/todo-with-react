
import './todo.scss';

interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoProps {
  todos: ITodo[];
  updateTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  itemsLeft: number;
  resetTodo: () => void;
}

function Todo({todos, deleteTodo, itemsLeft, resetTodo, updateTodo}: TodoProps) {
  return (
    <div className="container">
      <div className="All">
        {todos.map((todo) => (
          <div key={todo.id} className='Completed'>
            <input className='round_checkbox' type="checkbox" onChange={() => updateTodo(todo.id)} 
                   checked={todo.completed}/>

            <label className='L' htmlFor={`checkbox-${todo.id}`}></label>
            <label>{todo.text}</label>
            <div className="btn">
            <button onClick={() => deleteTodo(todo.id)}>clear</button>
          </div>
          </div>
        ))}
      </div>
      <div className="footer">
        <div className="items-left">{itemsLeft} items left</div>
      
      <div className="clear_completed">
       
        <button onClick={resetTodo}>reset</button>
      </div>
      </div>
    </div>
  );
}
export default Todo;
