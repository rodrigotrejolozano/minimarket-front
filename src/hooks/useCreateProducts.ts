import { useMutation, UseMutationResult } from 'react-query'
import ProductServices from '@/services/ProductServices'
import { CreateProductFrom} from '@/types/product.types'

const productServices = new ProductServices()

const MUTATION_KEY = 'createProduct'

const useCreateProduct = (): UseMutationResult<CreateProductFrom, Error, CreateProductFrom> => {
    return useMutation([MUTATION_KEY], productServices.createProduct)
}

useCreateProduct.MUTATION_KEY = MUTATION_KEY

export default useCreateProduct
