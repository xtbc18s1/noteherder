import React, { Component } from 'react'

import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

class Sidebar extends Component {
  state = {
    newIconHovered: false,
  }

  handleMouseEnter() {
    this.setState({ newIconHovered: true })
  }

  handleMouseLeave() {
    this.setState({ newIconHovered: false })
  }

  render() {
    return (
      <nav
        className="Sidebar"
        style={styles.sidebar}
      >
        <div
          className="logo"
          style={styles.logo}
        >
          <img
            src={quill}
            alt="Noteherder"
            style={styles.logoImg}
          />
        </div>
        <a
          className="new-note"
          href="/notes"
          style={styles.newNote}
          onMouseEnter={() => this.handleMouseEnter()}
          onMouseLeave={() => this.handleMouseLeave()}
        >
          <img
            src={newHover}
            alt="New note"
            style={styles.newNoteImg}
          />
          <img
            className="outline"
            src={newIcon}
            alt="New note"
            style={{
              ...styles.newNoteImg,
              opacity: this.state.newIconHovered ? 0 : 1
            }}
          />
        </a>
        <div
          className="SignOut"
          style={styles.signOut}
        >
          <button style={styles.button}>
            <i
              className="fa fa-sign-out"
              style={styles.buttonIcon}
            ></i>
          </button>
        </div>
      </nav>
    )
  }
}

const styles = {
  sidebar: {
    width: '6rem',
    backgroundColor: '#f3f3f3',
    padding: '0.5rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    fontFamily: '"Fauna One"',
    color: '#666',
    fontSize: '3rem',
  },
  logoImg: {
    width: '3rem',
    paddingLeft: '0.4rem',
  },
  newNote: {
    marginTop: '2rem',
    position: 'relative',
    width: '4rem',
  },
  newNoteImg: {
    position: 'absolute',
    left: '0',
    width: '100%',
    transition: 'opacity 0.25s ease-in-out',
  },
  signOut: {
    position: 'absolute',
    bottom: '1rem',
  },
  button: {
    backgroundColor: 'transparent',
    border: '0',
    color: '#008bf8',
    cursor: 'pointer',
    outline: 'none',
  },
  buttonIcon: {
    fontSize: '2rem',
  },
}

export default Sidebar
