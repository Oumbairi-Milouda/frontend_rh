// informationsSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchInfo=createAsyncThunk('/informations/fetchInfo',
async()=>{
    const response=await axios.get('http://localhost:3000/informations');
    return response.data;
});


export const deleteInfo = createAsyncThunk(
  'informations/deleteInfo',
  async (id) => {
    const response = await axios.delete(`http://localhost:3000/informations/${id}`);
    return response.data;
  }
);

export const fetchInfoById = createAsyncThunk(
  'informations/fetchInfoById',
  async (id) => {
    const response = await axios.get(`http://localhost:3000/informations/${id}`);
    return response.data;
  }
);



 

const initialState = {
  informations: [],
  loading: false,
  error: null,
};

const informationSlice = createSlice({
  name: "information",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfoById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInfoById.fulfilled, (state, action) => {
        state.loading = false;
        state.informations = action.payload;
      })
      .addCase(fetchInfoById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchInfo.pending,(state)=> {
        state.loading=true;
        })
        .addCase(fetchInfo.fulfilled,(state,action)=>{
                state.loading=false;
                state.informations=action.payload
        })
        .addCase(fetchInfo.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.error.message;
        })


       
        .addCase(deleteInfo.fulfilled, (state, action) => {
          state.loading = false;
          state.informations = state.informations.filter(info => info.id !== action.payload);
        })
       
  }
});

export default informationSlice.reducer;
