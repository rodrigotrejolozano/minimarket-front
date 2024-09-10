import { Category } from "@/types/category.types"
import api from "./api"

class CategoryServices {
    baseUrl: string
    constructor() {
        this.baseUrl = `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/category`
    }

    getCategories = async (): Promise<Category[]> => {
        try {
            const response = await api.get<Category[]>(this.baseUrl)
            return response.data
        } catch (error) {
            throw new Error('Error al obtener las categorías')
        }
    }    
}

export default CategoryServices