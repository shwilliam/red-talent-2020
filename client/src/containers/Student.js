import React from 'react'
import {useRouteData} from 'react-static'
import {Link} from 'components/Router'

export default function Student() {
  const {student} = useRouteData()

  return (
    <div>
      <Link to="/profile/">{'<'} Back</Link>
      <br />
      <h3>{student.Name}</h3>
      <p>{student.Bio || 'Cmon mang, add a bio'}</p>
    </div>
  )
}
