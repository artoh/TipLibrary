import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

const TipForm = (props) => {
  const [isExpanded, setExpanded] = useState(false);

  const [tip, setTip] = useState({
    title: "",
    link: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setTip(prevTip => {
      return {
        ...prevTip,
        [name]: value
      };
    });
  }

  const submitTip = (event) => {
    props.onAdd(tip);
    setTip({
      title: "",
      link: ""
    });
    event.preventDefault();
    setExpanded(false);
  }

  const expand = () => {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-tip">
        <h3>Add a new tip</h3>

        <TextField
          name="title"
          variant="outlined"
          label="Title"
          margin="normal"
          fullWidth={true}
          onChange={handleChange}
          onSelect={expand}
          onClick={expand}
          value={tip.title}
        />

        {isExpanded &&
          <TextField
            name="link"
            variant="outlined"
            label="Link"
            margin="normal"
            fullWidth={true}
            onChange={handleChange}
            value={tip.link}
          />
        }

        {isExpanded &&
          <Fab name="create" onClick={submitTip}>
            <AddIcon />
          </Fab>
        }

      </form>
    </div>
  );
}

export default TipForm;
