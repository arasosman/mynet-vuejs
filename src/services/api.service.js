import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 5000,
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
})
