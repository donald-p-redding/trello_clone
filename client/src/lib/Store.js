
import { configureStore } from "@reduxjs/toolkit";
import boardsReducer from "../reducers/boards";
import listsReducer from "../reducers/lists";
import cardsReducer from "../reducers/cards"

const store = configureStore({
  reducer: {
    boards: boardsReducer,
    lists: listsReducer,
    cards: cardsReducer,
  },
});

export default store;