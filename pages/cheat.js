import React from 'react'
import Layout from '../components/Layout'
import { connect } from 'react-redux'

class Cheat extends React.Component {
  static getInitialProps({ store }) {
    return { ...store.getState() }
  }
  render() {
    return (
      <Layout>
        <div>
          <h1>One should not cheat</h1>
        </div>
        <style jsx>
          {`
            color: red;
          `}
        </style>
      </Layout>
    )
  }
}

export default connect()(Cheat)
