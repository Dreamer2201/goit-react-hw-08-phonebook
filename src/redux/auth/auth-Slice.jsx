import { createSlice } from "@reduxjs/toolkit";
import { fetchRegister } from "redux/api/authAPI";
import { getNameUser, getIsLoggedIn } from "./auth-selectors";
import { fetchLogin } from "redux/api/authAPI";
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
        }
    }
});

export default authSlice.reducer;