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
import icon from './icon.svg';


const Header = () => (
  <Headroom style={{
    background: 'white',
    height: '65px',
    paddingLeft: '20px',
    paddingRight: '20px',
    borderBottom: '1px solid #f2f2f2',
  }}>
    <div style={{
      margin: '0px auto',
      maxWidth: '960px',
      padding: '0px 1.0875rem 1.45rem'
    }}>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <img
          src={icon}
          alt="kitconcept"
          style={{
            height: '45px',
            marginTop: '10px'
          }}
        />
        <span style={{
          borderRight: '1px solid rgba(0,0,0,.15)',
          height: '28px',
          display: 'inline-block',
          verticalAlign: 'top',
          paddingLeft: '15px',
          marginTop: '20px'
        }}></span>
        <span style={{
          display: 'inline-block',
          color: 'black',
          verticalAlign: 'top',
          marginTop: '20px',
          marginLeft: '15px',
          fontSize: '1.5em',
          fontWeight: '100',
        }}>kitconcept blog</span>
      </Link>
    </div>
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
        padding: '100px 1.0875rem 1.45rem',
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
