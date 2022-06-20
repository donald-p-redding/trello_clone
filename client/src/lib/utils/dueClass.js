import { MS_PER_DAY } from "../../constants/Time"

const dueClass = (card) => {
  const cardDueDateMiliseconds = Date.parse(card.dueDate)
  const todayMiliseconds = Date.now()
  const diff = todayMiliseconds - cardDueDateMiliseconds

  if(diff < 0) {
    //need add. logic to account for completed cards
    return `overdue`
  } else {
    const daysUntil = diff / MS_PER_DAY
    
    if(daysUntil > 7) {
      return  `overdue-recent`
    } else {
      return `due-soon`
    }
  }  
}

export default dueClass