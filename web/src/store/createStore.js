import { compose, applyMiddleware, createStore } from 'redux';

export default (reducers, middlewares) => {
    const enhancer =
        process.env.NODE_ENV === 'development'
            ? compose(
                  console.tron.createEnhancer(),
                  applyMiddleware(...middlewares)
              )
            : applyMiddleware(...middlewares);

    const store = createStore(reducers, enhancer);
    return store;
};
