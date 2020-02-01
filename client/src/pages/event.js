import React from 'react'
import {
  Button,
  Title,
  Collapsible,
  SubTitle,
  Banner,
  Image
} from '../components'
import styled from 'styled-components'
import { FaPoop, FaDev } from 'react-icons/fa'

const TalentSection = styled.section`
  width: 70%;
  margin: 0 auto;
  background: #fff;
  text-align: center;
  padding: 2rem;
  margin-top: 10rem;
`

const Date = styled.p`
  padding-bottom: 1.5rem;
  font-weight: 100;
`

const Paragraph = styled.p`
  width: 80%;
  margin: 0 auto;
  padding: 0.5rem 0;
`

const EventSection = styled.section`
  width: 90%;
  margin: 0 auto;
`

const EventImg = styled.img`
  width: 100%;
  height: auto;
`

const Event = () => {
  return (
    <main>
      <Banner image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' />
      <TalentSection>
        <Title>Talent Connect at RED Academy</Title>
        <Date>05 March, 2020</Date>
        <Button to='/contact'>Join Event</Button>
      </TalentSection>
      <Title>Who are we?</Title>
      <Image
        src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
        height='30vh'
      />
      <Paragraph>
        RED Academy is a leading-edge design and technology school, with
        programs designed unlike any other. We also produce the professionals of
        tomorrow unlike any other.
      </Paragraph>
      <Paragraph>
        With the real workplace in mind, staying up to date with the
        ever-growing tech industry.
      </Paragraph>
      <Paragraph>
        Whether you are a start-up looking for a new member for your great idea,
        or an established company looking to grow your team, you are sure to
        find your next great hire at our Talent Connect Event.
      </Paragraph>
      <section>
        <Title>Our Key Qualificaitons</Title>
        <Collapsible Icon={FaPoop} dep='UI/UX DESIGN'>
          <p>
            UI & UX students take a human-centric approach in designing
            delightful experiences that meet business goals while balancing
            seamless interactivity and navigation.
          </p>
        </Collapsible>
        <Collapsible Icon={FaDev} dep='DEVELOPMENT'>
          <p>
            Web and App Development students code websites and build web and
            mobile applications using the most in-demand technologies.
          </p>
        </Collapsible>
        <Collapsible Icon={FaPoop} dep='DIGITAL MARKETING'>
          <p>
            Digital Marketing students create and deploy online strategies, and
            are versed in today’s core industry skills.
          </p>
        </Collapsible>
      </section>
      <section>
        <Title>Event Details</Title>
        <EventSection>
          <EventImg src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' />
          <SubTitle>Date and Time</SubTitle>
          <p>05 March, 2020 6PM</p>
          <SubTitle>Location</SubTitle>
          <p>Red Academy</p>
        </EventSection>
      </section>
      <Button to='/contact'>Join Event</Button>
      <Footer />
    </main>
  )
}

export default Event
