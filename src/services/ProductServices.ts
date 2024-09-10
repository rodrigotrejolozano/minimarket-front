import { CreateProductFrom, Product, UpdateProductFrom } from "@/types/product.types"
import api from "./api"

class ProductServices {
    baseUrl: string
    constructor() {
        this.baseUrl = `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/product`
    }

    getProducts = async (): Promise<Product[]> => {
        try {
            const response = await api.get<Product[]>(this.baseUrl)
            return response.data
        } catch (error) {
            throw new Error('Error al obtener los productos')
        }
    }

    getProductById = async (id: number): Promise<Product> => {
        try {
            const response = await api.get<Product>(`${this.baseUrl}/${id}`)
            return response.data
        } catch (error) {
            throw new Error('Error al obtener el producto')
        }
    }

    getProductByCategory = async (categoryId: number): Promise<Product[]> => {
        try {
            const response = await api.get<Product[]>(`${this.baseUrl}/category/${categoryId}`)
            return response.data
        } catch (error) {
            throw new Error('Error al obtener los productos')
        }
    }

    createProduct = async (data: CreateProductFrom): Promise<Product> => {
        try {
            const response = await api.post<Product>(this.baseUrl, {
                data
            })
            return response.data
        } catch (error) {
            throw new Error('Error al crear el producto')
        }
    }

    updateProduct = async (data: UpdateProductFrom): Promise<Product> => {
        try {
            const response = await api.put<Product>(`${this.baseUrl}/${data.id}`, {
                data
            })
            return response.data
        } catch (error: unknown) {
            if (typeof error === 'object' && error !== null && 'response' in error) {
                const axiosError = error as { response: { data: { message: string } } };
                const errorMessage = axiosError?.response?.data?.message || 'Error al actualizar el producto';
                throw new Error(errorMessage);
            }
            throw new Error('Error desconocido al actualizar el producto');
        }
    }

    deleteProduct = async (id: number): Promise<void> => {
        try {
            const response = await api.delete(`${this.baseUrl}/${id}`)
            return response.data.data
        } catch (error: unknown) {
            if (typeof error === 'object' && error !== null && 'response' in error) {
                const axiosError = error as { response: { data: { message: string } } };
                const errorMessage = axiosError?.response?.data?.message || 'Error al eliminar el producto';
               throw new Error(errorMessage);
            }
            throw new Error('Error desconocido al eliminar el producto');
        }
    }
}

export default ProductServices