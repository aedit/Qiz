import React from 'react'
import { Online } from 'react-detect-offline'

export default ({ testRunning, didCheat }) => {
  if (testRunning) {
    didCheat()
  }
  return (
    <Online>
      <div className="container">
        <div>
          <h2>We have been on your side!</h2>
          <h3>It's easy to open a new tab and Google the question!</h3>
          <p>
            You should disconnect from the internet to give the quiz.
            <br />
            And for the numbskulls "<strong>GO OFFLINE</strong>"
          </p>
        </div>
      </div>
      <style jsx>{`
        .container {
          padding: 0 1.5em;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          height: 100vh;
          font-family: Helvetica;
          font-size: 1.3em;
        }
        .container div {
          border: 1px solid #c0c0c0;
          padding: 1em;
          border-radius: 8px;
          background: tomato;
          height: 60vh;
          display: flex;
          justify-content: space-evenly;
          flex-direction: column;
          box-shadow: 0 10px 15px -4px #00000060;
        }
        h2 {
          border-bottom: 0.2em double black;
          padding-bottom: 0.2em;
        }
      `}</style>
    </Online>
  )
}
