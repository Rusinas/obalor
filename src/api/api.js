import axios from 'axios'
import endpoints from './endpoints'
const instance = axios.create({
    baseURL: 'http://api.rusinas.wtf'
})

const api = endpoints(instance)

export default api