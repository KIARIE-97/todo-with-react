import {useReducer, useEffect} from 'react'
import './App.scss'
import Header from './components/Header'
import Todo from './components/Todo'
import useLocalStorage from './Hooks/useLocalStorage'
import { act } from 'react-dom/test-utils'

  interface Todo {
    id: number
    text: string
    completed: boolean
  }
  type Action = { type: 'addTodo'; text: string } 
  | { type: 'updateTodo'; id: number } 
  | { type: 'delete'; id: number } 
  |  {type: 'reset'; initialTodos: Todo[]}

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
      case 'reset':
        return action.initialTodos

      default:
        return state
    }
  }



  function App() {
   
    const[storedTodos, setStoredTodos] = useLocalStorage<Todo[]>('todos', initialState)
    const [todos, dispatch] = useReducer(todoReducer, storedTodos)
    // console.log(storedTodos)

    useEffect(() => {
      setStoredTodos(todos) // set the todos to local storage
    }, [todos, setStoredTodos]) // this will run when todos or setStoredTodos changes

    console.log(storedTodos)
    const addTodo = (text: string) => {
      dispatch({ type: 'addTodo', text })
    }
    const updateTodo = (id: number) => {
      dispatch({ type: 'updateTodo', id })
    }
    const deleteTodo = (id: number) => {
      dispatch({ type: 'delete', id })
    }
    const resetTodo = () => {
      dispatch({ type: 'reset', initialTodos: initialState})
    }
    const itemsLeft = todos.filter(todo => !todo.completed).length
    return (
      <>
        <Header addTodo={addTodo} />
        <Todo
          todos={todos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          resetTodo={resetTodo}
          itemsLeft={itemsLeft}
        />
      </>
    )

  
}

export default App
