import React from 'react'
import Head from './head'
import Nav from './nav'

export default ({ children, name }) => (
  <div>
    <Head title="Don't stay online!" />
    <Nav name={name} />
    {children}
    <style jsx global>{`
      html,
      body {
        width: 100%;
        height: 100%;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Google Sans', 'Open Sans', 'sans-serif';
      }
    `}</style>
  </div>
)
