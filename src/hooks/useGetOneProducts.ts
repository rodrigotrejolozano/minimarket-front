import { useQuery } from 'react-query'
import ProductServices from '@/services/ProductServices'
import { Product } from '@/types/product.types'

const productServices = new ProductServices()

const QUERY_KEY = 'productsOne'

const useGetOneProduct = (id: number) => {
    const {
        data: productOne,
        isLoading: isLoadingProductOne,
    } = useQuery<Product>(
        [QUERY_KEY, id],
        () => productServices.getProductById(id),
        { enabled: !!id }
    )
    return {
        productOne,
        isLoadingProductOne,
    }
}
useGetOneProduct.QUERY_KEY = QUERY_KEY

export default useGetOneProduct