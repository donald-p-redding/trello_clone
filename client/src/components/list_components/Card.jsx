import React from "react"
import dueClass from "../../lib/utils/dueClass"
import dueDateStr from "../../lib/utils/dueDateStr"
import { Link } from "react-router-dom"

const Card = ({ card }) => {
  const { labels } = card
  const labelsToRender = labels.map(label => {
    return <div key={label} className={`card-label ${label} colorblindable`} />
  })

  return (
    <div className="card-background">
      <Link to={`/cards/${card._id}`}>
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
      </Link>
    </div>
  )
}

export default Card