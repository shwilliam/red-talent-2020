import React from 'react'
import {Button, Collapsible, Banner, Navigation} from '../components'
import styled from 'styled-components'
import devLogo from '../../assets/images/dev.svg'
import dmLogo from '../../assets/images/dm.svg'
import uxuiLogo from '../../assets/images/ux_ui.svg'
import Footer from '../components/Footer'
import ReactGA from 'react-ga'

if (typeof window !== 'undefined') ReactGA.pageview(location.pathname)

const TalentSection = styled.section`
  width: 90%;
  margin: 0 auto;
  background: #fff;
  text-align: center;
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  margin-top: 6rem;
  margin-bottom: 2rem;

  @media only screen and (min-width: 768px) {
    background: transparent;
    color: #fff;
    box-shadow: none;
    margin-top: 10rem;
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
    display: flex;
    justify-content: flex-start;
    max-height: 350px;
    width: 70%;
  }
`

const EventTitle = styled.h3`
  padding-top: 1rem;
  font-size: 0.85rem;
  color: #383838;

  @media only screen and (min-width: 768px) {
    font-size: 1.25rem;
    margin-top: 0.5rem;
  }
`

const EventDesc = styled.p`
  padding: 0.5rem 0;
  font-size: 1rem;
  color: #383838;
  font-weight: 600;

  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
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
    max-width: 1300px;
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2.5rem;
  }
`

const EventImg = styled.img`
  width: 100%;
  margin: 0 auto;
  height: auto;
  border-radius: 4px;

  @media only screen and (min-width: 768px) {
    flex-basis: 50%;
    margin: unset;
  }
`

const EventDetails = styled.section`
  text-align: center;
  @media only screen and (min-width: 768px) {
    display: flex;
    text-align: left;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 50%;
    border: 0.3px solid #979797;
  }
`

const EventImgContainer = styled.section`
  color: #fff;
  position: relative;
`

const EventImgText = styled.p`
  @media only screen and (min-width: 768px) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.75rem;
    text-align: center;
    background: rgba(208, 56, 43, 0.8);
    font-size: 2rem;
  }
`

const Event = () => {
  return (
    <main>
      <Navigation white route="/" />
      <Banner image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
      <TalentSection>
        <Title>Talent Connect at RED Academy</Title>
        <TalentDate>05 March, 2020</TalentDate>
        <Button to="/contact">Join Event</Button>
      </TalentSection>
      <WhoWeAreTitle>Who Are We?</WhoWeAreTitle>
      <WhoWeAreImg src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
      <Paragraph>
        RED Academy is a leading-edge design and technology school,
        with programs designed unlike any other. We also produce the
        professionals of tomorrow unlike any other.
      </Paragraph>
      <Paragraph>
        With the real workplace in mind, staying up to date with the
        ever-growing tech industry.
      </Paragraph>
      <Paragraph>
        Whether you are a start-up looking for a new member for your
        great idea, or an established company looking to grow your
        team, you are sure to find your next great hire at our Talent
        Connect Event.
      </Paragraph>
      <KeySection>
        <Title style={{color: '#5c5c5c'}}>
          Our Key Qualifications
        </Title>
        <KeyDesktopStyles>
          <Collapsible icon={uxuiLogo} dep="UI/UX DESIGN">
            <DepParagraph>
              UI & UX students take a human-centric approach in
              designing delightful experiences that meet business
              goals while balancing seamless interactivity and
              navigation.
            </DepParagraph>
          </Collapsible>
          <Collapsible icon={devLogo} dep="DEVELOPMENT">
            <DepParagraph>
              Web and App Development students code websites and build
              web and mobile applications using the most in-demand
              technologies.
            </DepParagraph>
          </Collapsible>
          <Collapsible icon={dmLogo} dep="DIGITAL MARKETING">
            <DepParagraph>
              Digital Marketing students create and deploy online
              strategies, and are versed in today’s core industry
              skills.
            </DepParagraph>
          </Collapsible>
        </KeyDesktopStyles>
      </KeySection>
      <Title style={{color: '#5c5c5c'}}>Event Details</Title>
      <EventSection>
        <EventImgContainer>
          <EventImg src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
          <EventImgText>RED Academy Talent Connect</EventImgText>
        </EventImgContainer>
        <EventDetails>
          <EventTitle>Date and Time</EventTitle>
          <EventDesc>05 March, 2020 6PM</EventDesc>
          <EventTitle>Location</EventTitle>
          <EventDesc>Red Academy</EventDesc>
        </EventDetails>
      </EventSection>
      <Center style={{marginBottom: '5rem'}}>
        <Button to="/contact">Join Event</Button>
      </Center>
      <Footer />
    </main>
  )
}

export default Event
