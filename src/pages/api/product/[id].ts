import { NextApiHandler } from 'next'
import api, { ApiResponse } from '@/services/api'
import { handleError } from '@/utils/handlerError'
import { Product } from '@/types/product.types'

const handler: NextApiHandler = async (req, res) => {
    const { id } = req.query
    const baseUrl = process.env.API_URL + `/api/v1/products/${id}`

    try {
        let response;

        switch (req.method) {
            case 'GET':
                response = await api.get<ApiResponse<Product>>(baseUrl)
                return res.status(200).json(response.data.data)

            case 'PUT':
                const { name, categoryId } = req.body.data
                response = await api.put<ApiResponse<Product>>(baseUrl, 
                    {name, categoryId}
                )
               return res.status(200).json(response.data.data)

            case 'DELETE':
                await api.delete<ApiResponse<void>>(baseUrl)
                return res.status(204).end()

            default:
                return res.status(405).json({ code: '405', message: 'Method not allowed' })
        }
    } catch (error) {
        return handleError(res, error)
    }
}

export default handler
