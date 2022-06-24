import { React, useState } from 'react'

const CardDescriptionEditFrom= ({ toggle, description }) => {
  const [ desc, setDesc ] = useState(description)
  
  return (
    <>
      <textarea 
        className="textarea-toggle" 
        rows="1" 
        autoFocus 
        onChange={(e) => setDesc(e.target.value)} 
        value={desc} 
      >
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