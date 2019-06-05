import React from 'react'
import QuizOffline from '../components/QuizOffline'
import { connect } from 'react-redux'
import quizzes from '../questions/quizzes'
import NextHead from 'next/head'

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

const Start = props => {
  const name = props.name
  return (
    <>
      <NextHead>
        <title>{name} Quiz</title>
      </NextHead>
      <QuizOffline questions={shuffle(quizzes[name])} />
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
