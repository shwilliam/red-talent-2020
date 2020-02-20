import React, {useState} from 'react'
import {useRouteData} from 'react-static'
import {
  Navigation,
  ProfileGrid,
  ProfileGridItem,
  ProfileCard,
  Title,
  Input,
  Label,
  GraduatesLabel,
  Paragraph,
  Header,
} from '../components'
import {LINKEDIN_IDS} from '../../data'
import Footer from '../components/Footer'
import styled from 'styled-components'
import ReactGA from 'react-ga'

if (typeof window !== 'undefined') ReactGA.pageview(location.pathname)

// GRADUATES PAGE

const GraduatesBanner = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: top;
  height: 12rem;
  z-index: -99;

  @media only screen and (min-width: 700px) {
    height: 30rem;
  }
`

const RedBanner = styled.div`
  height: 30rem;
  background-color: #b84334;
  position: absolute;
  left: 0;
  width: 40vw;
  display: none;

  @media only screen and (min-width: 700px) {
    display: initial;
  }
`

const GraduatesContainer = styled.main`
  margin-bottom: 60px;
`

const Home = () => {
  const {profiles} = useRouteData()
  const [filter, setFilter] = useState(['dev'])

  const toggleFilter = (dep, e) => {
    const idx = filter.indexOf(dep)
    const filterCopy = [...filter]

    if (e.target.checked || idx === -1) {
      filterCopy.push(dep) && filterCopy.splice(0, 1)
    } else {
      filterCopy.splice(idx, 1)
    }
    setFilter(filterCopy)
  }

  return (
    <>
      <Navigation />
      <GraduatesBanner src="https://redacademy.com/content/uploads/2017/05/homepage-test-23.jpg" />
      <RedBanner />
      <Header>
        <Title>Graduates</Title>

        <Paragraph>
          Meet the talents you'll connect with at Red Academy's event!
          Our Recent graduates have all worked with real clients,
          learned today's core digital skills and become
          industry-ready professionals. Their Knowledge, passion and
          innovation will help you move your business to the next
          level!
        </Paragraph>
      </Header>

      <GraduatesContainer>
        <GraduatesLabel>
          <Label checked={filter.includes('des')}>
            Designers
            <Input
              onChange={e => toggleFilter('des', e)}
              type="checkbox"
              name="filter-design"
              value="design"
            />
          </Label>

          <Label checked={filter.includes('dev')}>
            Developers
            <Input
              onChange={e => toggleFilter('dev', e)}
              type="checkbox"
              name="filter-developers"
              value="developers"
            />
          </Label>

          <Label checked={filter.includes('mar')}>
            Marketers
            <Input
              onChange={e => toggleFilter('mar', e)}
              type="checkbox"
              name="filter-marketers"
              value="marketers"
            />
          </Label>
        </GraduatesLabel>

        <ProfileGrid>
          {profiles
            .filter((_, i) =>
              filter && filter.length
                ? LINKEDIN_IDS[
                    Object.keys(LINKEDIN_IDS)[i]
                  ].dep.some(f => filter.includes(f))
                : true,
            )
            .map((s, i) => (
              <ProfileGridItem
                key={s.profile.name.split(' ').join('-')}
              >
                <ProfileCard
                  name={s.profile.name}
                  imgUrl={s.profile.imageurl}
                  desc={s.profile.summary}
                  dep={LINKEDIN_IDS[Object.keys(LINKEDIN_IDS)[i]].dep}
                  id={Object.keys(LINKEDIN_IDS)[i]}
                />
              </ProfileGridItem>
            ))}
        </ProfileGrid>
      </GraduatesContainer>

      <Footer />
    </>
  )
}

export default Home
