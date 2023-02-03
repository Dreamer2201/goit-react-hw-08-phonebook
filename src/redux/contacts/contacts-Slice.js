import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { fetchContacts, addNewContact, deleteContact } from "redux/api/contactsAPI";

const initialState = {
        contacts: new Array(0),
        family: [],
        loading: false,
        error: null,
}
const notifyDublicate = (str) => toast.info(str, {
    autoClose: 2000,
});
const notifySucsess = (str) => toast.success(str, {
    autoClose: 1800,
    icon: "🚀"
  });

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addFamilyContact: {
            reducer: (state, {payload}) => {
                const isDublicate = state.family.find(item => item.id === payload.id);
                if(isDublicate) {
                    notifyDublicate('This contact is already in family list.')
                    return state;
                }
             const familyContacts = state.contacts.filter(item => item.id === payload.id);
             state.family = [...state.family, ...familyContacts ];
             notifySucsess(`Add to family list!`);
             return state;
            }
        }
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchContacts.pending, (state) => {
            state.loading = true;
            return state;
        } )
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.contacts = [...action.payload];
            return state;
        })
        .addCase(fetchContacts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            return state;
        })
        .addCase(deleteContact.pending, (state) => {
            state.loading = true;
            return state;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.loading = false;
            const result = state.contacts.filter(item => item.id !== action.payload);
            state.contacts = [...result];
            const deleteFromFamily = state.family.filter(item => item.id !== action.payload);
            state.family = [...deleteFromFamily];
            notifySucsess('Contact is deleted.');
            return state;
        })
        .addCase(deleteContact.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            return state;
        })
        .addCase(addNewContact.pending, (state) => {
            state.loading = true;
            return state;
        })
        .addCase(addNewContact.fulfilled, (state, action) => {
            state.loading = false;
            state.contacts.push(action.payload);
            notifySucsess(`${action.payload.name}  add to phonebook!`);
            return state;
        })
        .addCase(addNewContact.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            return state;
        })
        
        // [fetchContacts.pending] (state) {
        //     state.loading = true;
        //     return state;
        // },
        // [fetchContacts.fulfilled](state, action) {
        //     state.loading = false;
        //     state.contacts = [...action.payload];
        //     return state;
        // },
        // [fetchContacts.rejected](state, action) {
        //     state.loading = false;
        //     state.error = action.payload;
        //     return state;
        // },
        // [deleteContact.pending](state) {
        //     state.loading = true;
        //     return state;
        // },
        // [deleteContact.fulfilled](state, action) {
        //     state.loading = false;
        //     const result = state.contacts.filter(item => item.id !== action.payload);
        //     state.contacts = [...result];
        //     const deleteFromFamily = state.family.filter(item => item.id !== action.payload);
        //     state.family = [...deleteFromFamily];
        //     notifySucsess('Contact is deleted.');
        //     return state;
        // },
        // [deleteContact.rejected](state, action) {
        //     state.loading = false;
        //     state.error = action.payload;
        //     return state;
        // },
        // [addNewContact.pending](state) {
        //     state.loading = true;
        //     return state;
        // },
        // [addNewContact.fulfilled](state, action) {
        //     state.loading = false;
        //     state.contacts.push(action.payload);
        //     notifySucsess(`${action.payload.name}  add to phonebook!`);
        //     return state;
        // },
        // [addNewContact.rejected](state, action) {
        //     state.loading = false;
        //     state.error = action.payload;
        //     return state;
        // }
    }
}
);
export const {addFamilyContact} = contactsSlice.actions;
export default contactsSlice.reducer;


