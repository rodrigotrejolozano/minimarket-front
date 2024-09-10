import { Category } from '@/types/category.types'
import React from 'react'

interface CategoriesItemProps {
    categoria: Category
    categoriaSeleccionada: number | null
    setCategoriaSeleccionada: (categoriaId: number) => void
}

const CategoriesItem:React.FC<CategoriesItemProps> = ({
    categoria,
    categoriaSeleccionada,
    setCategoriaSeleccionada
}) => {
  return (
      <li key={categoria.id}>
          <button
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors 
                ${categoriaSeleccionada === categoria.id   
                  ? 'bg-blue-500 text-white'
                  : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                  }`}
              onClick={() => setCategoriaSeleccionada(categoria.id)}
          >
              {categoria.name}
          </button>
      </li>
  )
}

export default CategoriesItem