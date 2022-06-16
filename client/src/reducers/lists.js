export default function lists(state = [], action) {
  switch (action.type) {
    case "FETCH_SINGLE_BOARD_SUCCESS": {
      const   { lists }  = action.data
      return lists.map(list => {
        const { _id, boardId, createdAt, position, title, updatedAt} = list
        return {
          _id,
          boardId,
          createdAt,
          position,
          title,
          updatedAt
        }
      });
    }
    default:
      return state;
  }
}
