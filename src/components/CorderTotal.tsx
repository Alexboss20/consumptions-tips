import { useCallback } from "react"
import { OrderItemType } from "../types"
import formatCurrency from "../helpers"

type OrderTotalsProps = {
    order: OrderItemType[]
    tip: number
    placeOrder: () => void
}


export default function CorderTotal({order, tip, placeOrder}: OrderTotalsProps) {
    
    const subTotalAmount = useCallback(() => order.reduce((total, item) => total + (item.quantity * item.price), 0) , [order]) 
    const tipAmount = useCallback(() => subTotalAmount() * tip, [tip, order])
    const totalAmount = useCallback(() => subTotalAmount() + tipAmount(), [tip, order])

  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propina</h2>
            <p>Subtotal: {''}
                <span className="font-bold">{formatCurrency(subTotalAmount())}</span>
            </p>
            <p>Propina: {''}
                <span className="font-bold">{formatCurrency(tipAmount())}</span>
            </p>
            <p>Total: {''}
                <span className="font-bold">{formatCurrency(totalAmount())}</span>
            </p>

        </div>

        <button
         className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
         disabled={totalAmount() === 0}
        onClick={placeOrder}
        >
            Guardar
        </button>
    
    </>
  )
}
