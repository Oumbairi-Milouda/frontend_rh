import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addInfo = createAsyncThunk('/informations/addInfo', async () => {
    const response = await axios.post('http://localhost:3000/informations/info-familiale');
    return response.data;
});

const familyInfoSlice = createSlice({
    name: 'info',
    initialState: {
        info: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addInfo.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addInfo.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.info = action.payload;
            })
            .addCase(addInfo.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default familyInfoSlice.reducer;
