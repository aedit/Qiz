import React from 'react'
import QuizOffline from '../components/QuizOffline'
import pyQuestions from '../components/python'
import { connect } from 'react-redux'

const quiz = {
  python: [...pyQuestions],
}

class Start extends React.Component {
  static getInitialProps({ store }) {
    return { name: store.getState().name }
  }
  render() {
    const name = this.props.name
    return <QuizOffline questions={quiz[name]} />
  }
}

export default connect()(Start)
