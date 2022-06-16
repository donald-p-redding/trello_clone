import React from "react";
import { useSelector } from "react-redux";
import List from "./List";

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
      </div> 
    </>
  )
}

export default Lists