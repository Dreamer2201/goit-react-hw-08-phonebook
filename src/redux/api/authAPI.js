import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


export const fetchRegister = createAsyncThunk(
    'auth/register',
    async (dataUser, thunkAPI) => {
        try {
            const { data } = await axios.post('/users/signup', dataUser);
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
            console.log(data);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)