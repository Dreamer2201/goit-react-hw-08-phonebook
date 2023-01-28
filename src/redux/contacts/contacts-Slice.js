import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { fetchContacts, addNewContact, deleteContact } from "redux/api/contactsAPI";

const initialState = {
        contacts: new Array(0),
        family: [],
        loading: false,
        error: null,
}
const notify = () => toast("Contact is already in family list.");

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addFamilyContact: {
            reducer: (state, {payload}) => {
                const isDublicate = state.family.find(item => item.id === payload.id);
                console.log(isDublicate);
                if(isDublicate) {
                    notify();
                    toast("Contact is already in family list.", {
                        position: "top-right",
                        autoClose: 3000,
                    })
                    console.log('Contact is already in family list');
                    return state;
                }
             const familyContacts = state.contacts.filter(item => item.id === payload.id);
             console.log(familyContacts);

             state.family = [...state.family, ...familyContacts ];
             return state;
            }
        }
    },
    extraReducers: {
        [fetchContacts.pending]: (state) => {
            state.loading = true;
            return state;
        },
        [fetchContacts.fulfilled]: (state, action) => {
            state.loading = false;
            state.contacts = [...action.payload];
            return state;
        },
        [fetchContacts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            return state;
        },

        [deleteContact.pending]: (state) => {
            state.loading = true;
            return state;
        },
        [deleteContact.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.loading = false;
            const result = state.contacts.filter(item => item.id !== action.payload);
            state.contacts = [...result];
            const deleteFromFamily = state.family.filter(item => item.id !== action.payload);
            state.family = [...deleteFromFamily];
            return state;
        },
        [deleteContact.rejected]: (state, action) => {
            state.loading = false;
            console.log(action.payload);
            state.error = action.payload;
            return state;
        },
        [addNewContact.pending]: (state) => {
            state.loading = true;
            return state;
        },
        [addNewContact.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.loading = false;
            state.contacts.push(action.payload);
            return state;
        },
        [addNewContact.rejected]: (state, action) => {
            console.log(action.payload);
            state.loading = false;
            state.error = action.payload;
            return state;
        }
    }
    
});
export const {addFamilyContact} = contactsSlice.actions;
export default contactsSlice.reducer;


