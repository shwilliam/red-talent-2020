import React from 'react'
import {Root, Routes, addPrefetchExcludes} from 'react-static'
import {Router} from '@reach/router'
import {LoadingPage} from './components'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-158086461-1')

// any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <React.Suspense fallback={<LoadingPage />}>
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </Root>
  )
}

export default App
