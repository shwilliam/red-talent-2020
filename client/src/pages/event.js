import React from 'react'
import { Button, Collapsible, Banner } from '../components'
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

  @media only screen and (min-width: 768px) {
    background: transparent;
    color: #fff;
  }
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

  @media only screen and (min-width: 768px) {
    color: #fff;
    font-size: 1.75rem;
  }
`

const WhoWeAreTitle = styled.h1`
  font-size: 1.35rem;
  font-family: Lato;
  font-weight: 600;
  text-align: center;
  width: 60%;
  letter-spacing: 0.05rem;
  padding-bottom: 1.5rem;
  margin: 0 auto;
  color: #5c5c5c;

  @media only screen and (min-width: 768px) {
    color: #5c5c5c;
    font-size: 1.75rem;
    margin-top: 15rem;
  }
`

const TalentDate = styled.p`
  padding-bottom: 1.5rem;
  font-size: 0.75rem;
  font-weight: 100;

  @media only screen and (min-width: 768px) {
    color: #fff;
    font-size: 1.25rem;
  }
`

const Paragraph = styled.p`
  width: 90%;
  margin: 0 auto;
  color: #5c5c5c;
  line-height: 1.5rem;
  padding: 0.5rem 0;
  margin-top: 0.5rem;

  @media only screen and (min-width: 768px) {
    width: 800px;
  }
`

const DepParagraph = styled.p`
  width: 100%;
  color: #5c5c5c;
  line-height: 1.5rem;
  padding: 0.5rem 0;
  margin-bottom: 1.5rem;
  text-align: left;

  @media only screen and (min-width: 768px) {
    padding: 1rem 0;
  }
`

const KeySection = styled.section`
  margin-top: 2rem;

  @media only screen and (min-width: 768px) {
    margin: 5rem 0;
  }
`

const EventSection = styled.section`
  width: 90%;
  margin: 0 auto 1.5rem auto;

  @media only screen and (min-width: 768px) {
    margin: 5rem auto;
  }
`

const EventTitle = styled.h3`
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

const WhoWeAreImg = styled.img`
  height: 300px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    height: 500px;
    width: auto;
    margin: 0 auto;
    display: block;
  }
`

const KeyDesktopStyles = styled.section`
  @media only screen and (min-width: 768px) {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
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
      <WhoWeAreTitle>Who Are We?</WhoWeAreTitle>
      <WhoWeAreImg src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' />
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
        <Title style={{ color: '#5c5c5c' }}>Our Key Qualificaitons</Title>
        <KeyDesktopStyles>
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
              Digital Marketing students create and deploy online strategies,
              and are versed in today’s core industry skills.
            </DepParagraph>
          </Collapsible>
        </KeyDesktopStyles>
      </KeySection>
      <Title style={{ color: '#5c5c5c' }}>Event Details</Title>
      <EventSection>
        {/* <Image
          heigth='30vh'
          src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
        /> */}
        <EventTitle>Date and Time</EventTitle>
        <EventDesc>05 March, 2020 6PM</EventDesc>
        <EventTitle>Location</EventTitle>
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
