import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [tip, setTip] = useState({
    title: "",
    description: "",
    tag: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setTip(prevTip => {
      return {
        ...prevTip,
        [name]: value
      };
    });
  }

  function submitTip(event) {
    props.onAdd(tip);
    setTip({
      title: "",
      description: "",
      tag: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-tip">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={tip.title}
            placeholder="Add a reading title"
          />
        )}

        <textarea
          name="description"
          onClick={expand}
          onChange={handleChange}
          value={tip.description}
          placeholder="Add a reading tip ..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitTip}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
