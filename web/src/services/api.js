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

    getPipes() {
        // eslint-disable-next-line
        const { api } = this;
        return [
            {
                title: 'To do',
                creatable: true,
                tasks: [
                    {
                        id: 1,
                        content: 'Estudar módulo 01 de NodeJS',
                        tags: [{ title: 'Urgency', color: '#7159c1' }],
                        user: {
                            avatar:
                                'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
                            name: 'Laura',
                        },
                    },
                    {
                        id: 2,
                        content:
                            'Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
                        tags: [{ title: 'Urgency', color: '#7159c1' }],
                        user: {
                            avatar:
                                'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
                            name: 'Laura',
                        },
                    },
                    {
                        id: 3,
                        content: 'Estudar módulo 03 de React Native',
                        tags: [{ title: 'Urgency', color: '#7159c1' }],
                        user: {
                            avatar:
                                'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
                            name: 'Laura',
                        },
                    },
                    {
                        id: 4,
                        content:
                            'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
                        tags: [
                            { title: 'Urgency', color: '#7159c1' },
                            { title: 'Giggly', color: '#54e1f7' },
                        ],
                        user: {
                            avatar:
                                'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
                            name: 'Laura',
                        },
                    },
                    {
                        id: 5,
                        content: 'Gravar testes e deploy ReactJS',
                        tags: [{ title: 'Urgency', color: '#7159c1' }],
                        user: {
                            avatar:
                                'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
                            name: 'Laura',
                        },
                    },
                ],
            },
            {
                title: 'Doing',
                creatable: false,
                tasks: [
                    {
                        id: 6,
                        content: 'Recriando clone do Pipefy',
                        tags: [],
                        user: {
                            avatar:
                                'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
                            name: 'Laura',
                        },
                    },
                ],
            },
            {
                title: 'Backlog',
                creatable: false,
                tasks: [
                    {
                        id: 7,
                        content:
                            'Gravar sobre Geolocalização e mapas com React Native',
                        tags: [{ title: 'Urgency', color: '#7159c1' }],
                        user: {
                            avatar:
                                'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
                            name: 'Laura',
                        },
                    },
                    {
                        id: 8,
                        content: 'Gravar testes e deploy ReactJS',
                        tags: [{ title: 'Urgency', color: '#54e1f7' }],
                        user: {
                            avatar:
                                'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',
                            name: 'Laura',
                        },
                    },
                    {
                        id: 9,
                        content: 'Ajustes na biblioteca unform',
                        tags: [],
                    },
                ],
            },
            {
                title: 'Done',
                creatable: false,
                done: true,
                tasks: [
                    {
                        id: 10,
                        content:
                            'Gravar aula sobre deploy e CI com React Native',
                        tags: [],
                    },
                    {
                        id: 12,
                        content: 'Gravar testes e deploy ReactJS',
                        tags: [{ title: 'Urgency', color: '#7159c1' }],
                    },
                    {
                        id: 13,
                        content:
                            'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
                        tags: [{ title: 'Urgency', color: '#7159c1' }],
                    },
                ],
            },
        ];
    }
}

export default new Api();
