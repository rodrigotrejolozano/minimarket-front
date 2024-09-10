import useDeleteProduct from '@/hooks/useDeleteProducts'
import { Product } from '@/types/product.types'
import React, { useCallback } from 'react'
import { useToast } from '../context/toastContext'
import { CustomButton } from '../Custom/CustomButton'
import { EditIcon } from '../Icon/EditIcon'
import { TrashIcon } from '../Icon/TrashIcon'

interface ProductItemProps {
    producto: Product
    onRefresh: () => void
    onOpen: () => void
    setActionUpdate: (action: number) => void
}

const ProductItem: React.FC<ProductItemProps> = ({
    producto,
    onRefresh,
    onOpen,
    setActionUpdate
}) => {

    const deleteProduct = useDeleteProduct()
    const { showToast } = useToast();

    const handleDelete = useCallback(async () => {
        try {
            await deleteProduct.mutateAsync(
                producto.id,
                {
                    onSuccess: () => {
                        onRefresh()
                        showToast('Producto eliminado exitosamente', 'success');
                    },
                    onError: () => {
                        showToast('Error al eliminar el producto', 'error');
                    },
                },
            )
        } catch (error) { }
    }, [producto, deleteProduct, onRefresh, showToast]);

    return (
        <li className="flex md:flex-row  cursor-pointer  items-center justify-between bg-white hover:bg-neutral-200 bg-opacity-80 rounded-lg p-2">
            <div
                className='flex flex-col  ml-2 capitalize'
            >
                <span>Nombre: {producto.name && producto.name.length >= 25 ? `${producto.name.slice(0, 25)}...` : producto.name}</span>
                <span className="text-sm text-blue-600 ">Categoria: {producto.category.name}</span>
            </div>
            <div className="flex space-x-2 mr-2">
                <CustomButton
                    label=''
                    icon={<EditIcon className='w-5 h-5' />}
                    onClick={() => {
                        setActionUpdate(producto.id)
                        onOpen()
                    }}
                    className='px-4 w-fit flex fill-white  flex-row items-center justify-center py-1 text-sm text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 transition-colors'
                    type='button'
                />
                <CustomButton
                    label={deleteProduct.isLoading ? '...' : ''}
                    icon={<TrashIcon className='w-5 h-5' />}
                    onClick={handleDelete}
                    className={`px-4 py-1 w-fit flex font-semibold fill-white  flex-row items-center justify-center text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors ${deleteProduct.isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    type='button'
                    loading={deleteProduct.isLoading}
                    disabled={deleteProduct.isLoading}
                />
            </div>
        </li>
    )
}

export default ProductItem
