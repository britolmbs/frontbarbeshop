import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
};
const authSlide = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        lodinStart(state){
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess(state, action) {
            state.isLoading = false;
            state.isLoggedIn  = true;
            state.user = action.payload;
            state.error = null;
        },
        loginFailure(state, action) {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.error = action.payload;
        },
    },
});

export const {lodinStart, loginSuccess, loginFailure } = authSlide.actions;

export default authSlide.reducer;

// Criador de ação de conversão assíncrona

export const loginUser = (email, password) => async (dispatch) => {
    dispatch(loginStart());
    try {
        const response = await fetch('http://localhost:8080/api/auth/login',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({email, password}),
        });
        if (!response.ok) {
            throw new Error('Não foi possível fazer login');
        }
        const data = await response.json();
        dispatch(loginSuccess(data)); // Supondo que os dados contenham informações do usuário ou token
    } catch (error){
        dispatch(loginFailure(error.message));
    }
};