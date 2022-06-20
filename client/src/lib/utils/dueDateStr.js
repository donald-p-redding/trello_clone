import { MONTH_NUM_TO_STR } from "../../constants/Time"


const dueDateStr = (card) => {
  const dueDateObj = new Date(card.dueDate)
  const dueMonth = MONTH_NUM_TO_STR[dueDateObj.getMonth()]
  const dueDateStr = dueDateObj.getDate()

  return `${dueMonth} ${dueDateStr}`
}

export default dueDateStr