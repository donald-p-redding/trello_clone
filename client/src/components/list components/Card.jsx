import React from "react";
import { MS_PER_DAY, MONTH_NUM_TO_STR } from "../../constants/Time";

const Card = ({ card }) => { 
  const { labels, dueDate } = card
  const labelsToRender = labels.map(label => {
    return <div key={label} className={`card-label ${label} colorblindable`} />
  })

  const dueDateObj = new Date(dueDate)
  const dueMonth = MONTH_NUM_TO_STR[dueDateObj.getMonth()]
  const dueDateStr = dueDateObj.getDate();

  const cardDueDateMiliseconds = Date.parse(dueDate)
  const todayMiliseconds = Date.now()
  const diff = todayMiliseconds - cardDueDateMiliseconds;

  let dueDateIcon;

  if(diff < 0) {
    //need add. logic to account for completed cards
    dueDateIcon = <i className="clock-icon sm-icon overdue ">{`${dueMonth} ${dueDateStr}`}</i>
  } else {
    const daysUntil = diff / MS_PER_DAY;
    if(daysUntil > 7) {
      dueDateIcon = <i className="clock-icon sm-icon overdue-recent ">{`${dueMonth} ${dueDateStr}`}</i>
    } else {
      dueDateIcon = <i className="clock-icon sm-icon due-soon ">{`${dueMonth} ${dueDateStr}`}</i>
    }
  }
 

  return (
    <div className="card-background">
      <div className="card ">
        <i className="edit-toggle edit-icon sm-icon"></i>
        <div className="cover-image"></div>
        <div className="card-info">
          {labelsToRender}
          <p>
            {card.title}
          </p>
        </div>
        <div className="card-icons">
          {dueDateIcon}
        </div>
      </div>
    </div>
  )
};

export default Card;