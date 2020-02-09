import React from 'react'
import ReactGA from 'react-ga'

if (typeof window !== 'undefined') ReactGA.pageview(location.pathname)

const About = () => <p>about</p>

export default About
