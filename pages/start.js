import React from 'react'
import QuizOffline from '../components/QuizOffline'
import { connect } from 'react-redux'
import quizzes from '../questions/quizzes'

class Start extends React.Component {
  static getInitialProps({ store }) {
    return { name: store.getState().qname }
  }
  render() {
    const name = this.props.name
    return <QuizOffline questions={quizzes[name]} />
  }
}

export default connect()(Start)
