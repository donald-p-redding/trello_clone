import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

const SingleBoardView = () => {
  const { id } = useParams()
  const [ board, setBoard ] = useState({});

  useEffect(() => {
    const boardData = async () => {
      const { data } = await axios.get(`/api/boards/${id}`);
      setBoard(data);
      return data;
    }
  })

  console.log(board);
 /*
    Fetch the specific board --> localhost:5000/api/boards/:id
    -- keep local state
    -- redux
  */
  return (
    <>
      <header>
        <ul>
          <li id="title">My Title</li>
          <li className="star-icon icon"></li>
          <li className="private private-icon icon">Private</li>
        </ul>
        <div className="menu">
          <i className="more-icon sm-icon"></i>Show Menu
        </div>
        <div className="subscribed">
          <i className="sub-icon sm-icon"></i>Subscribed
        </div>
      </header>
    </>
  )
}

export default SingleBoardView;