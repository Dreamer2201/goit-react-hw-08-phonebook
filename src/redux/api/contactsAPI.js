import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchContacts = createAsyncThunk(
    'contacts/fetch',
    async (_, { rejectWithValue }) => {
        try {
            const {data} = await axios.get('/contacts');       
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
        try {
            await axios.delete(`/contacts/${id}`);
            return id;
        } catch (error) {
            return rejectWithValue(error);
        } 
    }
);
