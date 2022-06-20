import React from "react"
import { useSelector } from "react-redux"
import List from "./List"
import NewListTile from "./NewListTile"

const Lists = () => {
  const { lists } = useSelector(state => state);

  const listsContent = lists.map((list) => {
    return <List key={list._id} list={list}/>
  })

  return (
    <>
      <div id="list-container" className="list-container">
        <div id="existing-lists" className="existing-lists">
          {listsContent}
        </div>
        <NewListTile />
      </div> 
    </>
  )
}

export default Lists