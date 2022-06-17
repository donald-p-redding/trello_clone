import { React, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import Lists from '../list_components/Lists';
import { fetchBoard } from "../../features/boards";

const SingleBoardView = () => {
  const { id } = useParams()
  const { boards } = useSelector(state => state);
  const board = boards.find(b => b._id === id)

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchBoard(id));
  }, [dispatch])

  if(board === undefined) {  // boards resets to [] on a referesh
    return null
  }

  return (
    <>
      <header>
        <ul>
          <li id="title">{board.title}</li>
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

export default SingleBoardView;