import axios from 'axios';

class Api {
    constructor() {
        this.api = axios.create({
            baseURL: process.env.REACT_APP_API,
        });
    }

    login({ email, password }) {
        return new Promise((resolve, reject) => {
            this.api
                .post('/sessions', { email, password })
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }
}

export default new Api();
