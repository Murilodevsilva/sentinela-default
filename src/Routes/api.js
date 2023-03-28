import axios from 'axios';
import {useEffect} from 'react'
const api = axios.create ({BaseURL: 'https://api.segnuv.com.br/api'})


 
api.interceptors.request.use(async config => {
    // Declaramos um token manualmente para teste.
    const token = Array;

    if (token) {
      api.defaults.headers.authorization = `Bearer $`;
    }

    return config;
  });
  
   
  export default api;
  