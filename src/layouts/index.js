import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
import Typography from 'typography'
import moragaTheme from 'typography-theme-moraga'

const typography = new Typography(moragaTheme)

// Output CSS as string.
typography.toString()

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles()

import Headroom from 'react-headroom';
import logo from './logo.svg';

const Header = () => (
  <Headroom style={{
    background: 'grey'
  }}>
    <h1>
      <Link
        to="/"
        style={{
          color: 'blue',
          textDecoration: 'none',
        }}
      >
        <img src={logo} alt="Logo" />
      </Link>
    </h1>
  </Headroom>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
