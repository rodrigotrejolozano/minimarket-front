import axios from 'axios'

export type ApiResponse<T = unknown> = {
    code: string
    message: string
    data?: T
}

const api = axios.create({
    headers: {
        'Content-Type': 'application/json'
    },
})


export default api
