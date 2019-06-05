import React, { useState, useEffect } from 'react'
import { Offline, Online } from 'react-detect-offline'
import { Swipeable, defineSwipe } from 'react-touch'
import QuizOnline from './QuizOnline'
import Link from 'next/link'
import store from '../store'
import { SET_ANSWERS } from '../actions'
import quizzes from '../questions/quizzes'

const swipe = defineSwipe({ swipeDistance: 50 })

// Hook
function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false)

  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true)
    }
  }

  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false)
    }
  }

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return keyPressed
}

export default ({ questions }) => {
  const [currQues, updateCurrQues] = React.useState(-2)
  const [currSelected, updateCurrSelected] = React.useState('')
  const [answerList, updateAnswerList] = React.useState(questions.map(e => ''))
  const [cheat, didCheat] = React.useState(false)
  const isleft = useKeyPress('ArrowLeft')
  const isright = useKeyPress('ArrowRight')
  React.useEffect(() => {
    if (isleft) prev()
    else if (isright) next()
  }, [isleft, isright])

  const next = () => {
    updateAnswerList(al => {
      const newal = [...al]
      newal[currQues === -2 ? 0 : currQues] = currSelected
      return newal
    })
    if (currQues < questions.length - 1) {
      if (currQues === -2) updateCurrQues(0)
      if (currQues === -1) return
      updateCurrQues(cq => cq + 1)
      if (currQues !== questions.length - 1)
        updateCurrSelected(answerList[currQues + 1])
    } else updateCurrQues(-1)
  }

  const prev = () => {
    if (currQues > 0) {
      updateAnswerList(al => {
        const newal = [...al]
        newal[currQues === -2 ? 0 : currQues] = currSelected
        return newal
      })
      updateCurrSelected(answerList[currQues - 1])
      updateCurrQues(cq => cq - 1)
    }
  }

  const ques = questions[currQues === -2 ? 0 : currQues]

  const goto = () => {
    updateCurrSelected(answerList[0])
    updateCurrQues(0)
  }

  const handleChange = i => {
    updateCurrSelected(i)
  }

  useEffect(() => {
    store.dispatch({
      type: SET_ANSWERS,
      payload: {
        userAns: answerList,
        correctAns: [...quizzes[store.getState().qname].map(e => e.answer)],
      },
    })
  }, [answerList])

  return (
    <>
      <Online polling={false}>
        {currQues === -1 ? (
          cheat ? (
            <div className="container">
              <Link href="/cheat">
                <a className="card">Submit</a>
              </Link>
            </div>
          ) : (
            <div className="container">
              <Link href="/Submit">
                <a className="card">Submit</a>
              </Link>
            </div>
          )
        ) : (
          <QuizOnline
            testRunning={currQues > -1}
            didCheat={() => didCheat(true)}
          />
        )}
      </Online>
      <Offline polling={false}>
        {currQues === -1 ? (
          <div className="container">
            <h1>Your test has ended!</h1>
            <div className="notif">
              <p>Go Online to Submit!</p>
              <button onClick={() => goto(0)}>Review</button>
            </div>
          </div>
        ) : (
          <Swipeable config={swipe} onSwipeLeft={next} onSwipeRight={prev}>
            <div className="container">
              <strong>{ques.question}</strong>
              <div className="options">
                <label className={currSelected === 'a' ? 'focus' : ''}>
                  <input
                    onChange={() => handleChange('a')}
                    type="radio"
                    name="option"
                    checked={currSelected === 'a'}
                  />
                  {ques.a}
                </label>
                <label className={currSelected === 'b' ? 'focus' : ''}>
                  <input
                    onChange={() => handleChange('b')}
                    type="radio"
                    name="option"
                    checked={currSelected === 'b'}
                  />
                  {ques.b}
                </label>
                <label className={currSelected === 'c' ? 'focus' : ''}>
                  <input
                    onChange={() => handleChange('c')}
                    type="radio"
                    name="option"
                    checked={currSelected === 'c'}
                  />
                  {ques.c}
                </label>
                <label className={currSelected === 'd' ? 'focus' : ''}>
                  <input
                    onChange={() => handleChange('d')}
                    type="radio"
                    name="option"
                    checked={currSelected === 'd'}
                  />
                  {ques.d}
                </label>
              </div>
            </div>
          </Swipeable>
        )}
      </Offline>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          height: 80vh;
          font-family: Helvetica;
          padding: 10px;
          font-size: 1.2em;
        }
        .notif {
          display: flex;
          flex-direction: column;
        }
        .notif p,
        .notif button {
          font-size: 1.2em;
          text-align: center;
        }
        .options {
          display: grid;
          grid-gap: 5px;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          width: 100%;
          margin: 10px;
        }
        input[type='radio'] {
          display: none;
        }

        label {
          width: auto;
          text-align: center;
          border: 2px solid currentColor;
          padding: 18px 18px 24px;
          color: #067df7;
          font-weight: bold;
          margin: 0;
          cursor: pointer;
        }
        .focus {
          background: #067fd7;
          color: white;
          border-color: #067fd7;
        }
        strong {
          font-size: 2em;
        }
        .card {
          padding: 18px 18px 24px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
      `}</style>
    </>
  )
}
