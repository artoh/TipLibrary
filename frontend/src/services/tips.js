import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/tips'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newTip => {
    const request = axios.post(baseUrl, newTip)
    return request.then(response => response.data)
}

export default {
    getAll: getAll,
    create: create
}