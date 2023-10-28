import Item from './Item'
import useItemsContext from './hooks'

export default function List() {
  const { items } = useItemsContext()
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