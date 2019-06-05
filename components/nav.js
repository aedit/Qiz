import React from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'

const links = [
  { href: 'https://github.com/aedit/Qiz', label: 'Github' },
  { href: '/about', label: 'About' },
  { href: '/profile', label: 'Login' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link prefetch href="/">
              <a>Home</a>
            </Link>
          </li>
          <ul>
            {links.map(({ key, href, label }) => (
              <li key={key}>
                <Link prefetch href={href}>
                  <a className={label}>
                    {label === 'Login'
                      ? this.props.userName
                        ? this.props.userName
                        : 'Login'
                      : label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </ul>

        <style jsx>{`
          :global(body) {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
              Helvetica, sans-serif;
          }
          nav {
            text-align: center;
            font-size: 1.1em;
            box-shadow: 0 4px 5px rgba(0, 0, 0, 0.4);
          }
          ul {
            display: flex;
            justify-content: space-between;
          }
          nav > ul {
            padding: 4px 16px;
          }
          li {
            display: flex;
            padding: 6px 8px;
          }
          a {
            color: #067df7;
            text-decoration: none;
          }

          a.Login {
            padding: 0.1em 0.6em;
            border-radius: 4px;
            background: #067df7;
            color: white;
          }
        `}</style>
      </nav>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    ...props,
    userName: state.userName,
  }
}

export default connect(
  mapStateToProps,
  () => ({}),
)(Nav)
