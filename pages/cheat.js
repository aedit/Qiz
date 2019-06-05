import React from 'react'
import Layout from '../components/Layout'
import { connect } from 'react-redux'
import { firebaseAppDb } from '../firebaseConfig'

class Cheat extends React.Component {
  componentDidMount() {
    const user = this.props.user
    const quizRef = firebaseAppDb.ref(
      `users/${user.uid}/quiz/${this.props.qname}`,
    )

    quizRef.once('value', snapshot => {
      const quiz = snapshot.val()
      if (quiz) {
        quizRef.update([
          ...quiz,
          {
            cheat: true,
            score: 0,
            time: Date.now().toString(),
          },
        ])
      } else {
        quizRef.set([
          {
            cheat: true,
            score: 0,
            time: Date.now().toString(),
          },
        ])
      }
    })
  }
  render() {
    return (
      <Layout>
        <div>
          <blockquote>
            <p>
              We warned you about this!
              <br />
              All these efforts for what?
              <br />A cheat stain on your certificate?
            </p>

            <footer>- Qiz Surveillance Team</footer>
          </blockquote>
        </div>
        <style jsx>
          {`
            div {
              color: red;
              display: flex;
              justify-content: space-around;
              align-items: center;
              width: 100%;
              height: 100vh;
              flex-direction: column;
            }
            p {
              font-size: 2rem;
            }
            footer {
              text-align: right;
              padding-top: 1em;
            }
          `}
        </style>
      </Layout>
    )
  }
}

const mapStateToProps = (state, props) => ({
  ...state,
  ...props,
})
export default connect(
  mapStateToProps,
  () => ({}),
)(Cheat)
