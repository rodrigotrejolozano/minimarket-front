import { useMutation, UseMutationResult } from 'react-query'
import ProductServices from '@/services/ProductServices'

const productServices = new ProductServices()

const MUTATION_KEY = 'deleteProduct'

const useDeleteProduct = (): UseMutationResult<void, Error, number> => {
    return useMutation([MUTATION_KEY], productServices.deleteProduct)
}
useDeleteProduct.MUTATION_KEY = MUTATION_KEY

export default useDeleteProduct