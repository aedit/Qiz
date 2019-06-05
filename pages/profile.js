import React from 'react'
import Layout from '../components/Layout'
import { connect } from 'react-redux'
import store from '../store'
import Login from '../components/login'

const Profile = props => {
  const [loggedin, setLoggedin] = React.useState(props.user ? true : false)
  React.useEffect(() => {
    if (props.user) {
      setLoggedin(true)
      const name = props.user.displayName
        ? props.user.displayName
        : props.user.email
      store.dispatch({ type: 'USER_NAME', payload: name })
    } else {
      setLoggedin(false)
    }
  }, [props.user])
  return !loggedin ? (
    <Login {...props} />
  ) : (
    <Layout>
      <div>
        <h1>This is your profile</h1>
      </div>
      <button
        onClick={() => {
          props.signOut()
          store.dispatch({ type: 'USER_NAME', payload: '' })
        }}>
        SignOut
      </button>
      <style jsx>
        {`
          color: red;
        `}
      </style>
    </Layout>
  )
}

const mapStateToProps = (state, props) => {
  return {
    ...state,
    ...props,
  }
}

export default connect(
  mapStateToProps,
  () => ({}),
)(Profile)
