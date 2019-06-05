import React from 'react'
import QuizOffline from '../components/QuizOffline'
import { connect } from 'react-redux'
import quizzes from '../questions/quizzes'
import NextHead from 'next/head'

const Start = props => {
  const name = props.name
  return (
    <>
      <NextHead>
        <title>{name} Quiz</title>
      </NextHead>
      <QuizOffline questions={quizzes[name]} />
    </>
  )
}

const mapStateToProps = (state, props) => {
  return {
    ...props,
    name: state.qname,
  }
}

export default connect(
  mapStateToProps,
  () => ({}),
)(Start)
