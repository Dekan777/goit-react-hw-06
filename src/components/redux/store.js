import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contacsReducer } from './contacsSlice';
import { filtersReducer } from './filtersSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const rootReducer = combineReducers({
    contacts: contacsReducer,
    filters: filtersReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer, middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persitor = persistStore(store);

// export const store = configureStore({
//     reducer: {
//         contacts: contacsReducer,
//         filters: filtersReducer,
//     },
// });
