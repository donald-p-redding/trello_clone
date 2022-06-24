import { React } from 'react'

const CardDescriptionEditFrom= ({ toggle, description }) => {
  return (
    <>
      <textarea className="textarea-toggle" rows="1" autoFocus>
        {description}
      </textarea>
      <div>
        <div className="button" value="Save">
          Save
        </div>
        <i onClick={() => toggle(false)} className="x-icon icon"></i>
      </div>
    </>
  )
}

export default CardDescriptionEditFrom