import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            email: localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")).email : "",
            password:localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")).password : ""
        }
    },
    reducers: {
        logIn: (state, {payload}) => {
            state.user = payload
        }
    }
})

export const {logIn} = userSlice.actions
export default userSlice.reducer