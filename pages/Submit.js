import React from 'react'
import { connect } from 'react-redux'
import Nav from '../components/nav'

class Submit extends React.Component {
  render() {
    const { userAns, correctAns } = this.props
    const score = userAns.filter((e, i) => e === correctAns[i]).length
    return (
      <>
        <Nav />
        <div className="container">
          <h2>Answers: </h2>
          <div className="row">
            {userAns.map((ans, i) => (
              <div
                key={i + ans}
                className={`card ${
                  ans === correctAns[i] ? 'correct' : 'wrong'
                }`}>
                {ans !== '' ? ans : 'Not Attempted'}
              </div>
            ))}
          </div>
          <p>
            Score: <strong>{score}</strong>
          </p>
        </div>
        <style jsx>{`
          .container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            height: 85vh;
            font-family: Helvetica;
            padding: 10px;
            font-size: 1.2em;
            overflow: hidden;
          }
          .row {
            width: 100%;
            margin: 80px auto 40px;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            grid-gap: 10px;
            padding: 10px;
            grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
            height: 35vh;
            align-content: center;
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
          .card h3 {
            margin: 0;
            color: #067df7;
            font-size: 18px;
          }
          .card p {
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
          }
          .wrong {
            color: tomato;
            border-color: currentColor;
          }
          .correct {
            color: lightgreen;
            border-color: currentColor;
          }
        `}</style>
      </>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    ...props,
    userAns: state.userAns,
    correctAns: state.correctAns,
  }
}

export default connect(
  mapStateToProps,
  () => ({}),
)(Submit)
