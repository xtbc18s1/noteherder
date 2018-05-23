import React from 'react'

import './NoteList.css'

const NoteList = () => {
  return (
    <div className="NoteList">
          <h3>Notes</h3>
          <ul id="notes">
            <a className="active">
              <li>
                <div className="note">
                  <div className="note-title">
                    Kohlrabi welsh
                  </div>
                  <div className="note-body">
                    <p>
                      Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
                    </p>
                  </div>
                </div>
              </li>
            </a>
          </ul>
        </div>
  )
}

export default NoteList
