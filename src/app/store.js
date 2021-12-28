import { configureStore } from '@reduxjs/toolkit';
import { createApi } from '@reduxjs/toolkit/dist/query';
import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/CryptoNewsApi';

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
})