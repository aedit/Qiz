// pages/_app.js
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import store from '../store'
import withFirebaseAuth from 'react-with-firebase-auth'

//firebase
import { providers, firebaseAppAuth } from '../firebaseConfig'
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}
    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props
    const {
      user,
      signOut,
      signInWithGoogle,
      signInWithEmailAndPassword,
      createUserWithEmailAndPassword,
    } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component
            {...pageProps}
            user={user}
            signOut={signOut}
            signInWithGoogle={signInWithGoogle}
            signInWithEmailAndPassword={signInWithEmailAndPassword}
            createUserWithEmailAndPassword={createUserWithEmailAndPassword}
          />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(() => store)(
  withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(MyApp),
)
