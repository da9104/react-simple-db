import { useState, useContext, createContext, useReducer, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import todosReducer from './reducer'
import Form from './component/Form'
import TodoList from './component/TodoList'


export const TodosContext = createContext({
  todos: [],
  currentTodo: {}
})

const useAPI = endpoint => {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await axios.get(endpoint)
    setData(response.data)
  }
  
  return data
}


function App() {
  const initialState = useContext(TodosContext)
  const [state, dispatch] = useReducer(todosReducer, initialState)
  const savedTodos = useAPI("https://hooks-29ummjixd-dami.vercel.app/todos")


  useEffect(() => {
    dispatch({
      type: "GET_TODOS",
      payload: savedTodos
    })
  }, [savedTodos])

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <Form />
      <TodoList />
    </TodosContext.Provider>
  ) 
}

export default App
