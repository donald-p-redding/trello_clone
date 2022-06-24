import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Lists from '../list_components/Lists';
import { fetchBoard } from "../../features/boards";
import { useLocation } from "react-router-dom";

const Board = () => {
  const { pathname } = useLocation();
  let id;
  const pathSections = pathname.split("/")

  const { boards, cards } = useSelector(state => state);
  const board = boards.find(b => b._id === id)
  
  if(pathname.includes("boards")) {
    id = pathSections[pathSections.length - 1]
  } else {
    id = cards[0]?.boardId
  }

  const dispatch = useDispatch();

  useEffect(() => {
    if(id) {
      dispatch(fetchBoard(id));
      /*
        Do react versions dictate the ES syntax available
          
      */
    }
  }, [dispatch,id])

  return (
    <>
      <header>
        <ul>
          <li id="title">{board?.title}</li>
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
      <main>
        <Lists />
      </main>
    </>
  )
}

export default Board;