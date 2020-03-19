import React, { useState } from "react";

import TextField from '@material-ui/core/TextField';
import EditIcon from "@material-ui/icons/Edit"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import DoneIcon from "@material-ui/icons/Done"
import CloseIcon from "@material-ui/icons/Close"
import { Fab } from '@material-ui/core';

const TipState = {
    NODETAILS : 0,
    DETAILS : 1,
    EDIT : 2
}

const Tip = (props) => {
    const [tipState, setTipState] = useState(TipState.NODETAILS)
    const [title, setTitle] = useState(props.tip.title)
    const [link, setLink] = useState(props.tip.link)

    const cancel = () => {
        setTitle(props.tip.title)
        setLink(props.tip.link)
        setTipState(TipState.NODETAILS)
    }

    const save = () => {
        props.onUpdate(props.tip.id, { title: title, link: link})
        setTipState(TipState.NODETAILS)
    }

    return (
        <div className="tip">
            { tipState !== TipState.EDIT && <h1>{title}</h1>}
            { tipState === TipState.EDIT && 
                <TextField 
                    name="title" 
                    variant="outlined"
                    label="Title"
                    margin="normal"
                    value={title} 
                    onChange={ e => 
                    setTitle(e.target.value)}/>}
            
            { tipState !== TipState.EDIT && <a href={link}>{link}</a>}
            { tipState === TipState.EDIT && 
                <TextField 
                    name="link" 
                    variant="outlined"
                    label="Link"
                    margin="normal"
                    value={link} 
                    onChange={e => setLink(e.target.value)}/>}

            { tipState !== TipState.EDIT && <Fab name="edit" onClick={() => setTipState(TipState.EDIT)}><EditIcon/></Fab>}
            { tipState === TipState.EDIT && <Fab name="cancel" onClick={cancel}><CloseIcon/></Fab>}

            { tipState === TipState.NODETAILS && <Fab name="details" onClick={() => setTipState(TipState.DETAILS)}><MoreHorizIcon/></Fab>}
            { tipState === TipState.DETAILS && <Fab name="nodetails" onClick={() => setTipState(TipState.NODETAILS)}><CloseIcon/></Fab>}
            { tipState === TipState.EDIT && <Fab name="save" onClick={save}><DoneIcon/></Fab>}
        </div>
    )
}

export default Tip