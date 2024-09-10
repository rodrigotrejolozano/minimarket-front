import React, { useCallback, useEffect, useState } from 'react'
import { CustomButton } from '../Custom/CustomButton'
import { CustomInput } from '../Custom/CustomInput'
import { CustomSelect } from '../Custom/CustomSelect'
import CustomModal from '../Custom/CustomModal'
import { UpdateProductFrom } from '@/types/product.types'
import useGetAllCategories from '@/hooks/useGetAllCategories'
import useUpdateProduct from '@/hooks/useUpdateProducts'
import useGetOneProduct from '@/hooks/useGetOneProducts'
import { useToast } from '../context/toastContext'

interface ModModUpdateProductProps {
    onRefresh: () => void;
    id: number;
    isModalOpen: boolean;
    closeModal: () => void;
}

const ModUpdateProduct: React.FC<ModModUpdateProductProps> = ({
    onRefresh,
    id,
    isModalOpen,
    closeModal
}) => {

    const [updateProducto, setUpdateProducto] = useState<UpdateProductFrom>({
        id: id,
        name: '',
        categoryId: 0,
    });

    const { categoriesAll, isLoadingCategoriesAll } = useGetAllCategories()
    const { productOne, isLoadingProductOne } = useGetOneProduct(id);
    const updateProduct = useUpdateProduct()
    const { showToast } = useToast();

    useEffect(() => {
        if (productOne) {
            setUpdateProducto({
                id: productOne.id,
                name: productOne.name,
                categoryId: productOne.categoryId,
            });
        }
    }, [productOne]);

    const handleUpdate = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!updateProducto.name || !updateProducto.categoryId || !updateProducto.id) return;
        try {
            await updateProduct.mutateAsync(
                { ...updateProducto },
                {
                    onSuccess: () => {
                        onRefresh()
                        closeModal();
                        showToast('Producto actualizado exitosamente', 'success');
                    },
                    onError: (e) => {
                        showToast(e.message, 'error');
                    },
                },
            )
        } catch (error) {
            closeModal();
        }
    }, [updateProduct, updateProducto, onRefresh, closeModal, showToast]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setUpdateProducto((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <>
            <CustomModal
                isOpen={isModalOpen}
                isBlur={true}
                onClose={closeModal}
                title='Editar Producto'
                className="overflow-y-auto w-[400px] h-fit"
            >
                {isLoadingProductOne
                    ? (
                        <h1>Cargando...</h1>
                    )
                    : (
                        <form onSubmit={handleUpdate} className="gap-4 flex flex-col">
                            <div className="flex w-full flex-col gap-2">
                                <CustomInput
                                    label="Nombre"
                                    placeholder="Ingrese el producto"
                                    nameId="name"
                                    type="text"
                                    value={updateProducto.name + ""}
                                    onChange={handleChange}
                                    className="w-[100%]"
                                />
                                <CustomSelect
                                    key="categoryId"
                                    options={
                                        categoriesAll.map((categoria) => ({
                                            id: categoria.id,
                                            nameValue: categoria.name
                                        }))
                                    }
                                    value={updateProducto.categoryId?.toString() + ""}
                                    onchangeInput={(e) => {
                                       setUpdateProducto({ ...updateProducto, categoryId: parseInt(e.target.value) })
                                    }}
                                    nameInput="categoria"
                                    valueInput="categoria"
                                    isLoading={isLoadingCategoriesAll}
                                    setValue={(value) => setUpdateProducto({ ...updateProducto, categoryId: parseInt(value) })}
                                    valueNameInput="nameValue"
                                />
                            </div>
                            <div className="flex justify-between">
                                <CustomButton
                                    label="Cancelar"
                                    type="button"
                                    onClick={closeModal}
                                    className="bg-red-600 hover:bg-red-700 w-[47%] text-white px-4 py-2 rounded mr-2"
                                />
                                <CustomButton
                                    onClick={() => { }}
                                    type="submit"
                                    label="Confirmar"
                                    className="bg-blue-600 hover:bg-blue-800 w-[47%] text-white px-4 py-2 rounded mr-2"
                                />
                            </div>
                        </form>
                    )}
            </CustomModal>
        </>
    );
};

export default ModUpdateProduct