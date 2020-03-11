import React, { useState } from 'react';
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
    db.create(newTip);
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

const TipForm = ({ createTip, newTitle, newLink, handleLinkChange, handleTitleChange }) => {

  return (
    <div>
      <h3>New tip</h3>
      <form onSubmit={createTip}>
        <div>
          Title: <input value={newTitle} onChange={handleTitleChange} />
        </div>
        <div>
          Link: <input value={newLink} onChange={handleLinkChange} />
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  )
}

export default App;
  