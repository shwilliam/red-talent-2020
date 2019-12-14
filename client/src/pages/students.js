import React from 'react'
import {useRouteData} from 'react-static'
import {Link} from 'components/Router'

export default function Students() {
  const {students} = useRouteData()
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
        {students.map(s => (
          <li key={s.id}>
            <Link
              to={`/profile/${s.Name.split(' ')
                .join('_')
                .toLowerCase()}/`}
            >
              {s.Name}
            </Link>
          </li>
        ))}
      </ul>
      <a href="#top" id="bottom">
        Scroll to top!
      </a>
    </div>
  )
}
