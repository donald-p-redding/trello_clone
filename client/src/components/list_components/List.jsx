import React from "react";
import Cards from "./Cards";

const List = ({list}) => {
  return (
      <div className="list-wrapper">
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div>
          <input className="list-title" type="text" value={list.title} autoFocus='true'></input>
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
};

/*
                  <div>
                    <input
                      type="text"
                      className="list-title"
                      value="List title during editing"
                      autoFocus="true"
                    />
                  </div>
*/

export default List;