import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "f72838d35c135c556349c31cfe03f654",
        language: "en-US"
    } 
});

export default api;