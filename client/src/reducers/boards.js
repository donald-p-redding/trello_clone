import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../lib/ApiClient";

const initialState = [];

export const fetchBoards = createAsyncThunk("boards/fetchBoards", async () => {
  const data = await apiClient.getBoards();
  const { boards } = data
  return boards;
});

export const fetchBoard = createAsyncThunk("boards/fetchBoard", async (id) => {
  const board = await apiClient.getBoard(id);
  return board;
})

export const createBoard = createAsyncThunk(
  "boards/createBoard",
  async (newBoard, callback) => {
    const data = await apiClient.createBoard(newBoard);
    console.log("this is data field",data)
    if (callback) {
      callback;
    }
    return data[0];
  }
);

const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBoards.fulfilled, (state, action) => {
      return action.payload;
    }),
    builder.addCase(createBoard.fulfilled, (state, action) => {
      console.log("xtra reduce in board", action.payload)
      console.log("payload", action.payload)
      return [...state, action.payload];
    });
    builder.addCase(fetchBoard.fulfilled, (state, action) => {
      return [action.payload];
    })
  },
});

export default boardSlice.reducer;
