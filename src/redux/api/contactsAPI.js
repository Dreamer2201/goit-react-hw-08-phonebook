import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchContacts = createAsyncThunk(
    'contacts/fetch',
    async (_, { rejectWithValue }) => {
        try {
            const {data} = await axios.get('/contacts');
            console.log(data);          
            return data;
        } catch(error) {
            return rejectWithValue(error);
        }
    }
);

export const addNewContact = createAsyncThunk(
    'contacts/add',
    async (newContact, { rejectWithValue }) => {
        try {
            console.log(newContact);
            const {data} = await axios.post('/contacts', newContact);          
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/delete',
    async ({id}, { rejectWithValue }) => {
        console.log(id);
        try {
            const {data} = await axios.delete(`/contacts/${id}`);
            console.log(id);
            return id;
        } catch (error) {
            return rejectWithValue(error);
        } 
    }
);
