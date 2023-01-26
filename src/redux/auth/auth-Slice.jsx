import { createSlice } from "@reduxjs/toolkit";
import { fetchRegister, fetchLogin, fetchLogout} from "redux/api/authAPI";


const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
}
const authSlice = createSlice({
    name: "auth",
    initialState,

    extraReducers: {
        [fetchRegister.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [fetchLogin.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [fetchLogout.fulfilled]: (state, action) => {
            state.user.name = null;
            state.user.email = null;
            state.token = null; 
            state.isLoggedIn = false;
        }
    }
});

export default authSlice.reducer;