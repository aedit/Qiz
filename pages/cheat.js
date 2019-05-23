import React from 'react'
import Layout from '../components/Layout'
import { connect } from 'react-redux'

export default connect(
  state => state,
  () => {},
)(() => (
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
))

const Cheat = () => {
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

// export default Cheat
