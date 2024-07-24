export type dbItemType = {
    id: number
    name: string
    price: number
}

export type OrderItemType = dbItemType & {
    quantity: number
}