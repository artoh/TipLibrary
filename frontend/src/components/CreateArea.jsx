import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(true);

  const [tip, setTip] = useState({
    title: "",
    link: "",
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
      link: "",
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
            placeholder="Add a Tip Title"
          />
        )}

        <textarea
          name="link"
          onClick={expand}
          onChange={handleChange}
          value={tip.link}
          placeholder="Add a Tip Link"
          rows={isExpanded ? 1 : 1}
        />

        <textarea
          name="description"
          onClick={expand}
          onChange={handleChange}
          value={tip.description}
          placeholder="Add a Tip Description"
          rows={isExpanded ? 3 : 1}
        />

        <textarea
          name="tag"
          onClick={expand}
          onChange={handleChange}
          value={tip.tag}
          placeholder="Add a Tip Tag"
          rows={isExpanded ? 1 : 1}
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
