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
    if (callback) {
      callback;
    }
    return data;
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
      state.push(action.payload);
    });
  },
});

export default boardSlice.reducer;
