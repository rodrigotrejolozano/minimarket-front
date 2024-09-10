import React, { SVGProps } from 'react'

export const PlusIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"

            viewBox="0 0 24 24"
            {...props}
        >
            <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z">
            </path>
        </svg>
    )
}
