import React, { useCallback, useState } from 'react'
import { CustomButton } from '../Custom/CustomButton'
import { CustomInput } from '../Custom/CustomInput'
import { CustomSelect } from '../Custom/CustomSelect'
import CustomModal from '../Custom/CustomModal'
import { CreateProductFrom } from '@/types/product.types'
import useGetAllCategories from '@/hooks/useGetAllCategories'
import useCreateProduct from '@/hooks/useCreateProducts'
import { PlusIcon } from '../Icon/PlusIcon'
import { useToast } from '../context/toastContext'

interface ModCreateProductProps {
    onRefresh: () => void;
}

const ModCreateProduct: React.FC<ModCreateProductProps> = ({
    onRefresh
}) => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [nuevoProducto, setNuevoProducto] = useState<CreateProductFrom>({
        name: '',
        categoryId: 0,
    });
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const { categoriesAll, isLoadingCategoriesAll } = useGetAllCategories()
    const createdProduct = useCreateProduct()
    const { showToast } = useToast();

    const handleAgregar = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!nuevoProducto.name || !nuevoProducto.categoryId) return;
        try {
            await createdProduct.mutateAsync(
                { ...nuevoProducto },
                {
                    onSuccess: () => {
                        onRefresh()
                        setNuevoProducto({ name: '', categoryId: 0 });
                        closeModal();
                        showToast('Producto creado exitosamente', 'success');
                    },
                    onError: () => {
                        setNuevoProducto({ name: '', categoryId: 0 });
                        closeModal();
                        showToast('Error al crear el producto', 'error');
                    },
                },
            )
        } catch (error) {
            setNuevoProducto({ name: '', categoryId: 0 });
            closeModal();
        }
    }, [createdProduct, nuevoProducto, onRefresh, showToast]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNuevoProducto((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <>
            <CustomButton
                label="Agregar Producto"
                icon={
                    <PlusIcon className="w-5 h-5" />
                }
                onClick={openModal}
                className="font-medium w-fit h-fit border border-neutral-300 bg-white hover:bg-neutral-200 text-neutral-800 px-4 py-2 rounded-lg"
            />
            <CustomModal
                isOpen={isModalOpen}
                isBlur={true}
                onClose={closeModal}
                title="Nuevo Producto"
                className="overflow-y-auto w-[400px] h-fit"
            >
                <form onSubmit={handleAgregar} className="gap-4 flex flex-col">
                    <div className="flex w-full flex-col gap-2">
                        <CustomInput
                            label="Nombre"
                            placeholder="Ingrese el producto"
                            nameId="name"
                            type="text"
                            value={nuevoProducto.name}
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
                            value={nuevoProducto.categoryId.toString()}
                            onchangeInput={(e) => {
                                setNuevoProducto({ ...nuevoProducto, categoryId: parseInt(e.target.value) })
                            }}
                            nameInput="categoria"
                            valueInput="categoria"
                            isLoading={isLoadingCategoriesAll}
                            setValue={(value) => setNuevoProducto({ ...nuevoProducto, categoryId: parseInt(value) })}
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
                            onClick={() => {}}
                            type="submit"
                            label="Confirmar"
                            className="bg-blue-600 hover:bg-blue-800 w-[47%] text-white px-4 py-2 rounded mr-2"
                        />
                    </div>
                </form>
            </CustomModal>
        </>
    );
};

export default ModCreateProduct;
