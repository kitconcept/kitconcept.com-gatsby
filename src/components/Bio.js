import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './timo.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Timo Stollenwerk`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Timo Stollenwerk works at kitconcept and he is the main author of plone.restapi. He is a Plone developer since twelve years and a Plone core developer since seven years. He is member of the Plone framework team, the release team and the CI and testing team.
        </p>
      </div>
    )
  }
}

export default Bio
