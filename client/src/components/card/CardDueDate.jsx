import { React } from 'react'
import dueClass from "../../lib/utils/dueClass.js"
import dueDateStr from "../../lib/utils/dueDateStr.js"



const CardDueDate = ({ card }) => {
  return (
    <li className="due-date-section">
    <h3>Due Date</h3>
    <div id="dueDateDisplay" className="overdue completed">
      <input
        id="dueDateCheckbox"
        type="checkbox"
        className="checkbox"
        checked=""
      />
      {`${dueDateStr(card)}`} <span>{`${dueClass(card)}`}</span>
    </div>
  </li>
  )
}

export default CardDueDate