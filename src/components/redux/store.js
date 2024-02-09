import { configureStore } from '@reduxjs/toolkit';
import { contacsReducer } from './contacsSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
    reducer: {
        contacts: contacsReducer,
        filters: filtersReducer,
    },
});
