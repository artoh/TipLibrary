import React, { useState } from "react"
import Chip from "@material-ui/core/Chip"
import IconButton from "@material-ui/core/IconButton"
import AddCircleIcon from "@material-ui/icons/AddCircle"
import FormControl from "@material-ui/core/FormControl"
import { TextField } from "@material-ui/core"
import InputAdornment from "@material-ui/core/InputAdornment"

const Tags = props => {
  const [newTag, setNewTag] = useState("")

  const handleAdd = () => {
    props.onAdd(newTag)
    setNewTag("")
  }

  const handleDelete = tag => {
    props.onDelete(tag)
  }

  return (
    <div className="tags">
      {!props.editable &&
        props.tags.map(tag => (
          <Chip variant="outlined" size="small" label={tag} key={tag} />
        ))}
      {props.editable && (
        <FormControl>
          <TextField
            label="Add tags"
            placeholder="Add a tag and click +"
            value={newTag}
            name="newtag"
            variant="outlined"
            fullWidth={true}
            onChange={e => setNewTag(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleAdd} name="addtag">
                    <AddCircleIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </FormControl>
      )}
      {props.editable &&
        props.tags.map(tag => (
          <Chip
            variant="outlined"
            key={tag}
            label={tag}
            id={"deletetag-" + tag}
            onDelete={() => handleDelete(tag)}
          />
        ))}
    </div>
  )
}

export default Tags
