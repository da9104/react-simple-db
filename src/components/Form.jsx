import { useState, useContext, useEffect, createContext } from 'react'
import { TodosContext } from '../App'

export default function Form() {
    const [todo, setTodo] = useState("")
    const { state: { currentTodo = {} }, dispatch } = useContext(TodosContext)

    useEffect(() => {
        if (currentTodo.text) {
            setTodo(currentTodo.text)
        } else {
            setTodo("")
        }
    }, [currentTodo.id])

    const handleSubmit = e => {
        e.preventDefault()
        if (currentTodo.text) {
            dispatch({ type: "UPDATE_TODO", payload: todo })
        } else {
            dispatch({ type: "ADD_TODO", payload: todo })
        }
        setTodo("")
    }
   
    return (
        <form onSubmit={handleSubmit} className='flex justify-center items-center '>
            <input
            placeholder='Add to the wish list..'
            type="text"
            className="border-solid border-2 border-gray-500 px-5" 
            onChange={e => setTodo(e.target.value)}
            value={todo}
            />
        </form>
    )
}