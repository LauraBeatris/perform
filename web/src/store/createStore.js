import { compose, applyMiddleware, createStore } from 'redux';

export default (reducers, middlewares) => {
    const inhancer =
        process.env.NODE_ENV === 'development'
            ? compose(middlewares)
            : applyMiddleware(middlewares);

    const store = createStore(reducers, inhancer);
    return store;
};
