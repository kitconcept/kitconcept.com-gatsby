import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Headroom from 'react-headroom';
import logo from './logo.svg';
import icon from './icon.svg';


import { Container } from 'react-responsive-grid'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <div>
        <Helmet
          title="kitconcept blog"
          meta={[
            { name: 'description', content: 'kitconcept company blog' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          link={[
            {
              rel: 'stylesheet',
              href: "https://cloud.typography.com/7268374/726048/css/fonts.css",
              media: "bogus"
            }
          ]}
        />
        <Headroom style={{
          background: 'white',
          height: '65px',
          paddingLeft: '20px',
          paddingRight: '20px',
          borderBottom: '1px solid #f2f2f2',
          fontFamily: 'Gotham SSm A, Gotham SSm B'
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
                  marginTop: '10px',
                  marginBottom: '10px'
                }}
              />
              <span style={{
                borderRight: '1px solid rgba(0,0,0,.15)',
                height: '30px',
                display: 'inline-block',
                verticalAlign: 'top',
                paddingLeft: '15px',
                marginTop: '20px',
                marginBottom: '20px'
              }}></span>
              <h1 style={{
                display: 'inline-block',
                color: 'black',
                verticalAlign: 'top',
                marginTop: '20px',
                marginLeft: '15px',
                fontSize: '1.5em',
                fontWeight: '200',
                fontStyle: 'normal',
                lineHeight: '30px'
              }}>kitconcept blog</h1>
            </Link>
          </div>
        </Headroom>
        <Container
          style={{
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {children()}
        </Container>
      </div>
    )
  }
}

export default Template
