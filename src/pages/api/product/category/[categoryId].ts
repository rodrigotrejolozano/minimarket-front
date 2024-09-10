import { NextApiHandler } from 'next'
import api, { ApiResponse } from '@/services/api'
import { handleError } from '@/utils/handlerError'
import { Product } from '@/types/product.types'

const handler: NextApiHandler = async (req, res) => {
    const { categoryId } = req.query
    const baseUrl = process.env.API_URL + `/api/v1/products/category/${categoryId}`

    try {
        let response;

        switch (req.method) {
            case 'GET':
                response = await api.get<ApiResponse<Product[]>>(baseUrl)
                return res.status(200).json(response.data.data)

            default:
                return res.status(405).json({ code: '405', message: 'Method not allowed' })
        }
    } catch (error) {
        return handleError(res, error)
    }
}

export default handler
