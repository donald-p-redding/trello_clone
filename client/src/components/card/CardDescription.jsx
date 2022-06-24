import { React, useState } from "react";
import CardDescriptionEditForm from "./CardDescriptionEditForm";

const CardDescription = ({ description }) => {
  const [ isEditing, setIsEditing ] = useState(false);

  return (
    <form className="description">
      <p>Description</p>
      {
        isEditing ?
        <></>
        : <span onClick={() => setIsEditing(!isEditing)} id="description-edit" className="link">Edit</span>
      }
      {
        isEditing ?
        <CardDescriptionEditForm toggle={setIsEditing} description={description}/>
        : <p className="textarea-overlay">{description}</p>
      }
      <p id="description-edit-options" className="hidden">
        You have unsaved edits on this field.{" "}
        <span className="link">View edits</span> -{" "}
        <span className="link">Discard</span>
      </p>
    </form>
  )
}

export default CardDescription