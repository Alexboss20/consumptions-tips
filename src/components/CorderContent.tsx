import { dbItemType, OrderItemType } from "../types"
import formatCurrency from "../helpers/index"

type CorderContentProps = {
    order: OrderItemType[]
    removeItem: (id: dbItemType['id']) => void
}

export default function CorderContent({order, removeItem}: CorderContentProps) {
  return (
    <div>
        <h2 className="font-black text-4xl">Consumo</h2>

        <div className="space-y-3 mt-10">
            {order.map(item =>(
                <div 
                    key={item.id}
                    className="flex justify-between py-5 border-t items-center border-gray-200 last-of-type:border-b"
                    >
                        <div>
                            <p className="text-lg">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className="font-black">
                                Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>

                    <button
                        className="bg-red-600 w-6 h-6 rounded-full text-white font-black"
                        onClick={() => removeItem(item.id)}
                    >

                        X
                    </button>
                </div>
            ))}
        </div>

    </div>


  )

}
