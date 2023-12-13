import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentAdmin : null,
    loading : false ,
    error : false,
}

const adminSlice = createSlice({
    name : "admin",
    initialState ,
    reducers : {
        signInStart : (state) =>{
              state.loading = true;
        },
        signInSuccess : (state,action) => {
            state.currentAdmin = action.payload;
            state.loading = false;
            state.error = false;
        },
        signInFailure : (state, action) => {
               state.loading = false;
               state.error  = action.payload;
        },
        logout : (state,action) => {
            state.currentAdmin = null;
            state.loading = false;
            state.error = false;
        }
    }
});

export const { signInFailure,signInStart,signInSuccess,logout} = adminSlice.actions;

export default adminSlice.reducer ;