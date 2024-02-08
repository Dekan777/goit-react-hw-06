import { createSlice } from '@reduxjs/toolkit';

export const contacsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: []
    },
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.push(action.payload)
            }
        },
        removeContact: (state, action) {
            state.contacts = state.contacts.filter(
                contact => contact.id !== action.payload
            )
        }
    }
})
