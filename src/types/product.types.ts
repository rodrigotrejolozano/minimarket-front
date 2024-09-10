export interface Product {
    id: number
    name: string
    categoryId: number
    category: {
        name: string
    }
}
export interface CreateProductFrom {
    name: string
    categoryId: number
}

export interface UpdateProductFrom {
    id: number
    name?: string
    categoryId?: number

}

export interface DeleteProductFrom {
    id: number
}