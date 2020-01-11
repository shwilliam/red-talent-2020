import React from 'react'
import {useRouteData} from 'react-static'

export default function Students() {
  const {profiles} = useRouteData()

  return (
    <div>
      <h1>Students</h1>
      <div>
        <a href="#bottom" id="top">
          Scroll to bottom!
        </a>
      </div>
      <br />
      <ul>
        {profiles.map(s => console.log(s.profileAlternative.name))}
      </ul>
      {JSON.stringify(profiles)}
      <a href="#top" id="bottom">
        Scroll to top!
      </a>
    </div>
  )
}
