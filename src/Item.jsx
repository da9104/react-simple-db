import { useState, useContext } from "react"
import ItemsContext from './Context'
import Edit from './Edit'

export default function Item({ item }) {
    const [showEdit, setShowEdit] = useState(false)
    const { deleteItemById, } = useContext(ItemsContext)

    const handleDeleteClick = () => {
        deleteItemById(item.id)
    }
    
    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = () => {
        setShowEdit(false) 
    }

    let content = <h3>{item.title}</h3>
    if (showEdit) {
        content = <Edit item={item} onSubmit={handleSubmit} />
    }

    return (
        <div className="">
          <ul className="justify-center content-center py-5 px-5 mb-4 flex flex-col border-2 rounded-xl">
             <img 
             className="self-center justify-center justify-self-center rounded-full h-20 w-20" 
             src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" 
             alt="user avatar" 
             />
             <li className="py-2 px-2 flex-1"> {content} </li>
             <div className="flex flex-row-reverse">
             <button className="mx-1 h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-pink-600 to-pink-400 p-0 text-sm text-white shadow-md shadow-pink-500/20 transition duration-150 ease-in-out " type="button" onClick={handleDeleteClick}> 
             <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 items-center text-white-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
             </svg>
             </button>
             <button className="mx-1 h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-400 p-0 text-sm text-white shadow-md shadow-indigo-500/20 transition duration-150 ease-in-out " type="button" onClick={handleEditClick}> edit</button>

             </div>
          </ul>
        </div>
    )
} 