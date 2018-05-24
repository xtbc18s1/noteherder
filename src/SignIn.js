import React from 'react'

const SignIn = ({ handleAuth }) => {
  return (
    <div className="SignIn">
      <header className="Header">
        <img src="media/quill.svg" alt="" />
        <span className="title">Noteherder</span>
      </header>
      <main>
        <h3>Hey, Nerd! You Like Notes?</h3>
        <p>You never know when you'll need to write crap down. In fact, you should probably be taking notes right now.</p>
        <button
          className="github"
          onClick={handleAuth}
        >
          <i className="fa fa-github"></i>
          Sign in with GitHub
        </button>
        <button className="google">
          <img src="media/google.svg" alt="" />
          Sign in with Google
        </button>
      </main>
    </div>
  )
}

export default SignIn
