import { AxiosError } from "axios"
import { NextApiResponse } from "next"

export const handleError = (res: NextApiResponse, error: unknown) => {
    if (error instanceof AxiosError) {
        const status = error.response?.status || 500
        const message = error.response?.data?.message || 'Internal server error'
        return res.status(status).json({ code: `${status}`, message, errors: error.response?.data?.errors })
    }
    const message = error instanceof Error ? error.message : 'Unknown error'
    return res.status(500).json({ code: '500', message })
}
