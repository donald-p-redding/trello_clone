import { React, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../actions/BoardActions";
import Lists from '../list components/Lists';

const SingleBoardView = () => {
  const { id } = useParams()
  const { boards } = useSelector(state => state);
  const board = boards.find(b => b._id === id)

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(actions.fetchSingleBoard(id))
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
      <Lists />
    </>
  )
}

export default SingleBoardView;