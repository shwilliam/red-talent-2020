import React from 'react'
import {useRouteData} from 'react-static'
import {
  ProfileGrid,
  ProfileGridItem,
  ProfileCard,
} from '../components'

const Home = () => {
  const {profiles} = useRouteData()

  console.log(profiles)

  return (
    <>
      <h1>Students</h1>

      <a href="#bottom" id="top">
        Scroll to bottom!
      </a>

      <ProfileGrid>
        {profiles.map(s => (
          <ProfileGridItem key={s.profile.name.split(' ').join('-')}>
            <ProfileCard
              name={s.profile.name}
              imgUrl={s.profile.imageurl}
            />
          </ProfileGridItem>
        ))}
      </ProfileGrid>

      <a href="#top" id="bottom">
        Scroll to top!
      </a>
    </>
  )
}

export default Home
