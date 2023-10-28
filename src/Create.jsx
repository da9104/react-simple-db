import { useState } from 'react'
import useItemsContext from './hooks'

export default function Create() {
    const [title, setTitle] = useState('')
    const { createItem } = useItemsContext()

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createItem(title)
        setTitle('')
       // console.log(title)
    }

    return (
        <div className='mt-6'>
          <hr />
           <h2 className='underline'> Create Item </h2>
           <form onSubmit={handleSubmit}>
            <input className='rounded border-2 py-2  border-indigo-400' value={title} onChange={handleChange} />
            <button>submit</button>
           </form>
        </div>
    )
}