import { React } from "react";

const CardTitle = ({ title }) => {
  return(
    <textarea className="list-title" style={{ height: "45px" }} value={title} />
  )
}

export default CardTitle;