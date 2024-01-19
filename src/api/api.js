import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.nasa.gov/planetary/apod',
    params: {
        api_key: 'TVr0g2eIjO3p8y4Vq7FAPAbOkkJ014wOixht80M4',
    },
});