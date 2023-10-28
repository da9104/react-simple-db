import { createContext, useState } from "react";
import axios from 'axios'

const ItemsContext = createContext()

function Provider({ children }) {
    const [items, setItems] = useState([])
    
    const fetchItems = async () => {
      const res = await axios.get('https://data-api-omega.vercel.app/items')
      setItems(res.data)
    }

    const editItemById = async (id, newTitle) => {
        const res = axios.put(`https://data-api-omega.vercel.app/items/${id}`, {
            title: newTitle
          })
          console.log(res)
      
          const updatedItem = items.map((item) => {
            if (item.id === id) {
              return { ...item, ...res.data }
            }
            return item
          })
          setItems(updatedItem)
        }
      
        const deleteItemById = async (id) => {
          await axios.delete(`https://data-api-omega.vercel.app/items/${id}`)
          const updatedItem = items.filter((item) => {
            return item.id !== id
          })
          setItems(updatedItem)
        }
      
        const createItem = async (newItem) => {
           const res =  await axios.post('https://data-api-omega.vercel.app/items', {
            title: newItem
          })
          // console.log(res)
          const updatedItem = [
            ...items,
            res.data
          ]
          setItems(updatedItem)
        }

    const initialState = {
        items, 
        editItemById,
        deleteItemById,
        createItem,
        fetchItems
    }

    return (
    <ItemsContext.Provider value={initialState}>
        {children}
    </ItemsContext.Provider>
    )
}

export { Provider }
export default ItemsContext;