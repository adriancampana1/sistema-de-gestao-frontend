import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://sistema-gestao-api.onrender.com',
});
