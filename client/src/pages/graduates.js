import React, {useState} from 'react'
import {useRouteData} from 'react-static'
import BannerImg from '../../assets/images/banner.jpg'
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
  object-position: center;
  height: 12rem;
  z-index: -99;
  filter: brightness(60%);

  @media only screen and (min-width: 700px) {
    height: 35rem;
  }
`

const GraduatesContainer = styled.main`
  margin-bottom: 60px;
`

const Home = () => {
  const {profiles} = useRouteData()
  const [filter, setFilter] = useState('dev')

  const toggleFilter = dep => {
    setFilter(dep)
  }

  return (
    <>
      <Navigation route="/graduates" white />
      <GraduatesBanner src={BannerImg} />
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
              onChange={() => toggleFilter('des')}
              type="checkbox"
              name="filter-design"
              value="design"
              checked={filter.includes('des')}
            />
          </Label>

          <Label checked={filter.includes('dev')}>
            Developers
            <Input
              onChange={() => toggleFilter('dev')}
              type="checkbox"
              name="filter-developers"
              value="developers"
              checked={filter.includes('dev')}
            />
          </Label>

          <Label checked={filter.includes('mar')}>
            Marketers
            <Input
              onChange={() => toggleFilter('mar')}
              type="checkbox"
              name="filter-marketers"
              value="marketers"
              checked={filter.includes('mar')}
            />
          </Label>
        </GraduatesLabel>

        <ProfileGrid>
          {profiles
            .filter(s => s.dep.toLowerCase().includes(filter))
            .map(s => (
              <ProfileGridItem key={s.name}>
                <ProfileCard
                  name={`${s.name} ${s.lastName}`}
                  imgUrl={s.imgUrl}
                  desc={s.bio}
                  dep={s.dep}
                  url={s.url}
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
