import { useState, useContext, createContext, useReducer } from 'react'
import './App.css'
import { UserContext } from './main.jsx'


const initialState = {
  count: 0
}

function reducer(state, action) {
  switch(action.type) {
    case "increment":
      return {
        count: state.count + 1
      }
    default:
      return initialState
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = useContext(UserContext)

  return (
    <>
    count: {state.count}
     <button onClick={()=> dispatch({type: "increment"})}>increment</button>
    </>
  )
}

export default App
