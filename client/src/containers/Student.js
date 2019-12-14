import React from 'react'
import {useRouteData} from 'react-static'
import {Link} from 'components/Router'
import {SERVER_URL} from '../../config'

export default function Student() {
  const {student} = useRouteData()

  return (
    <div>
      <h3>{student.Name}</h3>

      <p>{student.Bio || 'Cmon mang, add a bio'}</p>

      {student.LinkedinURL ? (
        <a href={student.LinkedinURL}>linkedin</a>
      ) : null}

      {student.PortfolioURL ? (
        <a href={student.PortfolioURL}>portfolio</a>
      ) : null}

      {student.Image ? (
        <img src={`${SERVER_URL}${student.Image.url}`} />
      ) : null}

      <Link to="/profile/">{'<'} Back</Link>
    </div>
  )
}
