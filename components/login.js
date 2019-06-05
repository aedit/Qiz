import React from 'react'
import Layout from './Layout'
import { firebaseAppAuth } from '../firebaseConfig'

class Login extends React.Component {
  state = {
    signIn: true,
  }

  emailRef = React.createRef()
  passwordRef = React.createRef()
  nameRef = React.createRef()

  handleEmailLogin = () => {
    const email = this.emailRef.current.value
    const password = this.passwordRef.current.value
    this.props.signInWithEmailAndPassword(email, password)
  }
  handleEmailSignUp = async () => {
    const name = this.nameRef.current.value
    const email = this.emailRef.current.value
    const password = this.passwordRef.current.value
    await this.props
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = firebaseAppAuth.currentUser
        user.updateProfile({
          displayName: name,
        })
      })
  }

  render() {
    const { props } = this
    return (
      <Layout>
        <h2 className="title">Sign In</h2>
        <div className="row">
          <div className="google">
            <button
              onClick={() => {
                props.signInWithGoogle()
              }}
              className="loginBtn loginBtn--google">
              Login with Google
            </button>
          </div>

          <div className="email">
            {!this.state.signIn && (
              <input type="text" ref={this.nameRef} placeholder="Name" />
            )}
            <input type="email" ref={this.emailRef} placeholder="Email" />
            <input
              type="password"
              ref={this.passwordRef}
              placeholder="Password"
            />
            {this.state.signIn ? (
              <button onClick={this.handleEmailLogin}>Sign In</button>
            ) : (
              <button onClick={this.handleEmailSignUp}>Sign Up</button>
            )}
            <div
              className="signup"
              onClick={() => this.setState(ps => ({ signIn: !ps.signIn }))}>
              {this.state.signIn
                ? 'Not a user? Sign Up'
                : 'Already Registered? Sign In'}
            </div>
          </div>
        </div>
        <style jsx>{`
          .title {
            margin: 0;
            width: 100%;
            padding-top: 40px;
            line-height: 1.15;
            font-size: 38px;
            text-align: center;
          }
          .email button {
            padding: 0.4em 0;
            background: #067df7;
            color: white;
            font-size: 1.2em;
            border: 0.1em solid #067df7;
            border-radius: 5px;
            box-shadow: 0 8px 12px -4px rgba(0, 0, 0, 0.6);
          }
          input {
            padding: 0.4em 0.8em;

            border: none;
            border-bottom: 0.2em solid #a2a2a2;
          }
          input:focus {
            border-bottom: 0.2em solid #067fd7;
            outline: none;
          }
          .row {
            width: 50%;

            height: 400px;

            margin: 20px auto 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 10px;
          }
          .google {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-basis: 50%;
          }
          .email {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            padding: 1em 2em;
            border-radius: 8px;
            box-shadow: 0 8px 12px -10px rgba(0, 0, 0, 0.6);
            flex-basis: 50%;
          }
          .signup {
            text-align: center;
            color: #067df7;
            cursor: pointer;
            border-bottom: 0.2em solid currentColor;
            align-self: center;
          }
          .signup::selection {
            background: white;
            color: #067df7;
          }
          .loginBtn {
            box-sizing: border-box;
            position: relative;
            margin: 0.2em;
            padding: 0 15px 0 46px;
            border: none;
            text-align: left;
            line-height: 34px;
            white-space: nowrap;
            border-radius: 0.2em;
            font-size: 16px;
            color: #fff;
            cursor: pointer;
            background: #dd4b39;
            box-shadow: 0 8px 12px -4px rgba(0, 0, 0, 0.6);
          }
          .loginBtn:before {
            content: '';
            box-sizing: border-box;
            position: absolute;
            top: 0;
            left: 0;
            width: 34px;
            height: 100%;
          }
          .loginBtn:focus {
            outline: none;
          }
          .loginBtn:active {
            box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);
          }

          .loginBtn--google {
            background: #dd4b39;
          }
          .loginBtn--google:before {
            border-right: #bb3f30 1px solid;
            background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png')
              6px 6px no-repeat;
          }
          .loginBtn--google:hover,
          .loginBtn--google:focus {
            background: #e74b37;
          }
        `}</style>
      </Layout>
    )
  }
}

export default Login
