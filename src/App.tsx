import {useReducer} from 'react'
import './App.scss'
import Header from './components/Header'
import Todo from './components/Todo'
// import Body from'./components/b'


  interface Todo {
    id: number
    text: string
    completed: boolean
  }
  type Action = { type: 'addTodo'; text: string } 
  | { type: 'updateTodo'; id: number } 
  | { type: 'delete'; id: number }

  const initialState: Todo[] = [
    { id: 1, text: 'complete online javascript course', completed: false },
    { id: 2, text: 'jog around the park 3times', completed: false },
    { id: 3, text: '10 mins meditation', completed: false },
    { id: 4, text: 'pick up groceries', completed: false },
    { id: 5, text: 'Complete todo app on frontendmentor', completed: false }
  ]

  const todoReducer = (state: Todo[], action: Action): Todo[] => {
    switch (action.type) {
      case 'addTodo':
        return [
          ...state,
          {
            id: state.length + 1,
            text: action.text,
            completed: false
          }
        ]
      case 'updateTodo':
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      case 'delete':
        return state.filter(todo => todo.id !== action.id)
      default:
        return state
    }
  }
  function App() {
    const [todos, dispatch] = useReducer(todoReducer, initialState)
    const addTodo = (text: string) => {
      dispatch({ type: 'addTodo', text })
    }
    const updateTodo = (id: number) => {
      dispatch({ type: 'updateTodo', id })
    }
    const deleteTodo = (id: number) => {
      dispatch({ type: 'delete', id })
    }
    const itemsLeft = todos.filter(todo => !todo.completed).length
    return (
      <>
        <Header addTodo={addTodo} />
        <Todo
          todos={todos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          itemsLeft={itemsLeft}
        />
      </>
    )

  
}

export default App
