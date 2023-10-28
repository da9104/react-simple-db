import { useState, useContext } from "react"
import ItemsContext from './Context'

export default function Create({item, onSubmit}) {
    const [title, setTitle] = useState(item.title)
    const { editItemById } = useContext(ItemsContext)

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit()
        editItemById(item.id, title)
        
    }

    return (
        <form className="flex flex-col " onSubmit={handleSubmit} >
          <input value={title} onChange={handleChange} />
          <button >Save</button>
        </form>
    )
}