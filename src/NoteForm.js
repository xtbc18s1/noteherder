import React from 'react'

import './NoteForm.css'

const NoteForm = ({ currentNote }) => {
  return (
    <div className="NoteForm">
      <div className="form-actions">
        <button type="button">
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
      <form>
        <p>
          <input
            type="text"
            name="title"
            placeholder="Title your note"
            value={currentNote.title}
          />
        </p>

        <textarea
          name="body"
          value={currentNote.body}
        ></textarea>
      </form>
    </div>
  )
}

export default NoteForm
