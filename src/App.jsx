import { useState, useContext, createContext, useReducer, useEffect } from 'react'
import './App.css'
import ItemsContext from './Context'
import List from './List'
import Create from './Create'

function App() {
 const { fetchItems } = useContext(ItemsContext)
 
  useEffect(() => {fetchItems()}, [fetchItems])
  
  return (
    <>
       <h1 className='mb-6'>Item List</h1>
       <List />
       <Create  />
    </>
  ) 
}

export default App
