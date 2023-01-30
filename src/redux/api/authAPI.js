import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
export const tokenHeader = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    }
}

export const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const tokenCurrent  = state.auth.token; 
        if(tokenCurrent === null) {
            return thunkAPI.rejectWithValue();
        }
        tokenHeader.set(tokenCurrent );
        try {
            const {data} = await axios.get('/users/current');
            return data;
        } catch(error) {

        }
        
    }
)

export const fetchRegister = createAsyncThunk(
    'auth/register',
    async (dataUser, thunkAPI) => {
        try {
            const { data } = await axios.post('/users/signup', dataUser);
            tokenHeader.set(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const fetchLogin = createAsyncThunk(
    'auth/login',
    async (dataUser, thunkAPI) => {
        try {
            const { data } = await axios.post('/users/login', dataUser);
            tokenHeader.set(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const fetchLogout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout');
            tokenHeader.unset();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
