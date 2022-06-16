import { createSlice } from "@reduxjs/toolkit";
import { fetchBoard } from "./boards";


const initialState = []

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBoard.fulfilled, (state, action) => {
      const { lists } = action.payload
      const results = [];
      lists.forEach(list => {
        list.cards.forEach(card => {
          results.push(card);
        })
      })
      return results;
    });
  },
});


export default cardSlice.reducer;
