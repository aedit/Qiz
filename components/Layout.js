import React from 'react'
import Head from './head'
import Nav from './nav'

export default ({ children }) => (
  <div>
    <Head title="Don't stay online!" />
    <Nav />
    {children}
    <style global="true">{`
      html, body {
        width: 100%;
        height: 100%;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    `}</style>
  </div>
)
