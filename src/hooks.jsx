import { useContext } from "react";
import ItemsContext from './Context'

export default function useItemsContext() {
    return useContext(ItemsContext)
}
