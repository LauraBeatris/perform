import axios from 'axios';
import { store } from '~/store'
class Api {
    constructor() {
        this.api = axios.create({
            baseURL: process.env.REACT_APP_API,
        });

        // Intercept request to add the authorization header
        this.api.interceptors.request.use(config => {
            const { token } = store.getState().user

            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }

            return config
        }, (error) => Promise.reject(error))
    }

    login({ email, password }) {
        return new Promise((resolve, reject) => {
            this.api
                .post('/sessions', { email, password })
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }

    getTeams(){
        return new Promise((resolve, reject) => {
            this.api
                .get('/teams')
                .then(res => resolve(res.data))
                .catch(err => reject(err))
        })
    }
}

export default new Api();
