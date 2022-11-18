import axios from 'axios';

export const url = axios.create({
    baseURL: 'https://gorest.co.in/public/v2'
})

