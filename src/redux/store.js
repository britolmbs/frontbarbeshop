import { configureStore } from "@reduxjs/toolkit";
import appointmentReducer from './appointmentSlice';
import authReducer from '../redux/authSlice';
export const store = configureStore({
    reducer:{
        auth: authReducer,
        appointments: appointmentReducer,
        //Slices aqui
    },
});