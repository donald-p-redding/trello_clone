import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBoard } from "./boards";

const initialState = []

const listSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBoard.fulfilled, (state, action) => {
      const { lists } = action.payload;
      return lists.map(list => {
        const { _id, boardId, createdAt, position, title, updatedAt } = list;
        return {
          _id,
          createdAt,
          position,
          boardId,
          title,
          updatedAt,
        }
      })
    })
  },
});


export default listSlice.reducer;
