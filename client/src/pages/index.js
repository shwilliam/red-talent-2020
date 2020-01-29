import React, {useState} from 'react'
import {useRouteData} from 'react-static'
import {
  ProfileGrid,
  ProfileGridItem,
  ProfileCard,
} from '../components'
import {LINKEDIN_IDS} from '../../data'

// GRADUATES PAGE

const Home = () => {
  const {profiles} = useRouteData()
  console.log(profiles)
  const [filter, setFilter] = useState([])

  console.log(profiles)
  console.log('f', filter)

  const toggleFilter = (dep, e) => {
    const idx = filter.indexOf(dep)
    const filterCopy = [...filter]

    if (e.target.checked || idx === -1) {
      filterCopy.push(dep)
    } else {
      filterCopy.splice(idx, 1)
    }
    setFilter(filterCopy)
  }

  return (
    <>
      <header>
        <h1>Graduates</h1>

        <p>
          Meet the talents you'll connect with at Red Academy's event!
          Our Recent graduates have all worked with real clients,
          learned today's core digital skills and become
          industry-ready professionals. Their Knowledge, passion and
          innovation will help you move your business to the next
          level!
        </p>
      </header>

      <main>
        <label>
          Designers
          <input
            onChange={e => toggleFilter('des', e)}
            type="checkbox"
            name="filter-design"
            value="design"
          />
        </label>

        <label>
          Developers
          <input
            onChange={e => toggleFilter('dev', e)}
            type="checkbox"
            name="filter-developers"
            value="developers"
          />
        </label>

        <label>
          Marketers
          <input
            onChange={e => toggleFilter('mar', e)}
            type="checkbox"
            name="filter-marketers"
            value="marketers"
          />
        </label>

        <ProfileGrid>
          {profiles
            .filter((_, i) =>
              filter && filter.length
                ? LINKEDIN_IDS[
                    Object.keys(LINKEDIN_IDS)[i]
                  ].dep.some(f => filter.includes(f))
                : true,
            )
            .map(s => (
              <ProfileGridItem
                key={s.profile.name.split(' ').join('-')}
              >
                <ProfileCard
                  name={s.profile.name}
                  imgUrl={s.profile.imageurl}
                />
              </ProfileGridItem>
            ))}
        </ProfileGrid>
      </main>

      <footer>
        <p>LOGO</p>
        <p>
          Event promoted by{' '}
          <a href="https://redacademy.com/">RED Academy</a>
        </p>
      </footer>
    </>
  )
}

export default Home
