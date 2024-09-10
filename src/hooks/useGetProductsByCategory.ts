import { useQuery } from 'react-query'
import ProductServices from '@/services/ProductServices'
import { Product } from '@/types/product.types'

const productServices = new ProductServices()

const QUERY_KEY = 'productsByCategory'

const useGetProductsByCategory = (id: number): { productsByCategory: Product[] | undefined, isLoadingProductsByCategory: boolean } => {
    const { data, isLoading } = useQuery<Product[], Error>(
        [QUERY_KEY, id],
        () => productServices.getProductByCategory(id),
        { enabled: !!id }
    )
    return {
        productsByCategory: data,  
        isLoadingProductsByCategory: isLoading, 
    }
}
useGetProductsByCategory.QUERY_KEY = QUERY_KEY

export default useGetProductsByCategory