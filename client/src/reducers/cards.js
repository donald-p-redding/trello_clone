import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBoard } from "./boards";


const initialState = []

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBoard.fulfilled, (state, action) => {
      const { lists } = action.payload
      return lists.reduce((_, { cards }) => {
        return [...cards]
      },[])
    });
  },
});


export default cardSlice.reducer;
