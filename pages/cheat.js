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
          <h1>Bhag Bhosdike!</h1>
          <h2>Cheat karega madarchod?</h2>
          <h3>Baap ko chutiya samjha hai?</h3>
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
