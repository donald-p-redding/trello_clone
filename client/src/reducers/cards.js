export default function cards(state = [], action) {
  switch (action.type) {
    case "FETCH_SINGLE_BOARD_SUCCESS": {
      const { lists } = action.data
      return lists.map(({cards}) => cards)
    }
    default:
      return state;
  }
}
