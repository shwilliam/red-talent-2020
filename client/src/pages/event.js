import React from 'react'
import {
  Button,
  // Title,
  Collapsible,
  SubTitle,
  Banner,
  Image
} from '../components'
import styled from 'styled-components'
import { FaPoop, FaDev } from 'react-icons/fa'
import Footer from '../components/Footer'

const TalentSection = styled.section`
  width: 90%;
  margin: 0 auto;
  background: #fff;
  text-align: center;
  padding: 2rem;
  border-radius: 4px;
  margin-top: 10rem;
  margin-bottom: 2rem;
`

const Title = styled.h1`
  font-size: 1.35rem;
  font-family: Lato;
  font-weight: 600;
  text-align: center;
  width: 60%;
  letter-spacing: 0.05rem;
  padding-bottom: 1.5rem;
  margin: 0 auto;
  color: #5c5c5c;
`

const TalentDate = styled.p`
  padding-bottom: 1.5rem;
  font-size: 0.75rem;
  font-weight: 100;
`

const Paragraph = styled.p`
  width: 90%;
  margin: 0 auto;
  color: #5c5c5c;
  line-height: 1.5rem;
  padding: 0.5rem 0;
  margin-top: 0.5rem;
`

const DepParagraph = styled.p`
  width: 100%;
  color: #5c5c5c;
  line-height: 1.5rem;
  padding: 0.5rem 0;
  margin-bottom: 1.5rem;
`

const KeySection = styled.section`
  margin-top: 2rem;
`

const EventSection = styled.section`
  width: 90%;
  margin: 0 auto 1.5rem auto;
`

const EventTitlte = styled.h3`
  padding-top: 1rem;
  font-size: 0.85rem;
  color: #383838;
`

const EventDesc = styled.p`
  padding: 0.5rem 0;
  font-size: 1rem;
  color: #383838;
  font-weight: 600;
`

const Center = styled.div`
  width: 90%;
  margin: 1rem auto;
  text-align: center;
`

const Event = () => {
  return (
    <main>
      <Banner image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' />
      <TalentSection>
        <Title>Talent Connect at RED Academy</Title>
        <TalentDate>05 March, 2020</TalentDate>
        <Button to='/contact'>Join Event</Button>
      </TalentSection>
      <Title>Who Are We?</Title>
      <Image
        src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
        height='40vh'
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
      <KeySection>
        <Title>Our Key Qualificaitons</Title>
        <Collapsible Icon={FaPoop} dep='UI/UX DESIGN'>
          <DepParagraph>
            UI & UX students take a human-centric approach in designing
            delightful experiences that meet business goals while balancing
            seamless interactivity and navigation.
          </DepParagraph>
        </Collapsible>
        <Collapsible Icon={FaDev} dep='DEVELOPMENT'>
          <DepParagraph>
            Web and App Development students code websites and build web and
            mobile applications using the most in-demand technologies.
          </DepParagraph>
        </Collapsible>
        <Collapsible Icon={FaPoop} dep='DIGITAL MARKETING'>
          <DepParagraph>
            Digital Marketing students create and deploy online strategies, and
            are versed in today’s core industry skills.
          </DepParagraph>
        </Collapsible>
      </KeySection>
      <Title>Event Details</Title>
      <EventSection>
        <Image
          heigth='30vh'
          src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
        />
        <EventTitlte>Date and Time</EventTitlte>
        <EventDesc>05 March, 2020 6PM</EventDesc>
        <EventTitlte>Location</EventTitlte>
        <EventDesc>Red Academy</EventDesc>
        <Center>
          <Button to='/contact'>Join Event</Button>
        </Center>
      </EventSection>
      <Footer />
    </main>
  )
}

export default Event
