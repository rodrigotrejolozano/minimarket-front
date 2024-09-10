import React from 'react'

const SkeletonProduct: React.FC = () => {
    return (
        <div className="p-4 mb-2 bg-gray-200 animate-pulse rounded-lg">
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
    )
}

export default SkeletonProduct
