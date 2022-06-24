import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchBoard } from "./boards"
import apiClient from "../lib/ApiClient"


const initialState = []

export const fetchCard = createAsyncThunk(
  "cards/fetchCard",
  async(id) => {
    const card  = await apiClient.getCard(id)
    return card
  })

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBoard.fulfilled, (state, action) => {
      const { lists } = action.payload
      const results = []
      lists.forEach(list => {
        list.cards.forEach(card => {
          results.push(card)
        })
      })
      return results
    })
    builder.addCase(fetchCard.fulfilled,  (state, action) => {
      return [action.payload]
    })
  },
})

export default cardSlice.reducer
