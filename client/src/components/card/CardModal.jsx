import { React, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCard } from "../../features/cards"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import CardTitle from "./CardTitle"
import CardLabels from "./CardLabels"
import CardDueDate from "./CardDueDate"
import CardDescription from "./CardDescription"
import CardComments from "./CardComments"

const CardModal = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const card = useSelector(state => {
    return state.cards.find(c => c._id === id)
  })
  const list = useSelector(state => {
    return state.lists.find(l => l._id === card?.listId)
  })

  useEffect(() => {
      //in case of page refresh, can rebuild store from single card
      dispatch(fetchCard(id))
  }, [dispatch, id])

  return (
    <div id="modal-container">
      <Link to={`/boards/${card?.boardId}`}>
        <div className="screen"></div>
      </Link>
      <div id="modal">
        <i className="x-icon icon close-modal"></i>
        <header>
          <i className="card-icon icon .close-modal"></i>
          <CardTitle title={card?.title}/>
          <p>
            in list 
            <Link className="link" to={`/boards/${card?.boardId}`}>
              {` ${list?.title}`}
            </Link>
            <i className="sub-icon sm-icon"></i>
          </p>
        </header>
        <section className="modal-main">
          <ul className="modal-outer-list">
            <li className="details-section">
              <ul className="modal-details-list">
              <CardLabels labels={card?.labels}/>
              <CardDueDate card={card}/>
              </ul> 
              <CardDescription description={card?.description}/>
            </li>
              <CardComments comments={card?.comments}/>
            <li className="activity-section">
              <h2 className="activity-icon icon">Activity</h2>
              <ul className="horiz-list">
                <li className="not-implemented">Show Details</li>
              </ul>
              <ul className="modal-activity-list">
                <li>
                  <div className="member-container">
                    <div className="card-member">TP</div>
                  </div>
                  <h3>Taylor Peat</h3>
                  <div className="comment static-comment">
                    <span>The activities are not functional.</span>
                  </div>
                  <small>
                    22 minutes ago - <span className="link">Edit</span> -{" "}
                    <span className="link">Delete</span>
                  </small>
                  <div className="comment">
                    <label>
                      <textarea required="" rows="1" value="The activities have not been implemented yet.">
                      </textarea>
                      <div>
                        <a className="light-button card-icon sm-icon"></a>
                        <a className="light-button smiley-icon sm-icon"></a>
                        <a className="light-button email-icon sm-icon"></a>
                      </div>
                      <div>
                        <p>You haven&apos t typed anything!</p>
                        <input
                          type="submit"
                          className="button not-implemented"
                          value="Save"
                        />
                        <i className="x-icon icon"></i>
                      </div>
                    </label>
                  </div>
                </li>
                <li>
                  <div className="member-container">
                    <div className="card-member small-size">VR</div>
                  </div>
                  <p>
                    <span className="member-name">Victor Reyes</span> changed the
                    background of this board <small>yesterday at 4:53 PM</small>
                  </p>
                </li>
                <li className="activity-comment">
                  <div className="member-container">
                    <div className="card-member">VR</div>
                  </div>
                  <h3>Victor Reyes</h3>
                  <div className="comment static-comment">
                    <span>Example of a comment.</span>
                  </div>
                  <small>
                    22 minutes ago - <span className="link">Edit</span> -{" "}
                    <span className="link">Delete</span>
                  </small>
                  <div className="comment">
                    <label>
                      <textarea required="" rows="1" value="Example of a comment.">
                      </textarea>
                      <div>
                        <a className="light-button card-icon sm-icon"></a>
                        <a className="light-button smiley-icon sm-icon"></a>
                        <a className="light-button email-icon sm-icon"></a>
                      </div>
                      <div>
                        <p>You haven&apos t typed anything!</p>
                        <input
                          type="submit"
                          className="button not-implemented"
                          value="Save"
                        />
                        <i className="x-icon icon"></i>
                      </div>
                    </label>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <aside className="modal-buttons">
          <h2>Add</h2>
          <ul>
            <li className="member-button">
              <i className="person-icon sm-icon"></i>Members
            </li>
            <li className="label-button">
              <i className="label-icon sm-icon"></i>Labels
            </li>
            <li className="checklist-button">
              <i className="checklist-icon sm-icon"></i>Checklist
            </li>
            <li className="date-button not-implemented">
              <i className="clock-icon sm-icon"></i>Due Date
            </li>
            <li className="attachment-button not-implemented">
              <i className="attachment-icon sm-icon"></i>Attachment
            </li>
          </ul>
          <h2>Actions</h2>
          <ul>
            <li className="move-button">
              <i className="forward-icon sm-icon"></i>Move
            </li>
            <li className="copy-button">
              <i className="card-icon sm-icon"></i>Copy
            </li>
            <li className="subscribe-button">
              <i className="sub-icon sm-icon"></i>Subscribe
              <i className="check-icon sm-icon"></i>
            </li>
            <hr />
            <li className="archive-button">
              <i className="file-icon sm-icon "></i>Archive
            </li>
          </ul>
          <ul className="light-list">
            <li className="not-implemented">Share and more...</li>
          </ul>
        </aside>
      </div>
    </div>
  )
}

export default CardModal
