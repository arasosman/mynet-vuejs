import axios from 'axios'

export default axios.create({
    baseURL: 'https://mynet-laravel.herokuapp.com/api',
    timeout: 5000,
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
})
