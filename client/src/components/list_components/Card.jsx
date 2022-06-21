import React from "react"
import dueClass from "../../lib/utils/dueClass"
import dueDateStr from "../../lib/utils/dueDateStr"

const Card = ({ card }) => {
  const { labels } = card
  const labelsToRender = labels.map(label => {
    return <div key={label} className={`card-label ${label} colorblindable`} />
  })

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
          <i className={`clock-icon sm-icon ${dueClass(card)}`}>{dueDateStr(card)}</i>
        </div>
      </div>
    </div>
  )
}

export default Card