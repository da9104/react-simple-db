import { useState, useContext, createContext, useReducer, useEffect } from 'react'
import ItemsContext from './Context'
import Item from './Item'

export default function List() {
  const { items } = useContext(ItemsContext) 
  const renderedItems = items.map((item) => {
        return (
            <Item key={item.id} item={item} />
        )
    })

    return (
        <div className='flex flex-row gap-2'>
            {renderedItems}
        </div>
    )
}