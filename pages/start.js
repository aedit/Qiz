import React from 'react'
import QuizOnline from '../components/QuizOnline'
import QuizOffline from '../components/QuizOffline'
import pyQuestions from '../components/python'
import { withRouter } from 'next/router'

const Start = props => {
  const name = props.router.query.name
  return (
      <QuizOffline questions={pyQuestions} />
  )
}

export default withRouter(Start)
