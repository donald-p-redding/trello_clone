
import { configureStore } from "@reduxjs/toolkit";
import boardsReducer from "../features/boards";
import listsReducer from "../features/lists";
import cardsReducer from "../features/cards"

const store = configureStore({
  reducer: {
    boards: boardsReducer,
    lists: listsReducer,
    cards: cardsReducer,
  },
});

export default store;