import axios from 'axios';
import { store } from '~/store';

class Api {
    constructor() {
        this.api = axios.create({
            baseURL: `${window.location.protocol}//${process.env.REACT_APP_API}`,
        });

        // Intercept request to add the authorization header
        this.api.interceptors.request.use(
            config => {
                const { token } = store.getState().user;
                const { active } = store.getState().teams;

                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }

                if (active) {
                    config.headers.TEAM = active.slug;
                }

                return config;
            },
            error => Promise.reject(error)
        );

        this.api.interceptors.response.use(
            response => response,
            error => Promise.reject(error.response)
        );
    }

    login({ email, password }) {
        return new Promise((resolve, reject) => {
            this.api
                .post('/sessions', { email, password })
                .then(res => resolve({ ...res.data, email }))
                .catch(err => reject(err));
        });
    }

    signUp({ email, name, password, password_confirmation }) {
        return new Promise((resolve, reject) => {
            this.api
                .post('/users', {
                    email,
                    name,
                    password,
                    password_confirmation,
                })
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }

    getTeams() {
        return new Promise((resolve, reject) => {
            this.api
                .get('/teams')
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }

    createTeam({ name }) {
        return new Promise((resolve, reject) => {
            this.api
                .post('/teams', { name })
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }

    getProjects() {
        return new Promise((resolve, reject) => {
            this.api
                .get('/projects')
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }

    createProject({ title }) {
        return new Promise((resolve, reject) => {
            this.api
                .post('/projects', { title })
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }

    getMembers() {
        return new Promise((resolve, reject) => {
            this.api
                .get('/members')
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }

    getRoles() {
        return new Promise((resolve, reject) => {
            this.api
                .get('/roles')
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }

    updateRoles(roles, memberId) {
        return new Promise((resolve, reject) => {
            this.api
                .put(`/members/${memberId}`, { roles })
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }

    createInvite(invites) {
        return new Promise((resolve, reject) => {
            this.api
                .post('/invites', { invites })
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }

    getInvite(id) {
        return new Promise((resolve, reject) => {
            this.api
                .get(`/invites/${id}`)
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }

    updateInvite(id, data) {
        return new Promise((resolve, reject) => {
            this.api
                .put(`/invites/${id}`, data)
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }

    confirmInvite(id) {
        return new Promise((resolve, reject) => {
            this.api
                .put(`/invites/${id}`, { confirmed: true })
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }

    getNotifications(page = 1) {
        return new Promise((resolve, reject) => {
            this.api
                .get(`/notifications?page=${page}`)
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }

    updateNotifications(notificationIds, data) {
        const viewedRequests = notificationIds.map(id =>
            this.api.put(`/notifications/${id}`, data)
        );
        return Promise.all(viewedRequests)
            .then(responses => responses.map(response => response.data))
            .catch(err => err);
    }

    deleteNotification(id) {
        return new Promise((resolve, reject) => {
            this.api
                .delete(`/notifications/${id}`)
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }
}

export default new Api();
