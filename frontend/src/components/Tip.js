import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import EditIcon from "@material-ui/icons/Edit";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete"
import { Fab } from "@material-ui/core";

import Tags from "./Tags"

const TipState = {
  NODETAILS: 0,
  DETAILS: 1,
  EDIT: 2
};

const Tip = props => {
  const [tipState, setTipState] = useState(TipState.NODETAILS)
  const [title, setTitle] = useState(props.tip.title)
  const [link, setLink] = useState(props.tip.link)
  const [description, setDescription] = useState(props.tip.description)
  const [tags, setTags] = useState(props.tip.tags === undefined ? [] : props.tip.tags)

  const cancel = () => {
    setTitle(props.tip.title);
    setLink(props.tip.link)
    setDescription(props.tip.description)
    setTipState(TipState.NODETAILS);
  };

  const save = () => {
    props.onUpdate(props.tip.id, { title: title, link: link, description: description, tags: tags });
    setTipState(TipState.NODETAILS);
  };

  const addTag = (tag) => {
    setTags(tags.concat(tag))
  }

  const deleteTag = (tag) => {
    setTags(tags.filter(t => t !== tag))
  }

  return (
    <div className="tip" id={props.tip.id}>
      {tipState !== TipState.EDIT && <h1>{title}</h1>}
      {tipState === TipState.EDIT && (
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          margin="normal"
          value={title}
          onChange={e => setTitle(e.target.value)}
          fullWidth={true}
        />
      )}

      {tipState !== TipState.EDIT && <a href={link}>{link}</a>}
      {tipState === TipState.EDIT && (
        <TextField
          id="editLink"
          name="link"
          variant="outlined"
          label="Link"
          margin="normal"
          value={link}
          onChange={e => setLink(e.target.value)}
          fullWidth={true}
        />
      )}

      {tipState === TipState.DETAILS && <p class="description">{description}</p>}
      {tipState === TipState.EDIT && (
        <TextField
          id="editDescription"
          name="description"
          variant="outlined"
          label="Description"
          margin="normal"
          fullWidth={true}
          multiline
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      )}     

      {tipState !== TipState.NODETAILS && <Tags tags={tags} onAdd={addTag}  onDelete={deleteTag} editable={tipState ===  TipState.EDIT}/>}

      {tipState !== TipState.EDIT && (
        <Fab name="edit" className="tipbutton" onClick={() => setTipState(TipState.EDIT)}>
          <EditIcon />
        </Fab>
      )}
      {tipState === TipState.EDIT && (
        <Fab name="cancel" className="tipbutton" onClick={cancel}>
          <CloseIcon />
        </Fab>
      )}

      {tipState === TipState.NODETAILS && (
        <Fab name="details" className="tipbutton" onClick={() => setTipState(TipState.DETAILS)}>
          <MoreHorizIcon />
        </Fab>
      )}
      {tipState === TipState.DETAILS && (
        <Fab name="nodetails" className="tipbutton" onClick={() => setTipState(TipState.NODETAILS)}>
          <CloseIcon />
        </Fab>
      )}
      {tipState === TipState.EDIT && (
        <Fab name="save" className="tipbutton" onClick={save}>
          <DoneIcon />
        </Fab>
      )}
      <Fab name="delete" className="tipbutton" onClick={() => props.onDelete(props.tip.onClickid)}>
        <DeleteIcon />
      </Fab>
    </div>
  );
};

export default Tip;
