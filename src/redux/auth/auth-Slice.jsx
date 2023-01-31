import { createSlice } from "@reduxjs/toolkit";
import { fetchRegister, fetchLogin, fetchLogout, fetchCurrentUser } from "redux/api/authAPI";


const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isModalOpen: false,
}
const authSlice = createSlice({
    name: "auth",
    initialState,


    reducers: {
        openModal: {
            reducer: (state) => {
                console.log('ModalOpen');
                state.isModalOpen = true;
                return state;
            }
        },
        closeModal: {
            reducer: (state) => {
                state.isModalOpen = false;
                return state;
            }
        }
    },

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
        },
        [fetchCurrentUser.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        [fetchCurrentUser.rejected]: (state) => {
            state.isLoggedIn = false;
        }
    }
});
export const { openModal, closeModal } = authSlice.actions;
export default authSlice.reducer;