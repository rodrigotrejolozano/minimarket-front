// import React, { useState, useMemo, useCallback, useEffect } from 'react'
// import ProductItem from './ProductItem'
// import CategoriesItem from './CategoriesItem'
// import SkeletonCategory from './SkeletonCategory'
// import SkeletonProduct from './SkeletonProduct'
// import useGetAllCategories from '@/hooks/useGetAllCategories'
// import useGetProductsByCategory from '@/hooks/useGetProductsByCategory'
// import useGetAllProducts from '@/hooks/useGetAllProducts' 
// import { Product } from '@/types/product.types'
// import { useQueryClient } from 'react-query'
// import ModUpdateProduct from '../Modals/ModUpdateProduct'

// const SeccionCard: React.FC = () => {
//     const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<number | null>(null)
//     const { categoriesAll, isLoadingCategoriesAll } = useGetAllCategories()
//     const { productsAll, isLoadingProductsAll } = useGetAllProducts()
//     const { productsByCategory, isLoadingProductsByCategory } = useGetProductsByCategory(categoriaSeleccionada || 0)
//     const isLoadingProducts = categoriaSeleccionada === null ? isLoadingProductsAll : isLoadingProductsByCategory
//     const productosL = categoriaSeleccionada === null ? productsAll : productsByCategory
//     const [products, setProducts] = useState<Product[]>([])
//     const query = useQueryClient()

//     const [actionUpdate, setActionUpdate] = useState<number>(0)

//     const [isModalOpen, setModalOpen] = useState(false);
//     const openModal = () => setModalOpen(true);
//     const closeModal = () => setModalOpen(false);
   
//     const handleRefresh = useCallback(() => {
//         query.invalidateQueries(["productsAll"])
//         query.invalidateQueries(["productsByCategory"])
//     }, [query])

//     const handleCategoryChange = useCallback((id: number | null) => {
//         setCategoriaSeleccionada(id)
//     }, [])

//     useEffect(() => {
//         if (!isLoadingProductsAll) {
//             setProducts(productosL as Product[] || [])
//         }
//     }, [isLoadingProductsAll, productosL])
//     const categoriesList = useMemo(() => {
//         return isLoadingCategoriesAll ? (
//             <SkeletonCategory />
//         ) : (
//             <>
//                 <CategoriesItem
//                     key="todos"
//                     categoria={{ id: 0, name: 'Todos los productos', status: true }}
//                     categoriaSeleccionada={categoriaSeleccionada}
//                     setCategoriaSeleccionada={() => handleCategoryChange(null)} 
//                 />
//                 {categoriesAll.map((categoria) => (
//                     <CategoriesItem
//                         key={categoria.id}
//                         categoria={categoria}
//                         categoriaSeleccionada={categoriaSeleccionada}
//                         setCategoriaSeleccionada={() => handleCategoryChange(categoria.id)}
//                     />
//                 ))}
//             </>
//         )
//     }, [categoriesAll, isLoadingCategoriesAll, categoriaSeleccionada, handleCategoryChange])

//     const productsList = useMemo(() => {
//         return isLoadingProducts ? (
//             <SkeletonProduct />
//         ) : (
//             products && products.length > 0 ? (
//                 products.map((producto) => (
//                     <ProductItem
//                         key={producto.id}
//                         producto={producto}
//                         onRefresh={handleRefresh}
//                         onOpen={openModal}
//                         setActionUpdate={setActionUpdate}
//                     />
//                 ))
//             ) : (
//                 <p>No hay producto</p>
//             )
//         )
//     }, [products, isLoadingProducts, handleRefresh])

//     return (
//         <div className="max-w-6xl mx-auto bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 mt-20">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 <div className="col-span-1">
//                     <h2 className="text-2xl font-semibold text-blue-700 mb-4">Categorías</h2>
//                     <ul className="space-y-2">
//                         {categoriesList}
//                     </ul>
//                 </div>
//                 <div className="col-span-2">
//                     <h2 className="text-2xl font-semibold text-blue-700 mb-4">Productos</h2>
//                     <div className="bg-white bg-opacity-50 rounded-lg p-4">
//                         <ul className="space-y-2">
//                             {productsList}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <ModUpdateProduct
//                 id={actionUpdate}
//                 onRefresh={handleRefresh}
//                 closeModal={closeModal}
//                 isModalOpen={isModalOpen}
//             />
//         </div>
//     )
// }

// export default SeccionCard
import React, { useState, useMemo, useCallback, useEffect } from 'react'
import ProductItem from './ProductItem'
import CategoriesItem from './CategoriesItem'
import SkeletonCategory from './SkeletonCategory'
import SkeletonProduct from './SkeletonProduct'
import useGetAllCategories from '@/hooks/useGetAllCategories'
import useGetProductsByCategory from '@/hooks/useGetProductsByCategory'
import useGetAllProducts from '@/hooks/useGetAllProducts'
import { Product } from '@/types/product.types'
import { useQueryClient } from 'react-query'
import ModUpdateProduct from '../Modals/ModUpdateProduct'

const SeccionCard: React.FC = () => {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<number>(0)
    const { categoriesAll, isLoadingCategoriesAll } = useGetAllCategories()
    const { productsAll, isLoadingProductsAll } = useGetAllProducts()
    const { productsByCategory, isLoadingProductsByCategory } = useGetProductsByCategory(categoriaSeleccionada || 0)
    const isLoadingProducts = categoriaSeleccionada === 0 ? isLoadingProductsAll : isLoadingProductsByCategory
    const productosL = categoriaSeleccionada === 0 ? productsAll : productsByCategory
    const [products, setProducts] = useState<Product[]>([])
    const query = useQueryClient()

    const [actionUpdate, setActionUpdate] = useState<number>(0)

    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const handleRefresh = useCallback(() => {
        query.invalidateQueries(["productsAll"])
        query.invalidateQueries(["productsByCategory"])
    }, [query])

    const handleCategoryChange = useCallback((id: number ) => {
        setCategoriaSeleccionada(id)
    }, [])

    useEffect(() => {
        if (!isLoadingProductsAll) {
            setProducts(productosL as Product[] || [])
        }
    }, [isLoadingProductsAll, productosL])
    const categoriesList = useMemo(() => {
        return isLoadingCategoriesAll ? (
            <SkeletonCategory />
        ) : (
            <>
                <CategoriesItem
                    key="todos"
                    categoria={{ id: 0, name: 'Todos los productos', status: true }}
                    categoriaSeleccionada={categoriaSeleccionada}
                    setCategoriaSeleccionada={() => handleCategoryChange(0)}
                />
                {categoriesAll.map((categoria) => (
                    <CategoriesItem
                        key={categoria.id}
                        categoria={categoria}
                        categoriaSeleccionada={categoriaSeleccionada}
                        setCategoriaSeleccionada={() => handleCategoryChange(categoria.id)}
                    />
                ))}
            </>
        )
    }, [categoriesAll, isLoadingCategoriesAll, categoriaSeleccionada, handleCategoryChange])

    const productsList = useMemo(() => {
        return isLoadingProducts ? (
            <SkeletonProduct />
        ) : (
            products && products.length > 0 ? (
                products.map((producto) => (
                    <ProductItem
                        key={producto.id}
                        producto={producto}
                        onRefresh={handleRefresh}
                        onOpen={openModal}
                        setActionUpdate={setActionUpdate}
                    />
                ))
            ) : (
                <p>No hay producto</p>
            )
        )
    }, [products, isLoadingProducts, handleRefresh])

    return (
        <div className="max-w-6xl mx-auto bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-1">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-4">Categorías</h2>
                    <ul className="space-y-2">
                        {categoriesList}
                    </ul>
                </div>
                <div className="col-span-2">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-4">Productos</h2>
                    <div className="bg-white bg-opacity-50 rounded-lg p-4">
                        <ul className="space-y-2">
                            {productsList}
                        </ul>
                    </div>
                </div>
            </div>
            <ModUpdateProduct
                id={actionUpdate}
                onRefresh={handleRefresh}
                closeModal={closeModal}
                isModalOpen={isModalOpen}
            />
        </div>
    )
}

export default SeccionCard
