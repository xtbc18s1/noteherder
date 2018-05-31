import React from 'react'
import { Route, Switch } from 'react-router-dom'

import base from './base'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      notes: [],
    }
  }

  componentWillMount() {
    base.syncState(`notes/${this.props.uid}`, {
      context: this,
      state: 'notes',
      asArray: true,
    })
  }

  saveNote = (note) => {
    let shouldRedirect = false
    const timestamp = Date.now()
    note.updatedAt = timestamp

    const notes = [...this.state.notes]

    if (!note.id) {
      // new note
      note.id = timestamp
      notes.push(note)
      shouldRedirect = true
    } else {
      // existing note
      const i = notes.findIndex(currentNote => currentNote.id === note.id)
      notes[i] = note
    }

    notes.sort((a, b) => {
      return b.updatedAt - a.updatedAt
    })

    this.setState({ notes })

    if (shouldRedirect) {
      this.props.history.push(`/notes/${note.id}`)
    }
}

  removeNote = (currentNote) => {
    const notes = [...this.state.notes]

    const i = notes.findIndex(note => note.id === currentNote.id)
    if (i > -1) {
      notes.splice(i, 1)
      this.setState({ notes })
      this.props.history.push('/notes')
    }
  }

  render() {
    const formProps = {
      saveNote: this.saveNote,
      removeNote: this.removeNote,
      notes: this.state.notes,
    }

    return (
      <div className="Main" style={style}>
        <Sidebar signOut={this.props.signOut} />
        <NoteList notes={this.state.notes} />

        <Switch>
          <Route
            path="/notes/:id"
            render={navProps => (
              <NoteForm
                {...formProps}
                {...navProps}
              />
            )}
          />
          <Route
            render={navProps => (
              <NoteForm
                {...formProps}
                {...navProps}
              />
            )}
          />
        </Switch>
      </div>
    )
  }
}

const style = {
  display: 'flex',
  height: '100vh',
  alignItems: 'stretch',
}

export default Main
