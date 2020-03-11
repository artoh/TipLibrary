import axios from 'axios'

const API = 'http://localhost:3001/api/tips'

const getAll = () => {
    const request = axios.get(API)
    return request.then(response => response.data)
}

const create = newTip => {
    const request = axios.post(API, newTip)
    return request.then(response => response.data)
}

export default {
    getAll: getAll,
    create: create
}