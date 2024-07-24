import {useState} from 'react'
import type { dbItemType, OrderItemType } from '../types'

export default function useOrder () {

    const [order, setOrder] = useState<OrderItemType[]>([])

    // esta funcion se encarga de agregar items
    const addItem = (item : dbItemType) => {
        // dentro de la funcion tenemos que tomar en cuenta si existe el item o es primera vez que se agregara 
        // la funcion que viene solo revisa si existe el elemento
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        
        // si el elemento existe creamos una condicion if existe entonces creamos un nuevo array en donde sumaremos 
        // la cantidad
            if(itemExist){
        //iterador lo que esta en order comparado con lo que el cliente elegio 
                const updatedOrder = order.map(orderItem => orderItem.id === item.id 
        // si es igual osea lo que tenemos en la orden existe entonces con el spreed operator mantenemos
        // el objeto luego le vamos agregar a la cantidad de la orden 1 
                    ? {...orderItem, quantity: orderItem.quantity + 1} 
        // si no regresa orden como esta
                    : orderItem)
        // redenrizalo a la nueva orden 
                    setOrder(updatedOrder)
            }else{
                // si no existe agregale a item cantidad 1 
                const newItem = { ...item, quantity:1 }
                // renderiza la orden con el nuevo item
                setOrder([...order, newItem])
            } 
    }

  return {
    order,
    addItem
  }
}

