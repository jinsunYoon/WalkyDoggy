import axios from 'axios'

// Axios 인스턴스 설정
const instance = axios.create({
    baseURL: 'https://my-json-server.typicode.com',
})

export const api = {
    getAPI: (id) => instance.get(`/dmlafiki/jsons/data/${id}`),
}
