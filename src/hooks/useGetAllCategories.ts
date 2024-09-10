import { useQuery } from 'react-query'
import CategoryServices from '@/services/CategoryServices'
import { Category } from '@/types/category.types'

const categoryServices = new CategoryServices()

const QUERY_KEY = 'categoriesAll'

const useGetAllCategories = (): { categoriesAll: Category[]; isLoadingCategoriesAll: boolean } => {
    const { data: categoriesAll = [], isLoading: isLoadingCategoriesAll } =
        useQuery([QUERY_KEY], categoryServices.getCategories)

    return {
        categoriesAll,
        isLoadingCategoriesAll,
    }
}
useGetAllCategories.QUERY_KEY = QUERY_KEY

export default useGetAllCategories