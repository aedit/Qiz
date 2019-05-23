import React from 'react'
import Link from 'next/link'
import store from '../store'
import { SET_NAME } from '../actions'
import Layout from '../components/Layout'

const Quiz = () => {
  return (
    <Layout>
      <h1 className="title">Select a Qiz</h1>
      <div className="row">
        <Link href="/start">
          <a
            className="card"
            onClick={() =>
              store.dispatch({ type: SET_NAME, payload: 'python' })
            }>
            <h3>Play Python &rarr;</h3>
            <p>Let's test your skills in python</p>
          </a>
        </Link>
        <Link as="/start/cpp" href="/start?name=cpp">
          <a className="card">
            <h3>Play C++ &rarr;</h3>
            <p>Let's test your skills in C++</p>
          </a>
        </Link>
        <Link as="/start/quiz1" href="/start/quiz1ame=one">
          <a className="card">
            <h3>Play Quiz1 &rarr;</h3>
            <p>Let's test your scores on various platforms</p>
          </a>
        </Link>
        <Link as="/start/quiz1" href="/start/quiz1ame=one">
          <a className="card">
            <h3>Play Quiz1 &rarr;</h3>
            <p>Let's test your scores on various platforms</p>
          </a>
        </Link>
        <Link as="/start/quiz1" href="/start/quiz1ame=one">
          <a className="card">
            <h3>Play Quiz1 &rarr;</h3>
            <p>Let's test your scores on various platforms</p>
          </a>
        </Link>
        <Link as="/start/quiz1" href="/start/quiz1ame=one">
          <a className="card">
            <h3>Play Quiz1 &rarr;</h3>
            <p>Let's test your scores on various platforms</p>
          </a>
        </Link>
        <Link as="/start/quiz1" href="/start/quiz1ame=one">
          <a className="card">
            <h3>Play Quiz1 &rarr;</h3>
            <p>Let's test your scores on various platforms</p>
          </a>
        </Link>
      </div>
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
