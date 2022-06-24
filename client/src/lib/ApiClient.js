import axios from "axios"
import * as routes from "../constants/ApiRoutes"

function logError(errorResponse) {
  const response = errorResponse.response

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`)
  } else {
    console.error("Error: ", errorResponse)
  }
}

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"
axios.defaults.headers.common["Accept"] = "application/json"

const apiClient = {
  getBoards: async () => {
    try {
      const { data } = await axios.get(routes.BOARDS_INDEX_URL)
      return data
    } catch (e) {
      logError(e)
    }
  },
  getBoard: async(id) => {
    try {
      const { data } = await axios.get(`${routes.BOARDS_INDEX_URL}/${id}`)
      return data
    } catch (e) {
      logError(e)
    }
  },
  createBoard: async (board) => {
    try {
      const { data } = await axios.post(routes.CREATE_BOARD_URL, { board })
      return data
    } catch (e) {
      logError(e)
    }
  },
  createList: async(reqPayload) => {
    try {
      const { data } = await axios.post(routes.LISTS_INDEX_URL, reqPayload)
      return data
    } catch (e) {
      logError(e)
    }
  },

  updateListTitle: async({ id, payload }) => {
    try {
      const { data } = await axios.put(`${routes.LISTS_INDEX_URL}/${id}`, payload)
      return data
    } catch (e) {
      console.log("Error thrown in update list title")
      logError(e)
    }
  },

  getCard: async(id) => {
    try {
      const { data } = await axios.get(`${routes.CARDS_INDEX_URL}/${id}`)
      return data
    } catch(e) {
      console.log("Error thrown in getCard")
      logError(e)
    }
  }
}

export default apiClient
