import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import api, { ApiResponse } from '@/services/api'
import { handleError } from '@/utils/handlerError'
import { Category } from '@/types/category.types'

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const baseUrl = process.env.API_URL + `/api/v1/categories`
    try {
        let response;

        switch (req.method) {
            case 'GET':
                response = await api.get<ApiResponse<Category[]>>(baseUrl)
                return res.status(200).json(response.data.data)
            default:
                return res.status(405).json({ code: '405', message: 'Method not allowed' })
        }
    } catch (error) {
        return handleError(res, error)
    }
}

export default handler
