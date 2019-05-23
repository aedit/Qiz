import React from 'react'
import Link from 'next/link'
import store from '../store'
import actions from '../actions'
import Layout from '../components/Layout'

const Quiz = () => {
  return (
    <Layout>
      <h1 className="title">Login via.</h1>
      <div className="row" />
      <style jsx>{`
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          width: 100%;
          margin: 80px auto 40px;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          grid-gap: 10px;
          justify-items: center;
          align-content: center;
          padding: 10px;
        }
        .card {
          padding: 18px 18px 24px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </Layout>
  )
}

export default Quiz
