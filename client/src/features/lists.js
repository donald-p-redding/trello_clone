import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchBoard } from "./boards"
import apiClient from "../lib/ApiClient"

const initialState = []

export const createList = createAsyncThunk(
  "lists/createList",
  async(reqPayload) => {
    const data = await apiClient.createList(reqPayload)
    return data
  }
)

export const updateListTitle = createAsyncThunk(
  "lists/updateListTitle",
  async({ id, payload, callback }) => {
    const data = await apiClient.updateListTitle({ id, payload })

    if(callback) {
      callback()
    }

    return data
  }
)

const listSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBoard.fulfilled, (state, action) => {
      let { lists } = action.payload
      return lists.map(list => {
        const { _id, boardId, createdAt, position, title, updatedAt } = list
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
      return [...state, action.payload]
    })
  },
})

export default listSlice.reducer
