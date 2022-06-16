
import { configureStore } from "@reduxjs/toolkit";
import boardsReducer from "../reducers/boards";

const store = configureStore({
  reducer: {
    boards: boardsReducer,
  },
});

export default store;