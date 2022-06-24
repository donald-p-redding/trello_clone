import React from 'react'

const CardLabels = ({ labels }) => {

  return (
    <li className="labels-section">
      <h3>Labels</h3>
      {labels.map(color => {
        return (
          <div key={color} className="member-container">
          <div className={`${color} label colorblindable`}></div>
          </div>
        )
      })}
                  
      <div className="member-container">
        <i className="plus-icon sm-icon"></i>
      </div>
    </li>
  )
}

export default CardLabels