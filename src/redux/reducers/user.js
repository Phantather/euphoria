import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: ''
    },
    reducers: {}
})

export default userSlice.reducer