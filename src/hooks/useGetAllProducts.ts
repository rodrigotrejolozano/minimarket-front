import { useQuery } from 'react-query'
import ProductServices from '@/services/ProductServices'
import { Product } from '@/types/product.types'

const productServices = new ProductServices()

const QUERY_KEY = 'productsAll'

const useGetAllProducts = () => {
    const { data: productsAll = [], isLoading: isLoadingProductsAll } =
        useQuery<Product[] >([QUERY_KEY], productServices.getProducts)

    return {
        productsAll,
        isLoadingProductsAll,
    }
}
useGetAllProducts.QUERY_KEY = QUERY_KEY

export default useGetAllProducts