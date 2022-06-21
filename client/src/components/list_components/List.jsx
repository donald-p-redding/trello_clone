import { React, useState } from "react"
import Cards from "./Cards"
import { useDispatch } from "react-redux"
import { updateListTitle } from "../../features/lists"

const List = ({list}) => {
  const [ listTitle, setListTitle ] = useState(list.title)
  const [ isEditing, setIsEditing ] = useState(false)

  const dispatch = useDispatch()

  const handleChange = (e) => {
    e.preventDefault()
    setListTitle(e.target.value)
  }

  const updateList = (e) => {
    const id = list._id
    const payload = { title: listTitle }
    e.preventDefault()
    dispatch(updateListTitle({ id, payload, callback: () => {setIsEditing(false)} }))
  }

  return (
      <div className="list-wrapper">
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div>
            {
              isEditing ?
              <input onBlur={updateList} onChange={handleChange} className="list-title" type="text" value={listTitle} autoFocus='true'></input>
              : <p onClick={() => setIsEditing(!isEditing) } className="list-title">{list.title}</p>
            }
          </div>
          <div className="add-dropdown add-top">
            <div className="card"></div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          {/*This is where cards need to go*/}.
          <Cards listId={list._id}/>
          <div className="add-dropdown add-bottom">
            <div className="card">
              <div className="card-info"></div>
              <textarea name="add-card"></textarea>
              <div className="members"></div>
            </div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <div className="add-card-toggle" data-position="bottom">
            Add a card...
          </div>
        </div>
      </div>
    </div>
  )
}

export default List