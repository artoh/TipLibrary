import React, { useState } from 'react';
import TipForm from "./components/TipForm";
import db from './services/tips';

function App() {

  const [newTitle, setNewTitle] = useState('')
  const [newLink, setNewLink] = useState('')

  const createTip = (event) => {
    event.preventDefault();
    let newTip = {
      title: newTitle,
      link: newLink
    };
    let response = db.create(newTip);
    console.log(response)
  }

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  }

  const handleLinkChange = (event) => {
    setNewLink(event.target.value);
  }

  return (
    <div>
      <h1> Tip Library</h1>
      <TipForm createTip={createTip} newTitle={newTitle} newLink={newLink} 
      handleLinkChange={handleLinkChange} handleTitleChange={handleTitleChange} />
      <p>Tip list here</p>
    </div>
  )
}

export default App;
  