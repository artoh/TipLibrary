import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Tip(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="tip">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{props.tag}</p>
      {/* <button onClick={handleClick}>
        <DeleteIcon />
      </button> */}
    </div>
  );
}

export default Tip;
