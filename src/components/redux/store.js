import { configureStore } from '@reduxjs/toolkit';
import { contacsReducer } from './contacsSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
    reducer: {
        contacs: contacsReducer,
        filters: filtersReducer,
    },
});
