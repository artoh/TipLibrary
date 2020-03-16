import axios from 'axios'

const apiUrl = '/api/tips'

const getAll = () => {
    const request = axios.get(apiUrl)
    return request.then(response => response.data)
}

const create = newTip => {
    const request = axios.post(apiUrl, newTip)
    return request.then(response => response.data)
}

const update = (id, editedTip) => {
    const request = axios.put(`${apiUrl}/${id}`, editedTip)
    return request.then(response => response.data)
}

export default {
    getAll: getAll,
    create: create,
    update: update
}