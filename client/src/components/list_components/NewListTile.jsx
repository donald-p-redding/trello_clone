import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createList } from "../../features/lists";

const NewListTile = () => {
  const [ selected, setSelected ] = useState('')
  const [ title, setTitle ] = useState("")

  const { boards } = useSelector(state => state);
  const { _id:boardId } = boards[0]

  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault();
    setSelected('selected');
  }

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createList({boardId, list: {title}}))
  };

 return (
    <div onClick={handleClick} id="new-list" className={`new-list ${selected}`}>
      <span>Add a list...</span>
      <input onChange={handleChange} type="text" placeholder="Add a list..." value={title} />
      <div>
        <input onClick={handleSubmit} type="submit" className="button" value="Save" />
        <i className="x-icon icon"></i>
      </div>
    </div>
  )
}

export default NewListTile;