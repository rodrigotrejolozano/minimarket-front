import { useMutation, UseMutationResult } from 'react-query'
import ProductServices from '@/services/ProductServices'
import { Product, UpdateProductFrom } from '@/types/product.types'

const productServices = new ProductServices()

const MUTATION_KEY = 'updateProduct'

const useUpdateProduct = (): UseMutationResult<Product, Error, UpdateProductFrom> => {
    return useMutation([MUTATION_KEY], productServices.updateProduct)
}

useUpdateProduct.MUTATION_KEY = MUTATION_KEY

export default useUpdateProduct