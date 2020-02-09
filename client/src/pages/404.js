import React from 'react'
import ReactGA from 'react-ga'

if (typeof window !== 'undefined') ReactGA.pageview(location.pathname)

export default () => (
  <div>
    <h1>404 - Oh no's! We couldn't find that page :(</h1>
  </div>
)
