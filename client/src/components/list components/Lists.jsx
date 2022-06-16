import React from "react";
import { useSelector } from "react-redux";

const Lists = () => {
  const { lists } = useSelector(state => state);
  console.log(lists)

  return (
    <>
      <div id="list-container" className="list-container">
        <div id="existing-lists" className="existing-lists">
        </div>
      </div> 
    </>
  )
}

export default Lists