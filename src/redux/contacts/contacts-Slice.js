import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { fetchContacts, addNewContact, deleteContact } from "redux/api/contactsAPI";

const initialState = {
        contacts: new Array(0),
        family: [],
        loading: false,
        error: null,
}
const notifyDublicate = (str) => toast.info(str);
const notifySucsess = (str) => toast.success(str);

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addFamilyContact: {
            reducer: (state, {payload}) => {
                const isDublicate = state.family.find(item => item.id === payload.id);
                if(isDublicate) {
                    notifyDublicate('This contact is already in family list.', {
                        position: "top-right",
                        autoClose: 1500,
                    })
                    return state;
                }
             const familyContacts = state.contacts.filter(item => item.id === payload.id);
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
            state.loading = false;
            const result = state.contacts.filter(item => item.id !== action.payload);
            state.contacts = [...result];
            const deleteFromFamily = state.family.filter(item => item.id !== action.payload);
            state.family = [...deleteFromFamily];
            notifySucsess('Contact is deleted.');
            return state;
        },
        [deleteContact.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            return state;
        },
        [addNewContact.pending]: (state) => {
            state.loading = true;
            return state;
        },
        [addNewContact.fulfilled]: (state, action) => {
            state.loading = false;
            state.contacts.push(action.payload);
            console.log(action.payload.name);
            notifySucsess(`${action.payload.name}  add to phonebook!`);
            return state;
        },
        [addNewContact.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            return state;
        }
    }
    
});
export const {addFamilyContact} = contactsSlice.actions;
export default contactsSlice.reducer;


