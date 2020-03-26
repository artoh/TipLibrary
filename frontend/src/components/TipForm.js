import React, { useState } from "react";

import TextField from '@material-ui/core/TextField';
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

import Tags from "./Tags"

const TipForm = (props) => {
  const [isExpanded, setExpanded] = useState(false);

  const [tip, setTip] = useState({
    title: "",
    link: "",
    description: "",
    tags: []
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

  const addTags = input => {
    const newTags = tip.tags.concat(input.split(","))
    const editedTip = {
      ...tip,
      tags: newTags
    }
    setTip(editedTip)
  }

  const deleteTag = tag => {
    const editedTags = tip.tags.filter(t => t !== tag)
    const editedTip = {
      ...tip,
      tags: editedTags
    }
    setTip(editedTip)
  }

  const submitTip = (event) => {
    props.onAdd(tip);
    setTip({
      title: "",
      link: "",
      description: "",
      tags: []
    });
    event.preventDefault();
    setExpanded(false);
  }

  const expand = () => {
    setExpanded(true);
  }

  return (
    <div>
      <form className="tipform">
        <h3>Add a new tip</h3>

        <TextField
          name="title"
          label="Title"
          variant="outlined"
          margin="normal"
          fullWidth={true}
          value={tip.title}
          onChange={handleChange}
          onSelect={expand}
          onClick={expand}
        />

        {isExpanded &&
          <TextField
            name="link"
            label="Link"
            variant="outlined"
            margin="normal"
            fullWidth={true}
            value={tip.link}
            onChange={handleChange}
          />
        }

        {isExpanded &&
          <TextField
            name="description"
            label="Description"
            variant="outlined"
            margin="normal"
            fullWidth={true}  
            multiline
            value={tip.description}
            onChange={handleChange}
          />
        }

        {isExpanded &&
          <Tags
            name="tags"
            tags={tip.tags}
            onAdd={addTags}
            onDelete={deleteTag}
            editable={true}
          />
        }

        {isExpanded &&
          <Fab name="create" className="formbutton" onClick={submitTip}>
            <AddIcon />
          </Fab>
        }

      </form>
    </div>
  );
}

export default TipForm;
