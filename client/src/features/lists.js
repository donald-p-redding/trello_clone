import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBoard } from "./boards";
import apiClient from "../lib/ApiClient";


const initialState = []

export const createList = createAsyncThunk(
  "lists/createList",
  async(reqPayload) => {
    console.log("createList asyncThunk")
    const data = await apiClient.createList(reqPayload)
    console.log("handing data to builder");
    return data;
  }
);

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

    builder.addCase(createList.fulfilled, (state, action) => {
      return [...state, action.payload];
    })
  },
});


export default listSlice.reducer;
