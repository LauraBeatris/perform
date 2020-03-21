import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default reducers => {
    const config = {
        key: 'perform',
        storage,
        whitelist: ['user'],
    };

    return persistReducer(config, reducers);
};
