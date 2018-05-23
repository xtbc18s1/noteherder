import React from 'react'

import './NoteForm.css'

const NoteForm = ({ currentNote, setCurrentNote }) => {
  const handleChanges = (ev) => {
    const note = {...currentNote}
    note[ev.target.name] = ev.target.value
    setCurrentNote(note)
  }

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
            onChange={handleChanges}
          />
        </p>

        <textarea
          name="body"
          value={currentNote.body}
          onChange={handleChanges}
        ></textarea>
      </form>
    </div>
  )
}

export default NoteForm
