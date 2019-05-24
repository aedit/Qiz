import React from 'react'
import QuizOffline from '../components/QuizOffline'
import { connect } from 'react-redux'
import quizzes from '../questions/quizzes'
import NextHead from 'next/head'

class Start extends React.Component {
  static getInitialProps({ store }) {
    return { name: store.getState().qname }
  }
  render() {
    const name = this.props.name
    return (
      <>
        <NextHead>
          <title>{name} Quiz</title>
        </NextHead>
        <QuizOffline questions={quizzes[name]} />
      </>
    )
  }
}

export default connect()(Start)
