import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const tokenHeader = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    }
}


export const fetchRegister = createAsyncThunk(
    'auth/register',
    async (dataUser, thunkAPI) => {
        try {
            const { data } = await axios.post('/users/signup', dataUser);
            tokenHeader.set(data.token);
            console.log(data);
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
            console.log(dataUser);
            const { data } = await axios.post('/users/login', dataUser);
            tokenHeader.set(data.token);
            console.log(data);
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
