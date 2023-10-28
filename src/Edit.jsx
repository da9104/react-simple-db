import { useState } from "react"
import useItemsContext from './hooks'

export default function Create({item, onSubmit}) {
    const [title, setTitle] = useState(item.title)
    const { editItemById } = useItemsContext()

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