import React from 'react';

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
  };
  
  export default TipForm;