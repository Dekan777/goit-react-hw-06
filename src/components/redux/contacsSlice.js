import { createSlice } from '@reduxjs/toolkit';

export const contacsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: []
    },
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.push(action.payload);
            }
        },
        removeContact: {
            reducer(state, action) {
                state.contacts = state.contacts.filter(
                    contact => contact.id !== action.payload
                );
            }
        }
    }
});


export const { addContact, removeContact } = contacsSlice.actions;


export const contacsReducer = contacsSlice.reducer;